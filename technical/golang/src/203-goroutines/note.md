# Pengenalan Parallel Programming

Parallel programming sederhananya adalah memecahkan suatu masalah dengan cara membaginya menjadi yang lebih kecil, dan dijalankan secara bersamaan pada waktu yang bersamaan pula

# Contoh Parallel

- Menjalankan beberapa aplikasi sekaligus di sistem operasi kita (office, editor, browser, dan lain-lain)
- Beberapa koki menyiapkan makanan di restoran, dimana tiap koki membuat makanan masing-masing
- Antrian di Bank, dimana tiap teller melayani nasabah nya masing-masing

# Process vs thread

- Process adalah sebuah eksekusi program
- Thread adalah segmen dari process

- Process mengkonsumsi memory besar
- Thread menggunakan memory kecil

- Process saling terisolasi dengan process lain
- Thread bisa saling berhubungan jika dalam process yang sama

- Process lama untuk dijalankan dihentikan
- Thread cepat untuk dijalankan dan dihentikan

# Parallel vs Concurrency

- Berbeda dengan paralel (menjalankan beberapa pekerjaan secara bersamaan), concurrency adalah menjalankan beberapa pekerjaan secara bergantian
- Dalam parallel kita biasanya membutuhkan banyak Thread, sedangkan dalam concurrency, kita hanya membutuhkan sedikit Thread

# Contoh Concurrency

Saat kita makan di cafe, kita bisa makan, lalu ngobrol, lalu minum, makan lagi, ngobrol lagi, minum lagi, dan seterusnya. Tetapi kita tidak bisa pada saat yang bersamaan minum, makan dan ngobrol, hanya bisa melakukan satu hal pada satu waktu, namun bisa berganti kapanpun kita mau.

Parallel is doing multiple task together at the same time. Concurrency is we can have multiple threads executing code. If one thread blocks, another one is picked up on and worked on. So it's like we're scheduling works, and change between them on the fly.

# Goroutine

Goroutine adalah sebuah thread ringan yang dikelola oleh Go Runtime

# Cara Kerja Goroutine

Sebenarnya, Goroutine dijalankan oleh Go Scheduler dalam thread, dimana jumlah thread nya sebanyak GOMAXPROCS (biasanya sejumlah core CPU)

Namun yang mempermudah kita adalah, kita tidak perlu melakukan manajemen Thread secara manual, semua sudah diatur oleh Go Scheduler

# Membuat Goroutine

Kita hanya cukup menambahkan perintah go sebelum memanggil function yang akan kita jalankan dalam goroutine

Saat sebuah function kita jalankan dalam goroutine, function tersebut akan berjalan secara asynchronous, artinya tidak akan ditunggu sampai function tersebut selesai

Aplikasi akan lanjut berjalan ke kode program selanjutnya tanpa menunggu goroutine yang kita buat selesai
