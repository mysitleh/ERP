# AI AGENT INSTRUCTION: Static Site + Google Sheets Backend

Jika Anda (AI Agent) diminta untuk membuat sistem absensi/kontak yang menghubungkan Frontend Statis ke Google Sheets, ikuti alur **"Robust Path"** di bawah ini untuk menghindari error CORS dan kegagalan data.

---

## 1. Implementasi Backend (Google Apps Script)

**CRITICAL:** Jangan gunakan `doGet`. Gunakan `doPost`.  
**CRITICAL:** Gunakan `LockService` untuk mencegah data tumpang tindih.

### Code Setup:
Paste kode ini di Extensions > Apps Script pada Google Sheets.

```javascript
var sheetName = 'Sheet1';

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000); // Tunggu maksimal 10 detik jika ada akses simultan
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
    
    // Auto-create header jika sheet masih kosong
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp', 'Nama_Lengkap', 'NIM', 'Pertemuan', 'Feedback_Ide', 'Komentar']);
    }
    
    var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    var nextRow = sheet.getLastRow() + 1;
    
    var newRow = headers.map(function(header) {
      if (header === 'Timestamp') return new Date();
      return e.parameter[header] || ''; // Mapping otomatis berdasarkan name="" di HTML
    });
    
    sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
```

### Deployment Rule:
1. Klik **Deploy** > **New Deployment**.
2. Type: **Web App**. 
3. Access: **Anyone**.
4. **PENTING:** Setiap perubahan kode GAS wajib dideploy sebagai **VERSION: NEW**. Deployment lama TIDAK akan terupdate otomatis.

---

## 2. Implementasi Frontend (JavaScript)

**CRITICAL:** Google Apps Script tidak mendukung CORS tradisional.  
**CRITICAL:** Gunakan `mode: 'no-cors'` dan kirim data sebagai `URLSearchParams`.

```javascript
const SCRIPT_URL = 'URL_WEB_APP_ANDA';

form.addEventListener('submit', e => {
    e.preventDefault();
    
    // Gunakan URLSearchParams, jangan FormData mentah
    const data = new URLSearchParams();
    data.append('Nama_Lengkap', document.getElementById('nama').value);
    // ... tambahkan field lainnya sesuai header di Sheets
    
    fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // WAJIB: Google Apps Script tidak kirim header CORS
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: data.toString()
    })
    .then(() => {
        // Karena no-cors, kita tidak bisa baca response JSON. 
        // Anggap sukses jika transmisi selesai.
        alert('Data Berhasil Terkirim!');
    });
});
```

---

## 3. Konfigurasi Multi-Page (Vite)

Jika proyek memiliki lebih dari satu file HTML (misal: `index.html`, `materi.html`, `absensi.html`), Vite harus dikonfigurasi secara manual.

```javascript
// vite.config.js
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        materi: resolve(__dirname, 'materi-1.html'),
        absensi: resolve(__dirname, 'absensi.html'),
      },
    },
  },
});
```

---

## 4. Strategi Deployment (Vercel CLI)

Jika deploy via CLI gagal karena build error di server (misal: permission git), gunakan metode **Pre-Build Local**:

1. Jalankan `npm run build` secara lokal.
2. Masukkan file `vercel.json` ke dalam folder `dist/`:
   ```json
   {
     "buildCommand": "",
     "installCommand": "",
     "framework": null,
     "outputDirectory": "."
   }
   ```
3. Deploy folder `dist` secara langsung:
   `npx vercel deploy ./dist --prod --yes`

---

## 5. Summary Checklist untuk Agent:
- [ ] Apps Script menggunakan `doPost` dan `LockService`.
- [ ] Apps Script dideploy versi `NEW` dan akses `Anyone`.
- [ ] Frontend menggunakan `fetch` dengan `mode: 'no-cors'`.
- [ ] Body request menggunakan string `URLSearchParams`.
- [ ] Nama field di HTML `name=""` sama persis dengan Header di Sheets.
- [ ] Vite Config mencakup semua entry point HTML.
