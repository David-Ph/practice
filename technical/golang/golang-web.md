# Kenapa Web?

- Saat ini web digunakan oleh jutaan, bahkan mungkin milyaran orang setiap hari
- Dengan web, kita bisa melakukan belajar online, mendengarkan musik online, nonton video online, belanja online, sampai memesan makanan secara online
- Namun perlu diperhatikan, Web bukanlah Internet

# Internet

Internet adalah mekanisme komunikasi antar komputer
Awal internet ada, untuk komunikasi antar komputer, kita membutuhkan jaringan kabel telepon
Namun sekarang, semenjak berjamurnya jaringan wifi dan sejenisnya, komunikasi antar komputer menjadi lebih cepat dan mudah

# Web

Web merupakan kumpulan informasi yang tersedia dalam sebuah komputer yang terkoneksi secara terus menerus melalui internet
Web bisa berisi informasi dalam bentuk apapun, seperti teks, gambar, audio, video dan lain-lain
Web berjalan di aplikasi yang bernama Web Server, yaitu aplikasi yang digunakan untuk menyimpan dan menyampaikan isi informasi Web

# Web Host

Pemilik Web, biasanya tidak menjalankan aplikasi Web Server di komputer pribadi nya
Biasanya mereka akan menyewa komputer di tempat penyedia data center (kumpulan komputer) yang terjamin keandalan dan kecepatan koneksi internetnya
Pihak penyedia komputer untuk Web Server biasa disebut Web Host

# Domain

Saat komputer Web terhubung ke internet, biasanya dia memiliki alamat
Alamat ini bernama ip address, formatnya misal nya 172.217.194.94
Karena alamat ip address sangat menyulitkan untuk diingat
Untung saja ada yang namanya nama domain
Nama domain adalah alamat yang bisa digunakan sebagai alias ke ip address
Misal seperti google.co.id, blibli.com, dan lain-lain
Dengan nama domain, sebagai manusia kita akan mudah mengingat dibandingkan ip address
Namun, saat kita menggunakan nama domain, sebenarnya komputer tetap akan mengakses web menggunakan alamat ip address

# Web Browser

Jika Web Server adalah aplikasi yang digunakan untuk menyimpan informasi Web
Web Browser adalah aplikasi yang digunakan untuk mengakses Web melalui internet
Kita bisa saja mengakses Web secara langsung tanpa bantuan Web Browser, namun Web Server hanya akan memberikan informasi bahasa mesin seperti HTML, JavaScript, CSS, Gambar, Video dan lain-lain
Dengan menggunakan Web Browser, semua bahasa mesin tersebut bisa ditampilkan secara visual sehingga kita bisa menyerap informasinya dengan lebih mudah

# Client dan Server

Web adalah aplikasi berbasis Client dan Server, sekarang pertanyaannya, apa itu Client dan Server?
Sederhananya client server merupakan konsep arsitektur aplikasi yang menghubungkan dua pihak, sistem client dan sistem server
Sistem client dan sistem server yang saling berkomunikasi melalui jaringan komputer, internet, atau juga bisa di komputer yang sama

# Tugas Client dan Server

Aplikasi Client bertugas mengirim request ke Server, dan menerima response dari Server
Sedangkan, aplikasi Server bertugas menerima request dari Client, memproses data, dan mengembalikan hasil proses data ke Client

# Keuntungan Client dan Server

Perubahan aplikasi bisa dilakukan dengan mudah di server, tanpa harus membuat perubahan di client, apalagi jika client nya di lokasi yang sulit dijangkau
Bisa digunakan oleh banyak client pada saat yang bersamaan, walaupun server tidak banyak
Bisa diakses dari mana saja, asal terhubung satu jaringan dengan server

# Contoh Client dan Server

Web adalah salah satu contoh arsitektur client server
Aplikasi yang bertugas sebagai Client adalah Web Browser (Chrome, Firefox, Opera, Edge dan lain-lain)
Aplikasi yang bertugas sebagai Server adalah Web Server, dimana di dalam web server terdapat kode program Web kita

# Go-Lang Web

Go-Lang saat ini populer dijadikan salah satu pilihan bahasa pemrograman untuk membuat Web, terutama Web API (Backend)
Selain itu, di Go-Lang juga sudah disediakan package untuk membuat Web, bahkan di sertakan pula package untuk implementasi unit testing untuk Web
Hal ini menjadikan pembuatan Web menggunakan Go-Lang lebih mudah, karena tidak butuh menggunakan library atau framework

# Cara Kerja Lang Web

Web Browser akan melakukan HTTP Request ke Web Server
Golang menerima HTTP Request, lalu mengeksekusi request tersebut sesuai dengan yang diminta.
Setelah melakukan eksekusi request, Golang akan mengembalikan data dan di render sesuai dengan kebutuhannya, misal HTML, CSS, JavaScript dan lain-lain
Golang akan mengembalikan content hasil render tersebut tersebut sebagai HTTP Response ke Web Browser
Web Browser menerima content dari Web Server, lalu me-render content tersebut sesuai dengan tipe content nya

# Package net/http

Pada beberapa bahasa pemrograman lain, seperti Java misalnya, untuk membuat web biasanya dibutuhkan tambahan library atau framework
Sedangkan di Go-Lang sudah disediakan package untuk membuat web bernama package net/http
Sehingga untuk membuat web menggunakan Go-Lang, kita tidak butuh lagi library tambahan, kita bisa menggunakan package yang sudah tersedia
Walaupun memang saat kita akan membuat web dalam skala besar, direkomendasikan menggunakan framework karena beberapa hal sudah dipermudah oleh web framework
Namun pada course ini, kita akan fokus menggunakan package net/http untuk membuat web nya, karena semua framework web Go-Lang akan menggunakan net/http sebagai basis dasar framework nya

# Server

- Server adalah struct yang terdapat di package net/http yang digunakan sebagai representasi Web Server di Go-Lang
  Untuk membuat web, kita wajib membuat Server
- Saat membuat data Server, ada beberapa hal yang perlu kita tentukan, seperti host dan juga port tempat dimana Web kita berjalan
- Setelah membuat Server, kita bisa menjalankan Server tersebut menggunakan function ListenAndServe()
