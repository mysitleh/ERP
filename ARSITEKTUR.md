# Dokumentasi Arsitektur Teknis
## Startup & Venture Capital — Course Website
**URL Produksi:** https://startupvcid.vercel.app  
**Repository:** https://github.com/mysitleh/startupvc  
**Tanggal:** 23 Februari 2026

---

## 1. Gambaran Arsitektur Sistem

```
┌─────────────────────────────────────────────────────────────────┐
│                        MAHASISWA (Browser)                       │
│                  https://startupvcid.vercel.app                  │
└──────────────────────────┬──────────────────────────────────────┘
                           │ HTTPS Request
                           ▼
┌─────────────────────────────────────────────────────────────────┐
│                      VERCEL (CDN/Hosting)                        │
│  ┌─────────────┐  ┌───────────────┐  ┌──────────────────────┐  │
│  │ index.html  │  │ materi-1.html │  │    absensi.html      │  │
│  │  (Syllabus) │  │  (Materi 01)  │  │  (Form Absensi)      │  │
│  └─────────────┘  └───────────────┘  └──────────────────────┘  │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │  /assets/main-*.css  |  /assets/main-*.js                │  │
│  └───────────────────────────────────────────────────────────┘  │
└──────────────────────────┬──────────────────────────────────────┘
                           │ HTTP POST (URL-encoded, no-cors)
                           ▼
┌─────────────────────────────────────────────────────────────────┐
│              GOOGLE APPS SCRIPT (Serverless Function)            │
│  URL: script.google.com/macros/s/AKfycbwC4Y.../exec             │
│                                                                  │
│  doPost(e) {                                                     │
│    → Parse e.parameter                                           │
│    → Lock spreadsheet (prevent race condition)                   │
│    → Write row to Google Sheets                                  │
│    → Return JSON response                                        │
│  }                                                               │
└──────────────────────────┬──────────────────────────────────────┘
                           │ Sheets API (internal Google)
                           ▼
┌─────────────────────────────────────────────────────────────────┐
│                    GOOGLE SHEETS (Database)                       │
│  Sheet: "Sheet1"                                                 │
│  Kolom: Timestamp | Nama_Lengkap | NIM | Pertemuan |            │
│         Feedback_Ide | Komentar                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## 2. Stack Teknologi

| Layer | Teknologi | Keterangan |
|---|---|---|
| **Frontend** | HTML5, CSS3, Vanilla JS | Multi-page static site |
| **Build Tool** | Vite 7.x | Bundling & optimisasi asset |
| **Hosting** | Vercel (Static CDN) | Deploy dari folder `/dist` |
| **Backend** | Google Apps Script | Serverless function |
| **Database** | Google Sheets | Penyimpanan data absensi |
| **Version Control** | Git + GitHub | Repository: `mysitleh/startupvc` |

---

## 3. Struktur File Proyek

```
Startupvc/
├── index.html          → Halaman Syllabus / RPS
├── materi-1.html       → Materi Minggu 01
├── absensi.html        → Form Absensi & Feedback
├── style.css           → Global stylesheet (Academic Modern)
├── main.js             → Interaktivitas (scroll spy, mobile menu)
├── vite.config.js      → Konfigurasi multi-page build
├── vercel.json         → Konfigurasi deployment Vercel
├── package.json        → Dependencies & scripts
└── dist/               → Output build (yang di-deploy ke Vercel)
    ├── index.html
    ├── materi-1.html
    ├── absensi.html
    ├── vercel.json     → Instruksi Vercel: skip build, serve as-is
    └── assets/
        ├── main-*.css
        └── main-*.js
```

---

## 4. Alur Koneksi Frontend → Backend (Detail Teknis)

### 4.1 Pengiriman Form Absensi

Ketika mahasiswa menekan tombol **"Kirim Absensi"**, browser menjalankan kode berikut:

```javascript
// absensi.html (script inline)
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwC4Y.../exec';

// 1. Kumpulkan data form sebagai URL-encoded string
const data = new URLSearchParams();
data.append('Nama_Lengkap', document.getElementById('nama').value);
data.append('NIM', document.getElementById('nim').value);
data.append('Pertemuan', document.getElementById('pertemuan').value);
data.append('Feedback_Ide', document.getElementById('feedback').value);
data.append('Komentar', document.getElementById('question').value);

// 2. Kirim ke Google Apps Script via HTTP POST
fetch(SCRIPT_URL, {
    method: 'POST',
    mode: 'no-cors',                               // ← KUNCI: bypass CORS browser
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: data.toString()                          // format: "key=val&key2=val2"
})
.then(() => {
    // 3. Tampilkan pesan sukses
    formMessage.innerText = '✅ Absensi tercatat!';
});
```

### 4.2 Mengapa `no-cors` dan URL-encoded?

| Opsi | Alasan |
|---|---|
| `mode: 'no-cors'` | Google Apps Script tidak mengirim header CORS yang valid. `no-cors` memaksa browser mengirim request tanpa menunggu izin CORS, sehingga data tetap terkirim. |
| `application/x-www-form-urlencoded` | Format ini didukung oleh `e.parameter` di Apps Script. `FormData` (multipart) tidak bisa dibaca oleh Apps Script dari domain eksternal. |

### 4.3 Pemrosesan di Google Apps Script

```javascript
// Google Apps Script
function doPost(e) {
    var lock = LockService.getScriptLock();      // Cegah race condition
    lock.tryLock(10000);
    try {
        var sheet = SpreadsheetApp.getActiveSpreadsheet()
                                  .getSheetByName('Sheet1');
        
        // Auto-buat header jika sheet masih kosong
        if (sheet.getLastRow() === 0) {
            sheet.appendRow(['Timestamp', 'Nama_Lengkap', 'NIM',
                             'Pertemuan', 'Feedback_Ide', 'Komentar']);
        }
        
        var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn())
                           .getValues()[0];
        
        // Map header ke nilai dari e.parameter (sesuai nama field HTML)
        var newRow = headers.map(function(header) {
            if (header === 'Timestamp') return new Date();
            return e.parameter[header] || '';    // e.parameter['Nama_Lengkap'] dst.
        });
        
        sheet.getRange(sheet.getLastRow() + 1, 1, 1, newRow.length)
             .setValues([newRow]);               // Tulis ke Sheets
             
        return ContentService
            .createTextOutput(JSON.stringify({ result: 'success' }))
            .setMimeType(ContentService.MimeType.JSON);
    } finally {
        lock.releaseLock();
    }
}
```

---

## 5. Konfigurasi Build (Vite Multi-Page)

```javascript
// vite.config.js
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main:    resolve(__dirname, 'index.html'),
                materi1: resolve(__dirname, 'materi-1.html'),
                absensi: resolve(__dirname, 'absensi.html'),
            },
        },
    },
});
```

**Mengapa ini penting?** Vite secara default hanya memproses `index.html`. Dengan konfigurasi `rollupOptions.input`, semua halaman HTML ikut di-bundle dan dioptimasi bersama satu file CSS dan JS.

---

## 6. Konfigurasi Deployment Vercel

### `vercel.json` (root proyek — untuk referensi build)
```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "framework": "vite",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install"
}
```

### `dist/vercel.json` (file yang aktif di-deploy)
```json
{
  "buildCommand": "",
  "installCommand": "",
  "framework": null,
  "outputDirectory": "."
}
```

**Penjelasan:** Karena masalah permission tim Vercel (Git author tidak bisa build di server), strategi yang digunakan adalah **deploy folder `/dist` secara langsung** via CLI. File `dist/vercel.json` memberitahu Vercel untuk melayani file apa adanya tanpa menjalankan build lagi di server.

---

## 7. Workflow Pengembangan & Deploy

```
1. Edit file (index.html / materi-1.html / absensi.html / style.css)
   ↓
2. npm run build
   → Menghasilkan folder /dist dengan semua halaman teroptimasi
   ↓
3. (Hapus dist/.vercel jika ada)
   ↓
4. npx vercel deploy ./dist --prod --yes
   → Upload folder /dist ke Vercel CDN
   ↓
5. npx vercel alias [deployment-url] startupvcid.vercel.app
   → Pastikan domain startupvcid.vercel.app mengarah ke deployment terbaru
   ↓
6. git add . && git commit -m "..." && git push origin main
   → Sinkronisasi ke GitHub untuk version control
```

---

## 8. Mapping Nama Field: HTML ↔ Apps Script ↔ Sheets

| Input HTML (`name=`) | Apps Script (`e.parameter`) | Kolom Google Sheets |
|---|---|---|
| `Nama_Lengkap` | `e.parameter['Nama_Lengkap']` | `Nama_Lengkap` |
| `NIM` | `e.parameter['NIM']` | `NIM` |
| `Pertemuan` | `e.parameter['Pertemuan']` | `Pertemuan` |
| `Feedback_Ide` | `e.parameter['Feedback_Ide']` | `Feedback_Ide` |
| `Komentar` | `e.parameter['Komentar']` | `Komentar` |
| *(otomatis)* | `new Date()` | `Timestamp` |

> ⚠️ **Aturan kritis**: Nama field di HTML `name=""` HARUS sama persis (case-sensitive) dengan nama header kolom di Google Sheets.

---

## 9. Troubleshooting Referensi Cepat

| Masalah | Penyebab | Solusi |
|---|---|---|
| Data tidak masuk Sheets | `setup()` belum dijalankan | Jalankan fungsi `setup()` di Apps Script editor |
| Error 126 di Vercel | Konflik `"type": "commonjs"` vs ESM | Pastikan `package.json` bertipe `"module"` |
| Halaman 404 | Hanya `index.html` yang di-build | Pastikan `vite.config.js` mendaftarkan semua halaman |
| Login diminta mahasiswa | Vercel Deployment Protection aktif | Matikan di Settings → Deployment Protection |
| CORS error | `FormData` tidak diterima Apps Script | Gunakan `URLSearchParams` + `mode: 'no-cors'` |
| Apps Script tidak update | Deploy lama masih aktif | Buat **New Version** saat deploy ulang Apps Script |

---

*Dokumentasi ini dibuat otomatis oleh Antigravity AI Assistant — 23 Februari 2026*
