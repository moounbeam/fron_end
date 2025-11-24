## Budget Buddy

## Budget Buddy adalah aplikasi sederhana untuk membantu pengguna mencatat dan mengatur pengeluaran sehari-hari.
Pengguna dapat menambahkan pengeluaran baru dengan nama, kategori, dan jumlah uang. Daftar pengeluaran akan ditampilkan di layar, dan total pengeluaran akan diperbarui secara otomatis setiap kali data baru ditambahkan.

Aplikasi ini dibuat menggunakan React (TypeScript) dan Tailwind CSS untuk menghasilkan tampilan yang menarik dan interaktif.

## Komponen Utama

1. App.tsx
Komponen utama yang menyimpan state dan mengatur aliran data antar komponen.
Bertanggung jawab untuk menyimpan daftar pengeluaran dan meneruskan data ke komponen lain melalui props.

2. ExpenseForm.tsx
Komponen form untuk menambahkan data pengeluaran baru.
Setiap kali pengguna menekan tombol tambah, data dikirim ke komponen App melalui props.

3. ExpenseList.tsx
Komponen untuk menampilkan daftar pengeluaran yang telah ditambahkan.
Menerima data dari App melalui props dan menampilkannya dalam bentuk daftar dinamis.

## Letak Penggunaan Props dan State
# State digunakan di App.tsx untuk menyimpan dan memperbarui daftar pengeluaran (expenses).
# Props digunakan untuk:
- Mengirim fungsi onAddExpense dari App.tsx ke ExpenseForm.tsx, agar form dapat menambahkan data baru.
- Mengirim daftar expenses dari App.tsx ke ExpenseList.tsx, agar data dapat ditampilkan di tampilan utama.

# Teknologi yang Digunakan
1. React
2. TypeScript
3. Tailwind CSS
4. Vite