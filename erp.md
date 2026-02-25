# Rencana Materi Mata Kuliah Enterprise Resource Planning (ERP)
## Program Studi Bisnis Digital (16 Pertemuan, termasuk UTS & UAS)

> **Catatan konteks dosen:** Background TI justru sangat relevan untuk mengajar ERP di Prodi Bisnis Digital karena ERP berfokus pada integrasi proses bisnis, data, sistem, automasi, dan pengambilan keputusan lintas fungsi.

---

## 1. Gambaran Umum Mata Kuliah

### Deskripsi Singkat
Mata kuliah **Enterprise Resource Planning (ERP)** membahas konsep, arsitektur, modul, proses bisnis terintegrasi, implementasi, serta pemanfaatan ERP dalam konteks **bisnis digital**. Mahasiswa akan memahami bagaimana ERP menghubungkan fungsi-fungsi bisnis (penjualan, pengadaan, persediaan, keuangan, SDM, layanan) dalam satu sistem terpadu untuk meningkatkan efisiensi, akurasi data, dan kualitas keputusan.

### Relevansi untuk Prodi Bisnis Digital
ERP penting untuk:
- integrasi operasional bisnis digital (website, marketplace, POS, gudang, pembayaran)
- pengelolaan data lintas fungsi secara real-time
- standardisasi proses bisnis dan SOP
- analitik bisnis dan pengambilan keputusan
- kesiapan scale-up organisasi/startup/UMKM

---

## 2. Capaian Pembelajaran Mata Kuliah (CPMK)

Setelah mengikuti mata kuliah ini, mahasiswa diharapkan mampu:

1. Menjelaskan konsep dasar ERP dan perannya dalam bisnis digital.
2. Memetakan proses bisnis end-to-end yang terintegrasi lintas fungsi.
3. Mengidentifikasi modul-modul ERP dan hubungan antar modul.
4. Menganalisis kebutuhan ERP berdasarkan karakteristik organisasi/bisnis.
5. Menjelaskan tahapan implementasi ERP dan faktor keberhasilan/kegagalan.
6. Mengidentifikasi risiko, keamanan, dan tata kelola data dalam sistem ERP.
7. Menyusun rancangan sederhana adopsi/implementasi ERP untuk studi kasus bisnis.

---

## 3. Strategi Pengajaran (Cocok untuk Dosen Background TI)

### Pendekatan Utama
Gunakan pola:
**Masalah bisnis -> proses -> sistem ERP -> dampak bisnis**

### Prinsip Mengajar
- Fokus pada **logika bisnis dan integrasi sistem**, bukan hafalan menu software.
- Gunakan **studi kasus nyata** (UMKM, startup, toko online, agency, distributor).
- Hubungkan dengan pengetahuan TI:
  - integrasi data
  - API/middleware (konsep)
  - role-based access
  - data quality
  - dashboard dan analytics

### Bentuk Pembelajaran yang Disarankan
- Ceramah interaktif
- Diskusi studi kasus
- Simulasi proses bisnis (manual -> ERP)
- Mini project kelompok
- Presentasi dan review rancangan ERP

---

## 4. Struktur Materi 16 Pertemuan (Termasuk UTS & UAS)

---

### Pertemuan 1 — Pengantar ERP untuk Bisnis Digital
#### Topik
- Definisi ERP
- Perbedaan ERP vs aplikasi terpisah (standalone)
- Evolusi ERP: on-premise, cloud ERP, SaaS ERP
- Peran ERP dalam bisnis digital
- Gambaran umum platform ERP (contoh: SAP, Dynamics, Odoo, ERPNext) *(overview, tidak vendor-specific mendalam)*

#### Tujuan Pertemuan
Mahasiswa memahami bahwa ERP adalah **sistem integrasi proses bisnis**, bukan sekadar software akuntansi.

#### Aktivitas
- Diskusi: “Masalah operasional apa yang sering muncul jika tiap divisi pakai aplikasi berbeda?”

#### Tugas Ringan
- Identifikasi 3 jenis bisnis dan modul ERP yang kemungkinan dibutuhkan.

---

### Pertemuan 2 — Business Process Thinking & Integrasi Proses
#### Topik
- Konsep proses bisnis
- Functional silo vs integrated enterprise
- End-to-end process
- Pengenalan alur:
  - **Order to Cash (O2C)**
  - **Procure to Pay (P2P)**
  - **Record to Report (R2R)**

#### Tujuan Pertemuan
Mahasiswa mampu melihat bisnis sebagai rangkaian proses yang saling terhubung.

#### Aktivitas
- Mapping alur bisnis sederhana (misalnya toko online/preorder) secara manual.

---

### Pertemuan 3 — Modul Inti ERP dan Keterkaitannya
#### Topik
- Modul umum ERP:
  - Sales / CRM
  - Procurement / Purchasing
  - Inventory / Warehouse
  - Finance / Accounting
  - HR / Payroll
  - Production / Project / Service (sekilas)
- Keterkaitan antar modul
- Konsep data mengalir antar proses

#### Tujuan Pertemuan
Mahasiswa memahami struktur modular ERP dan hubungan antar fungsi bisnis.

#### Aktivitas
- Studi kasus relasi: sales order -> delivery -> invoice -> payment -> laporan keuangan.

---

### Pertemuan 4 — Data dalam ERP: Master Data, Transaction Data, Reporting
#### Topik
- Master data (customer, vendor, produk, COA, warehouse)
- Transaction data (PO, SO, invoice, receipt, payment)
- Data quality issue (duplikasi, salah input, data tidak konsisten)
- Data governance dasar
- Reporting dan dashboard (konsep real-time visibility)

#### Tujuan Pertemuan
Mahasiswa memahami pentingnya kualitas data dalam ERP.

#### Aktivitas
- Diskusi kasus: dampak data produk/customer ganda terhadap operasional dan laporan.

---

### Pertemuan 5 — ERP untuk Sales, CRM, dan Customer Experience
#### Topik
- Alur lead -> opportunity -> quotation -> sales order -> delivery -> invoice
- Integrasi CRM dan ERP
- Omnichannel (website, WA, marketplace, POS) dan tantangan sinkronisasi
- KPI dasar penjualan (konseptual): conversion, order cycle time, repeat order

#### Tujuan Pertemuan
Mahasiswa memahami peran ERP dalam mendukung pertumbuhan penjualan digital yang terintegrasi.

#### Aktivitas
- Analisis alur penjualan bisnis online dan titik rawan data/operasional.

---

### Pertemuan 6 — Procurement, Inventory, dan Supply Chain Dasar
#### Topik
- Alur pengadaan:
  - purchase request
  - purchase order
  - goods receipt
  - vendor bill
  - payment
- Persediaan: stok masuk/keluar, reorder point, stock opname
- Integrasi gudang dan penjualan
- Masalah klasik: overselling, stok tidak sinkron, dead stock

#### Tujuan Pertemuan
Mahasiswa memahami bagaimana ERP menekan kesalahan operasional persediaan dan pengadaan.

#### Aktivitas
- Simulasi sederhana alur pembelian dan stok dengan tabel.

---

### Pertemuan 7 — Finance & Accounting dalam ERP (Level Bisnis Digital)
#### Topik
- Peran modul keuangan dalam ERP
- Konsep dasar:
  - invoice
  - accounts receivable/payable
  - payment
  - cashflow visibility
- Hubungan data operasional dengan laporan keuangan
- Kontrol transaksi lintas divisi

#### Tujuan Pertemuan
Mahasiswa memahami logika aliran data bisnis menuju pelaporan keuangan.

#### Catatan
Tidak perlu masuk terlalu dalam ke akuntansi teknis/jurnal kompleks jika kelas bukan prodi akuntansi.

---

### Pertemuan 8 — UTS
#### Bentuk UTS (Saran)
- Tes konsep + analisis studi kasus
- Diagram proses bisnis (O2C/P2P)
- Identifikasi masalah integrasi data pada bisnis kecil/menengah

#### Contoh Bentuk Soal
- Jelaskan dampak kesalahan master data produk terhadap penjualan, stok, dan pelaporan.
- Buat alur Order to Cash untuk bisnis toko online sederhana.
- Identifikasi modul ERP prioritas untuk bisnis distribusi kecil.

---

### Pertemuan 9 — Siklus Implementasi ERP (ERP Implementation Lifecycle)
#### Topik
- Tahapan implementasi ERP:
  - inisiasi
  - requirement gathering
  - process mapping
  - konfigurasi
  - migrasi data
  - testing (UAT)
  - training
  - go-live
  - support / continuous improvement
- Peran stakeholder:
  - manajemen
  - user
  - tim TI internal
  - konsultan/vendor

#### Tujuan Pertemuan
Mahasiswa memahami bahwa ERP adalah proyek transformasi proses, bukan sekadar instalasi software.

---

### Pertemuan 10 — Requirement Analysis & Fit-Gap
#### Topik
- Teknik menggali kebutuhan bisnis
- Must-have vs nice-to-have
- Fit-gap analysis (standar sistem vs kebutuhan)
- Risiko kustomisasi berlebihan
- Penyusunan requirement sederhana (template basic)

#### Tujuan Pertemuan
Mahasiswa mampu menyusun kebutuhan ERP dasar untuk studi kasus bisnis.

#### Aktivitas
- Kelompok membuat daftar kebutuhan ERP untuk:
  - UMKM retail
  - digital agency
  - bisnis distribusi

---

### Pertemuan 11 — Integrasi ERP dengan Sistem Digital Lain
#### Topik
- ERP + e-commerce / marketplace
- ERP + payment gateway
- ERP + CRM/marketing tools
- ERP + BI/dashboard
- Konsep API, middleware, sinkronisasi data (bahasa sederhana)
- Tantangan data consistency dan latency

#### Tujuan Pertemuan
Mahasiswa memahami ERP dalam ekosistem bisnis digital yang multi-platform.

#### Nilai Plus Dosen TI
Pertemuan ini sangat kuat untuk dibawakan dari perspektif integrasi sistem & data.

---

### Pertemuan 12 — Keamanan, Kontrol Akses, dan Tata Kelola ERP
#### Topik
- Role-Based Access Control (RBAC)
- Segregation of Duties (SoD) (konsep dasar)
- Audit trail / log aktivitas
- Backup & disaster recovery (konsep)
- Risiko keamanan ERP:
  - privilege berlebihan
  - human error
  - data leakage
  - patching dan update
- Privasi dan kepatuhan data (pengantar)

#### Tujuan Pertemuan
Mahasiswa memahami pentingnya keamanan dan kontrol dalam sistem ERP terintegrasi.

---

### Pertemuan 13 — Cloud ERP, Open Source ERP, dan Pemilihan Platform
#### Topik
- On-premise vs cloud ERP
- SaaS ERP vs self-hosted/open-source ERP
- Perbandingan pendekatan (bukan perang vendor)
- Kriteria pemilihan platform:
  - skala bisnis
  - biaya
  - modul tersedia
  - integrasi
  - SDM internal
  - dukungan vendor/partner

#### Tujuan Pertemuan
Mahasiswa dapat menilai platform ERP berdasarkan kebutuhan bisnis, bukan sekadar popularitas.

#### Aktivitas
- Diskusi pemilihan ERP untuk 3 skenario bisnis berbeda.

---

### Pertemuan 14 — ERP untuk UMKM, Startup, dan Bisnis Digital Indonesia
#### Topik
- Apakah semua bisnis harus langsung pakai ERP?
- Kapan cukup pakai tools terpisah, kapan perlu ERP
- Strategi implementasi bertahap (phase-by-phase)
- Modul prioritas untuk bisnis kecil:
  - sales + inventory
  - purchasing + finance dasar
  - CRM + invoicing
- Tantangan adopsi:
  - disiplin input data
  - SOP belum matang
  - resistensi perubahan
  - keterbatasan SDM

#### Tujuan Pertemuan
Mahasiswa mampu memberikan rekomendasi realistis adopsi ERP untuk UMKM/startup.

---

### Pertemuan 15 — Presentasi Proyek / Review Kasus ERP
#### Kegiatan
Presentasi kelompok mini project:
- Profil bisnis
- Permasalahan operasional
- Proses bisnis inti (diagram)
- Modul ERP yang diusulkan
- Prioritas implementasi
- Risiko dan mitigasi
- Roadmap 6–12 bulan

#### Tujuan Pertemuan
Melatih kemampuan analisis, komunikasi bisnis, dan penyusunan solusi ERP yang aplikatif.

#### Output yang Diharapkan
- Diagram proses bisnis
- Tabel modul & fungsi
- Matriks kebutuhan
- Roadmap implementasi
- Risiko + mitigasi

---

### Pertemuan 16 — UAS
#### Opsi Bentuk UAS (Direkomendasikan)
**Case-based exam / project defense**
Mahasiswa menganalisis studi kasus dan diminta:
1. Memetakan proses bisnis
2. Menentukan modul ERP prioritas
3. Menjelaskan alur data lintas fungsi
4. Mengidentifikasi risiko implementasi
5. Memberikan roadmap adopsi ERP

#### Alternatif
- UAS essay analitis + diagram proses
- UAS berbasis studi kasus individu

---

## 5. Rekomendasi Penilaian (Opsional)

### Opsi A (Seimbang)
- Kehadiran & Partisipasi: **10%**
- Tugas/Kuis Individu: **20%**
- Mini Project Kelompok: **25%**
- UTS: **20%**
- UAS: **25%**

### Opsi B (Lebih Proyek)
- Kehadiran & Partisipasi: **10%**
- Tugas/Kuis: **15%**
- Mini Project Kelompok: **30%**
- UTS: **20%**
- UAS: **25%**

---

## 6. Topik Prioritas (Jika Waktu Terbatas)
Jika beberapa pertemuan harus dipadatkan, prioritaskan:

1. Konsep ERP & integrasi proses bisnis
2. O2C, P2P, R2R (end-to-end process)
3. Modul ERP & relasi antar modul
4. Data ERP (master vs transaksi) & data quality
5. Implementasi ERP (fit-gap, migrasi, training, go-live)
6. Integrasi ERP dengan ekosistem digital (API/middleware konsep)
7. Keamanan akses & tata kelola data
8. ERP untuk UMKM/startup (strategi bertahap)

---

## 7. Topik yang Bisa Diperdalam / Dikurangi Sesuai Profil Mahasiswa

### Bisa Diperdalam (karena cocok untuk Bisnis Digital + TI)
- Integrasi ERP dengan e-commerce / marketplace
- Dashboard & analytics berbasis data ERP
- Workflow automation
- API/middleware (konsep non-koding)
- Data governance dan kontrol akses

### Bisa Dikurangi (Jika bukan fokus prodi)
- Detail jurnal akuntansi kompleks
- Konfigurasi vendor tertentu yang terlalu teknis
- MRP/manufacturing detail mendalam (kecuali kelas membutuhkan)

---

## 8. Saran Tugas Mini Project (Supaya Kelas Lebih Hidup)
### Tema Project (Pilih Salah Satu)
- ERP untuk toko online multi-channel
- ERP untuk bisnis preorder makanan
- ERP untuk digital agency
- ERP untuk distributor bahan bangunan
- ERP untuk UMKM manufaktur sederhana

### Deliverable Project
- Profil bisnis & masalah utama
- Proses bisnis As-Is (saat ini)
- Proses bisnis To-Be (setelah ERP)
- Modul ERP yang dibutuhkan
- Data master yang dibutuhkan
- Risiko implementasi
- Roadmap implementasi bertahap
- Indikator keberhasilan (KPI sederhana)

---

## 9. Tips Praktis untuk Dosen (Background TI)
- Jangan merasa harus menguasai menu semua software ERP.
- Kekuatan utama Anda:
  - berpikir sistem
  - integrasi data
  - alur proses
  - kontrol akses
  - risiko implementasi
- Gunakan bahasa yang dekat dengan mahasiswa:
  - “kenapa order kacau?”
  - “kenapa stok beda antara gudang dan admin?”
  - “kenapa laporan telat?”
  - “kenapa owner sulit ambil keputusan cepat?”

ERP akan terasa relevan jika selalu dihubungkan ke **masalah operasional nyata**.

---

## 10. Ringkasan Akhir
Untuk Prodi Bisnis Digital, mata kuliah ERP paling relevan jika diarahkan pada:
- **integrasi proses bisnis**
- **integrasi data**
- **implementasi sistem**
- **keamanan & kontrol**
- **adopsi bertahap untuk bisnis digital/UMKM**

Dengan background TI, Anda justru sangat tepat untuk membawakan ERP secara **aplikatif, terstruktur, dan modern**.

---

## 11. (Opsional) Format Singkat Jadwal 16 Pertemuan (Tabel Ringkas)

| Pertemuan | Topik Utama | Fokus |
|---|---|---|
| 1 | Pengantar ERP | Konsep & peran ERP |
| 2 | Proses Bisnis End-to-End | O2C, P2P, R2R |
| 3 | Modul ERP | Relasi antar modul |
| 4 | Data ERP | Master data, transaksi, reporting |
| 5 | Sales/CRM dalam ERP | Customer flow & omnichannel |
| 6 | Procurement & Inventory | Pengadaan & stok |
| 7 | Finance dalam ERP | Alur operasional ke keuangan |
| 8 | UTS | Konsep + studi kasus |
| 9 | Implementasi ERP | Lifecycle proyek |
| 10 | Requirement & Fit-Gap | Analisis kebutuhan |
| 11 | Integrasi Sistem | ERP + e-commerce/payment/BI |
| 12 | Keamanan & Tata Kelola | RBAC, audit trail, backup |
| 13 | Cloud/Open Source ERP | Pemilihan platform |
| 14 | ERP untuk UMKM/Startup | Adopsi bertahap |
| 15 | Presentasi Proyek | Review solusi ERP |
| 16 | UAS | Case-based / project defense |

---

## 12. Lanjutan yang Bisa Disiapkan (Jika Dibutuhkan)
- RPS lengkap format OBE (CPL, CPMK, Sub-CPMK)
- Rubrik penilaian UTS/UAS & mini project
- Template tugas kelompok (format laporan)
- Outline slide per pertemuan
- Bank soal kuis (Google Form)
- Studi kasus ERP lokal (UMKM/startup Indonesia)
