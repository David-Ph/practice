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

* Channel Sebagai Parameter
Dalam kenyataan pembuatan aplikasi, seringnya kita akan mengirim channel ke function lain via parameter
Sebelumnya kita tahu bahkan di Go-Lang by default, parameter adalah pass by value, artinya value akan diduplikasi lalu dikirim ke function parameter, sehingga jika kita ingin mengirim data asli, kita biasa gunakan pointer (agar pass by reference). 
Berbeda dengan Channel, kita tidak perlu melakukan hal tersebut

* Channel In dan Out
Saat kita mengirim channel sebagai parameter, isi function tersebut bisa mengirim dan menerima data dari channel tersebut
Kadang kita ingin memberi tahu terhadap function, misal bahwa channel tersebut hanya digunakan untuk mengirim data, atau hanya dapat digunakan untuk menerima data
Hal ini bisa kita lakukan di parameter dengan cara menandai apakah channel ini digunakan untuk in (mengirim data) atau out (menerima data)

* Buffered Channel
Seperti yang dijelaskan sebelumnya, bahwa secara default channel itu hanya bisa menerima 1 data
Artinya jika kita menambah data ke-2, maka kita akan diminta menunggu sampai data ke-1 ada yang mengambil
Kadang-kadang ada kasus dimana pengirim lebih cepat dibanding penerima, dalam hal ini jika kita menggunakan channel, maka otomatis pengirim akan ikut lambat juga
Untuknya ada Buffered Channel, yaitu buffer yang bisa digunakan untuk menampung data antrian di Channel

* Buffer Capacity
Kita bebas memasukkan berapa jumlah kapasitas antrian di dalam buffer
Jika kita set misal 5, artinya kita bisa menerima 5 data di buffer.
Jika kita mengirim data ke 6, maka kita diminta untuk menunggu sampai buffer ada yang kosong
Ini cocok sekali ketika memang goroutine yang menerima data lebih lambat dari yang mengirim data


* Range Channel
Kadang-kadang ada kasus sebuah channel dikirim data secara terus menerus oleh pengirim
Dan kadang tidak jelas kapan channel tersebut akan berhenti menerima data
Salah satu yang bisa kita lakukan adalah dengan menggunakan perulangan range ketika menerima data dari channel
Ketika sebuah channel di close(), maka secara otomatis perulangan tersebut akan berhenti
Ini lebih sederhana dari pada kita melakukan pengecekan channel secara manual

* Select Channel
Kadang ada kasus dimana kita membuat beberapa channel, dan menjalankan beberapa goroutine
Lalu kita ingin mendapatkan data dari semua channel tersebut
Untuk melakukan hal tersebut, kita bisa menggunakan select channel di Go-Lang
Dengan select channel, kita bisa memilih data tercepat dari beberapa channel, jika data datang secara bersamaan di beberapa channel, maka akan dipilih secara random

* Default Select
Apa yang terjadi jika kita melakukan select terhadap channel yang ternyata tidak ada datanya?
Maka kita akan menunggu sampai data ada
Kadang mungkin kita ingin melakukan sesuatu jika misal semua channel tidak ada datanya ketika kita melakukan select channel
Dalam select, kita bisa menambahkan default, dimana ini akan dieksekusi jika memang di semua channel yang kita select tidak ada datanya

* Masalah Dengan Goroutine
Saat kita menggunakan goroutine, dia tidak hanya berjalan secara concurrent, tapi bisa parallel juga, karena bisa ada beberapa thread yang berjalan secara parallel
Hal ini sangat berbahaya ketika kita melakukan manipulasi data variable yang sama oleh beberapa goroutine secara bersamaan
Hal ini bisa menyebabkan masalah yang namanya Race Condition

* Mutex (Mutual Exclusion)
Untuk mengatasi masalah race condition tersebut, di Go-Lang terdapat sebuah struct bernama sync.Mutex
Mutex bisa digunakan untuk melakukan locking dan unlocking, dimana ketika kita melakukan locking terhadap mutex, maka tidak ada yang bisa melakukan locking lagi sampai kita melakukan unlock
Dengan demikian, jika ada beberapa goroutine melakukan lock terhadap Mutex, maka hanya 1 goroutine yang diperbolehkan, setelah goroutine tersebut melakukan unlock, baru goroutine selanjutnya diperbolehkan melakukan lock lagi
Ini sangat cocok sebagai solusi ketika ada masalah race condition yang sebelumnya kita hadapi

* RWMutex (Read Write Mutex)
Kadang ada kasus dimana kita ingin melakukan locking tidak hanya pada proses mengubah data, tapi juga membaca data
Kita sebenarnya bisa menggunakan Mutex saja, namun masalahnya nanti akan rebutan antara proses membaca dan mengubah
Di Go-Lang telah disediakan struct RWMutex (Read Write Mutex) untuk menangani hal ini, dimana Mutex jenis ini memiliki dua lock, lock untuk Read dan lock untuk Write

* Deadlock
Hati-hati saat membuat aplikasi yang parallel atau concurrent, masalah yang sering kita hadapi adalah Deadlock
Deadlock adalah keadaan dimana sebuah proses goroutine saling menunggu lock sehingga tidak ada satupun goroutine yang bisa jalan
Sekarang kita coba simulasikan proses deadlock

* WaitGroup
WaitGroup adalah fitur yang bisa digunakan untuk menunggu sebuah proses selesai dilakukan
Hal ini kadang diperlukan, misal kita ingin menjalankan beberapa proses menggunakan goroutine, tapi kita ingin semua proses selesai terlebih dahulu sebelum aplikasi kita selesai
Kasus seperti ini bisa menggunakan WaitGroup
Untuk menandai bahwa ada proses goroutine, kita bisa menggunakan method Add(int), setelah proses goroutine selesai, kita bisa gunakan method Done()
Untuk menunggu semua proses selesai, kita bisa menggunakan method Wait()

* Once
Once adalah fitur di Go-Lang yang bisa kita gunakan untuk memastikan bahsa sebuah function di eksekusi hanya sekali
Jadi berapa banyak pun goroutine yang mengakses, bisa dipastikan bahwa goroutine yang pertama yang bisa mengeksekusi function nya
Goroutine yang lain akan di hiraukan, artinya function tidak akan dieksekusi lagi

* Pool
Pool adalah implementasi design pattern bernama object pool pattern. 
Sederhananya, design pattern Pool ini digunakan untuk menyimpan data, selanjutnya untuk menggunakan datanya, kita bisa mengambil dari Pool, dan setelah selesai menggunakan datanya, kita bisa menyimpan kembali ke Pool nya
Implementasi Pool di Go-Lang ini sudah aman dari problem race condition

* Map
Go-Lang memiliki sebuah struct beranama sync.Map
Map ini mirip Go-Lang map, namun yang membedakan, Map ini aman untuk menggunaan concurrent menggunakan goroutine
Ada beberapa function yang bisa kita gunakan di Map :
Store(key, value) untuk menyimpan data ke Map
Load(key) untuk mengambil data dari Map menggunakan key
Delete(key) untuk menghapus data di Map menggunakan key
Range(function(key, value)) digunakan untuk melakukan iterasi seluruh data di Map

* Cond
Cond adalah adalah implementasi locking berbasis kondisi. 
Cond membutuhkan Locker (bisa menggunakan Mutex atau RWMutex) untuk implementasi locking nya, namun berbeda dengan Locker biasanya, di Cond terdapat function Wait() untuk menunggu apakah perlu menunggu atau tidak
Function Signal() bisa digunakan untuk memberi tahu sebuah goroutine agar tidak perlu menunggu lagi, sedangkan function Broadcast() digunakan untuk memberi tahu semua goroutine agar tidak perlu menunggu lagi
Untuk membuat Cond, kita bisa menggunakan function sync.NewCond(Locker)

*/