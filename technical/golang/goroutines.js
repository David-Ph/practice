/* 
* Pengenalan Parallel Programming
Saat ini kita hidup di era multicore, dimana jarang sekali kita menggunakan prosesor yang single core
Semakin canggih perangkat keras, maka software pun akan mengikuti, dimana sekarang kita bisa dengan mudah membuat proses parallel di aplikasi.
Parallel programming sederhananya adalah memecahkan suatu masalah dengan cara membaginya menjadi yang lebih kecil, dan dijalankan secara bersamaan pada waktu yang bersamaan pula

* Contoh Parallel
Menjalankan beberapa aplikasi sekaligus di sistem operasi kita (office, editor, browser, dan lain-lain)
Beberapa koki menyiapkan makanan di restoran, dimana tiap koki membuat makanan masing-masing
Antrian di Bank, dimana tiap teller melayani nasabah nya masing-masing

* Process vs Thread
Process adalah sebuah eksekusi program | Thread adalah segmen dari process
Process mengkonsumsi memory besar | Thread menggunakan memory kecil
Process saling terisolasi dengan process lain | Thread bisa saling berhubungan jika dalam process yang sama
Process lama untuk dijalankan dihentikan | Thread cepat untuk dijalankan dan dihentikan

* Parallel vs Concurrency
Berbeda dengan paralel (menjalankan beberapa pekerjaan secara bersamaan), concurrency adalah menjalankan beberapa pekerjaan secara bergantian
Dalam parallel kita biasanya membutuhkan banyak Thread, sedangkan dalam concurrency, kita hanya membutuhkan sedikit Thread

* Contoh Concurrency
Saat kita makan di cafe, kita bisa makan, lalu ngobrol, lalu minum, makan lagi, ngobrol lagi, minum lagi, dan seterusnya. Tetapi kita tidak bisa pada saat yang bersamaan minum, makan dan ngobrol, hanya bisa melakukan satu hal pada satu waktu, namun bisa berganti kapanpun kita mau.

* CPU-bound
Banyak algoritma dibuat yang hanya membutuhkan CPU untuk menjalankannya. Algoritma jenis ini biasanya sangat tergantung dengan kecepatan CPU.
Contoh yang paling populer adalah Machine Learning, oleh karena itu sekarang banyak sekali teknologi Machine Learning yang banyak menggunakan GPU karena memiliki core yang lebih banyak dibanding CPU biasanya.
Jenis algoritma seperti ini tidak ada benefitnya menggunakan Concurrency Programming, namun bisa dibantu dengan implementasi Parallel Programming.

* I/O-bound
I/O-bound adalah kebalikan dari sebelumnya, dimana biasanya algoritma atau aplikasinya sangat tergantung dengan kecepatan input output devices yang digunakan. 
Contohnya aplikasi seperti membaca data dari file, database, dan lain-lain.
Kebanyakan saat ini, biasanya kita akan membuat aplikasi jenis seperti ini.
Aplikasi jenis I/O-bound, walaupun bisa terbantu dengan implementasi Parallel Programming, tapi benefitnya akan lebih baik jika menggunakan Concurrency Programming.
Bayangkan kita membaca data dari database, dan Thread harus menunggu 1 detik untuk mendapat balasan dari database, padahal waktu 1 detik itu jika menggunakan Concurrency Programming, bisa digunakan untuk melakukan hal lain lagi

Contoh: 
Pararrel Programming
A ==========
B ----------

Concurrency
A =-=-=-=-=-=-=-=-=-=-=-

* Pengenalan Goroutine
Goroutine adalah sebuah thread ringan yang dikelola oleh Go Runtime
Ukuran Goroutine sangat kecil, sekitar 2kb, jauh lebih kecil dibandingkan Thread yang bisa sampai 1mb atau 1000kb
Namun tidak seperti thread yang berjalan parallel, goroutine berjalan secara concurrent

* Cara Kerja Goroutine
Sebenarnya, Goroutine dijalankan oleh Go Scheduler dalam thread, dimana jumlah thread nya sebanyak GOMAXPROCS (biasanya sejumlah core CPU)
Jadi sebenarnya tidak bisa dibilang Goroutine itu pengganti Thread, karena Goroutine sendiri berjalan di atas Thread
Namun yang mempermudah kita adalah, kita tidak perlu melakukan manajemen Thread secara manual, semua sudah diatur oleh Go Scheduler

* Cara Kerja Go Scheduler
Dalam Go-Scheduler, kita akan mengenal beberapa terminologi
G : Goroutine
M : Thread (Machine)
P : Processor

* Membuat Goroutine
Untuk membuat goroutine di Golang sangatlah sederhana
Kita hanya cukup menambahkan perintah go sebelum memanggil function yang akan kita jalankan dalam goroutine
Saat sebuah function kita jalankan dalam goroutine, function tersebut akan berjalan secara asynchronous, artinya tidak akan ditunggu sampai function tersebut selesai
Aplikasi akan lanjut berjalan ke kode program selanjutnya tanpa menunggu goroutine yang kita buat selesai

Seperti yang sebelumnya dijelaskan, bahwa goroutine itu sangat ringan
Kita bisa membuat ribuan, bahkan sampai jutaan goroutine tanpa takut boros memory
Tidak seperti thread yang ukurannya berat, goroutine sangatlah ringan

* Pengenalan Channel
Channel adalah tempat komunikasi secara synchronous yang bisa dilakukan oleh goroutine
Di Channel terdapat pengirim dan penerima, biasanya pengirim dan penerima adalah goroutine yang berbeda
Saat melakukan pengiriman data ke Channel, goroutine akan ter-block, sampai ada yang menerima data tersebut
Maka dari itu, channel disebut sebagai alat komunikasi synchronous (blocking)
Channel cocok sekali sebagai alternatif seperti mekanisme async await yang terdapat di beberapa bahasa pemrograman lain

* Karakteristik Channel
Secara default channel hanya bisa menampung satu data, jika kita ingin menambahkan data lagi, harus menunggu data yang ada di channel diambil
Channel hanya bisa menerima satu jenis data
Channel bisa diambil dari lebih dari satu goroutine
Channel harus di close jika tidak digunakan, atau bisa menyebabkan memory leak

* Membuat Channel
Channel di Go-Lang direpresentasikan dengan tipe data chan
Untuk membuat channel sangat mudah, kita bisa menggunakan make(), mirip ketika membuat map
Namun saat pembuatan channel, kita harus tentukan tipe data apa yang bisa dimasukkan kedalam channel tersebut

* Mengirim dan Menerima Data dari Channel
Seperti yang sudah dibahas sebelumnya, channel bisa digunakan untuk mengirim dan menerima data
Untuk mengirim data, kita bisa gunakan kode : channel <- data
Sedangkan untuk menerima data, bisa gunakan kode : data <- channel
Jika selesai, jangan lupa untuk menutup channel menggunakan function close()


*/