# Integrasi Aplikasi

Saat membuat aplikasi, sering sekali kita akan melakukan integrasi dengan aplikasi lain
Baik itu aplikasi yang kita buat sendiri, ataupun aplikasi yang dibuat oleh pihak lain, misal :
Saat kita membuat toko online, sistem akan terintegrasi dengan sistem logistic untuk mengelola pengiriman barangnya
Saat kita membuat aplikasi belajar online, sistem akan terintegrasi dengan payment gateway untuk menyediakan layanan pembayaran kelas online
Saat kita membuat aplikasi mobile, aplikasi kita akan terintegrasi dengan sistem kita yang terdapat di server untuk mengirim atau mengambil data

# Cara Integrasi Aplikasi

Secara garis besar, terdapat 4 cara integrasi antar aplikasi, yaitu :
File Sharing
Database Sharing
Remote Procedure Invocation
Messaging

# File Sharing

File Sharing merupakan integrasi aplikasi dengan cara berbagi file
Integrasi menggunakan file sharing adalah integrasi yang paling mudah dilakukan dan masih banyak dilakukan sampai sekarang
Biasanya aplikasi yang memiliki data akan membuat file (misal excel, csv, text, json), dan aplikasi yang membutuhkan data akan membaca data tersebut dari file
File Sharing sangat bermanfaat ketika integrasi dilakukan antar aplikasi yang tidak terhubung secara langsung

# Database Sharing

Database Sharing merupakan integrasi antar aplikasi yang memanfaatkan database untuk berbagi data
Database sharing sangat mudah dilakukan ketika aplikasi berada di tempat yang sama dan bisa mengakses database yang sama
Aplikasi hanya perlu menyimpan data ke database, dan secara otomatis aplikasi lain bisa membaca data tersebut dari database secara langsung

# Remote Procedure Invocation

Remote Procedure Invocation merupakan mekanisme integrasi antar aplikasi dengan cara membuat API yang bisa digunakan oleh aplikasi lain
Aplikasi yang memiliki data akan membuat API, dan aplikasi yang membutuhkan akan menggunakan API tersebut untuk mendapatkan data dari aplikasi tersebut
Remote Procedure Invocation merupakan cara sulit, namun sangat populer dilakukan saat ini
Hal ini karena menggunakan Remote Procedure Invocation, integrasi bisa dilakukan dengan cara real time, dan kompleksitas internal data aplikasi tidak perlu di expose ke aplikasi lain

# Messaging

Messaging merupakan cara integrasi aplikasi yang memanfaatkan aplikasi message broker atau message bus
Aplikasi yang memiliki data akan mengirim data ke aplikasi message broker, dan aplikasi yang membutuhkan data akan mengambil data dari message broker
Messaging sekilas mirip dengan Remote Procedure Invocation, namun yang membedakan adalah, Messaging tidak real time, kadang butuh waktu sampai data sampai ke aplikasi yang menerima data, sederhananya proses di Messaging adalah Asynchronous, sedangkan proses di Remote Procedure Invocation adalah Synchronous

# Application Programming Interface

API singkatan dari Application Programming Interface
API adalah perantara yang menghubungkan satu pihak dengan pihak lain agar bisa saling berkomunikasi
API berisi kumpulan prosedur, fungsi, cara berkomunikasi atau peralatan untuk komunikasi
Pihak yang terlibat dalam API bisa dalam bentuk perangkat lunak ataupun perangkat keras
API sebenarnya sama dengan Remote Procedure Invocation, hanya saja sekarang lebih populer istilah API dibanding RPI

# Contoh Penggunaan API

Saat kita menggunakan sistem operasi, sistem operasi tidak bisa langsung berkomunikasi dengan perangkat keras, sistem operasi membutuhkan API berupa driver yang perlu dipasang terlebih dahulu agar perangkat keras bisa terdeteksi oleh sistem operasi
Saat kita ingin berkomunikasi dengan aplikasi Facebook, kita membutuhkan API dari Facebook agar aplikasi kita bisa berinteraksi dengan aplikasi Facebook
Dan lain-lain

# Contoh Implementasi API

Ada banyak sekali implementasi API yang terdapat di dunia nyata ketika kita membuat aplikasi, misalnya
Driver Perangkat Keras, sebagai API untuk sistem operasi
SOAP (Simple Object Access Protocol),
CORBA (Common Object Request Broker Architecture),
RESTful API,
Apache Thrift,
Protocol Buffer,
GRPC,
Dan lain-lain

# Pengenalan RESTful API

REST singkatan dari REpresentational State Transfer
REST dikenalkan tahun 2000 oleh Roy Fielding dalam disertasinya : https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm
RESTful API merupakan salah satu implementasi API yang memanfaatkan HTTP sebagai protokol komunikasinya
Walaupun SOAP juga berjalan diatas HTTP, namun RESTful API sangat sederhana dibanding SOAP
RESTful API sangat mudah digunakan, dan bisa diadaptasi di semua bahasa pemrograman secara mudah
Saat ini RESTful API sudah menjadi standard API yang banyak digunakan ketika kita membuat sistem yang butuh menyediakan API untuk pihak lain

# Kenapa RESTful API?

Menggunakan HTTP sebagai protokol komunikasi, dimana sudah sangat populer saat ini dengan banyaknya pengguna Internet
Pembuatan RESTful API sangat mudah karena seperti membuat web pada umumnya
Mudah digunakan oleh client baik itu berupa aplikasi web ataupun aplikasi non web seperti aplikasi desktop atau aplikasi mobile
Ringan dan mudah dimengerti oleh manusia

# Architectural Constraints

REST (REpresentational State Transfer) merupakan architecture pattern yang dikenalkan oleh Roy Fielding tahun 2000
REST di desain berjalan menggunakan HTTP, dan sering digunakan sebagai Web Services
Roy Fielding memperkenalkan beberapa design principal ketika kita akan membuat REST

# Architectural Constraints

Berikut adalah beberapa design principal agar web services benar-benar sesuai dengan RESTful API
Client–server
Stateless
Cacheable
Uniform interface
Layered system
Code on demand

# Client Server

Design principal pertama adalah Client Server
RESTful API haruslah memisahkan antara kompleksitas data internal dengan yang akan diekpose ke client
Oleh karena ini, RESTful API haruslah menggunakan arsitektur Client Server, sehingga Client tidak perlu tahu kompleksitas logic yang terjadi di Server

# Stateless

Interaksi antar client dan server dalam RESTful haruslah stateless
Artinya tiap interaksi harus tidak tergantung dengan interaksi sebelumnya atau setelahnya, dan setiap interaksi harus mengirim seluruh informasi yang dibutuhkan
Ini mirip dengan stateless di protocol HTTP
Salah satu kegunaan stateless adalah sehingga mudah untuk di scaling, baik itu jumlah client juga server karena server atau client tidak perlu peduli harus berinteraksi dengan client atau server manapun

# Cachable

Untuk menghemat komunikasi, RESTful API bisa mengimplementasikan Cache
Mirip seperti Cache di HTTP, di client pada RESTful API juga bisa melakukan cache data di local, sehingga tidak perlu selalu meminta data terbaru dari Server
Cara implementasi Cache di RESTful API tidak sesederhana seperti di HTTP, nanti akan kita bahas di materi tersendiri tentang Cache

# Uniform Interface

Salah satu yang membedakan RESTful API dengan teknologi RPC lain adalah, penggunaan antarmuka komunikasi yang seragam untuk semua pihak (client & server teknologi apapun)
Hal ini dikarenakan salah satunya karena RESTful API menggunakan teknologi HTTP yang sudah standard sehingga seragam di semua teknologi atau bahasa pemrograman
Data yang di ekspose di RESTful API juga haruslah generatel, tidak melihatkan kompleksitas internal dari pemilik data, hal ini membuat perubahan apapun yang terjadi pada internal aplikasi, tidak akan berpengaruh dengan data yang di ekspose di API

# Layered System

Untuk melakukan improvement pada sistem RESTful API, sistem RESTful API juga dapat menggunakan Layered System
Layered System menjadikan sistem bisa disusun sesuai dengan data nya, dan agar kompleksitas pada RESTful API tidak harus diketahui oleh Client
Layer juga bisa digunakan untuk melakukan enkapsulasi aplikasi lama yang tidak memiliki kemampuan RESTful API, atau menjadi load balancer untuk RESTful API lain

# Code on Demand

RESTful API juga diperbolehkan mengembalikan script yang bisa dieksekusi oleh client jika diperlukan
Hal ini bisa mempermudah dari sisi Client sehingga tidak perlu mengimplementasikan kode terlalu banyak, karena kode bisa dikirim oleh Server
Misal Server mengembalikan kode JavaScript yang akan dieksekusi oleh Client Web, atau mengembalikan Layout XML untuk di render oleh aplikasi Android
Code on Demand adalah design principal yang tidak wajib diimplementasikan ketika kita membuat RESTful API

# Perhatian

Design principal ini adalah panduan jika kita ingin membuat RESTful API yang baik
Namun pada kenyataanya, kadang kita melakukan hal-hal yang tidak sesuai dengan design principal
Walaupun masih tetap kita membuat RESTful API, namun kemungkinan RESTful API kita tidak bisa dibilang “truly RESTful API”

# Content Negotiation

Saat membuat Web menggunakan HTTP, maka biasanya content (Body) yang akan kita gunakan akan menggunakan HTML
Pada RESTful API pun, untuk berkomunikasi antara Client dan Server, biasanya menggunakan Body
Ada banyak sekali Body Content yang biasa digunakan di REStful API, seperti JSON (JavaScript Object Notation), XML, dan lain-lain
Namun yang paling populer dan banyak digunakan saat ini adalah JSON

# HTTP Headers

Sama seperti pada HTTP, untuk melakukan content negotiation, pada RESTful API akan menggunakan standard HTTP Header : Accept dan Content-Type
Accept digunakan untuk memberi tahu Server, tentang tipe data yang diterima oleh Client
dan Content-Type digunakan untuk memberi tahu Server, tipe data apa yang dikirim oleh Client

# Kenapa Menggunakan JSON

JSON sangat populer digunakan dalam pembuatan RESTful API saat ini
Data JSON sangat mudah dibuat dan juga dimengerti oleh manusia
JSON tidak hanya mudah dibuat dalam JavaScript, namun hampir di semua bahasa pemrograman
Data dalam bentuk JSON sangat ringan, sehingga cocok untuk digunakan sebagai data komunikasi antara Client dan Server

# Konsisten Menggunakan JSON

Tidak seperti SOAP yang format request dan response nya sudah ditentukan, menggunakan RESTful API tidak ada standar baku dalam membuat request dan response
Menggunakan JSON jika tidak dibuat dengan baik bisa terlalu liar, karena memang bisa dibuat sesuka kita
Disarankan untuk membuat standard request dan response agar tidak membingungkan ketika menggunakan RESTful API yang kita buat
Response JSON yang dinamis akan sangat menyulitkan client terutama yang menggunakan bahasa pemrograman static typed

# Response Status

Selalu gunakan response status code yang sesuai dengan Standarisasi HTTP
Misal jika sukses, gunakan Response Status 2xx
Jika data yang dikirim oleh client tidak valid, gunakan 4xx
Jika terjadi masalah di Server, gunakan 5xx

# Apa itu Cache?

Secara sederhana cache adalah data bersifat sementara yang disimpan pada sistem penyimpanan.
Dalam RESTful API, data cache biasanya disimpan di client (misal di web browser, atau di mobile app)
Cache biasa digunakan untuk menurunkan jumlah data transfer antara client dan server sehingga proses komunikasi lebih cepat

# HTTP Header Response ETag

HTTP Header ETag digunakan untuk menambah informasi terhadap resource yang dikembalikan di server
ETag berisikan versi dari resource yang diminta, misal

ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"

# HTTP Header Request If-Not-Match

Setelah client menyimpan data cache, setiap client mengirim request ke server, client akan menambahkan HTTP Header If-Not-Match
HTTP Header If-Not-Match berisikan data ETag yang sebelumnya didapat
Jika data tidak berubah, maka server akan mengembalikan HTTP Response Code 304 : Not Modified

If-None-Match: "33a64df551425fcc55e4d42a148795d9f25f89d4"

# Idempotent RESTful API

Dalam RESTful API, ketika membuat multiple request yang identik, harus memiliki efek yang sama seperti membuat satu request. Dalam hal ini, maka RESTful API kita bisa dibilang idempotent.
Idempotent itu sangat penting, karena saat membuat RESTful API, kita akan melakukan komunikasi antara client dan server via network, sehingga error bisa terjadi.
Belum lagi, banyak framework atau library client yang bisa secara otomatis melakukan request ulang ketika terjadi error pada network

# Implementasi Idempotent di RESTful API

Saat implementasi RESTful API sesuai kaidah HTTP Method yang standar, secara otomatis sebenarnya kita sudah melakukan proses idempotent.

# Idempotent di HTTP Method POST

Umumnya, pada POST, kita tidak perlu membuat API nya menjadi idempotent. Request berkali-kali menggunakan POST dengan data yang sama akan selalu membuat record baru.
Namun kadang hal ini berbahaya, misal ketika terjadi kesalahan client mengirim dua data yang sama, maka akan menjadi 2 record di server, padahal awalnya hanya ingin membuat 1 record.
Hal ini bisa diselesaikan dengan trik id record baru dikirim dari client, tidak menggunakan auto generate atau auto increment. Dengan demikian, jika server menerima POST untuk membuat record baru, server bisa mengecek apakah data pernah dibuat, jika pernah dibuat, request selanjutnya bisa di hiraukan, atau dijadikan proses update
Namun perlu diingat, ini optional, pada POST implementasi idempotent tidak diwajibkan

# Idempotent di HTTP Method GET

Method GET tidak pernah mengubah data di server. Method GET hanya digunakan untuk mengambil data yang ada di server.
Jadi mengirim request GET berkali-kali ke server tidak akan mengubah data apapun di server, sehingga GET secara default sudah idempotent.

# Idempotent di HTTP Method PUT & PATCH

Method PUT & PATCH digunakan untuk mengubah data yang sudah ada
Jika kita mengirim request PUT & PATCH berkali-kali dengan data yang sama, maka server akan melakukan proses update data berkali-kali dengan data yang sama.
Request pertama akan mengubah data di database, request selanjutnya hanya akan mengubah data request pertama, sehingga hasil akhirnya sebenarnya tetap sama
Oleh karena itu PUT & PATCH bisa dibilang idempotent, karena hasil akhirnya tetap sama

# Idempotent di HTTP Method DELETE

Method DELETE digunakan untuk menghapus data di server.
Ketika kita mengirim perintah DELETE berkali-kali di server, response nya mungkin akan berbeda.
Response pertama mungkin akan 200 OK atau 204 No Content. Selanjutnya request akan mengembalikan response 404 Not Found, karena datanya sudah terhapus pada request pertama.
Walaupun secara response mungkin berbeda, namun sebenarnya DELETE sudah secara default idempotent, karena mengirim request DELETE berkali-kali, hasilnya tetap sama, data yang ada di server terhapus.

# Mengamankan RESTful API

Ada kalanya kita butuh mengamankan RESTful API yang kita buat
Atau ingin membatasi pihak yang boleh mengakses RESTful API yang kita buat
Salah satunya adalah dengan menggunakan Authentication dan Authorization

# Authentication dan Authorization

Authentication :
Memvalidasi kredensial untuk memverifikasi pemilik identitas
Contoh proses Authentication adalah proses login menggunakan username dan password, dan banyak yang lainnya.

Authorization :
Authorization adalah proses yang dilakukan setelah proses Authentication
Memvalidasi apakah pemilik identitas memiliki hak akses untuk mengakses resource yang diminta
Contoh proses Authorization adalah Access-Control List, dan banyak yang lainnya.

# Contoh Authentication & Authorization

Basic Auth
API-Key
Oauth 2
dan lain-lain

# Jangan Merusak RESTful API

Saat membuat RESTful API, usahakan tidak pernah merusak kompatibilitas tiap kita melakukan upgrade.
Versioning hanya diperlukan ketika kita memang perlu merusak kompatibilitas RESTful API kita
Namun saya sarankan sebisa mungkin tidak pernah melakukan ini, karena cost nya sangat mahal di sisi client, client harus merubah aplikasi yang sudah berjalan
Namun jika memang harus dilakukan, maka kita wajib melakukan versioning pada RESTful API kita

# Versioning Pada URL

http://api.example.com/v1/products
http://api.example.com/v2/products
http://api.example.com/2019/products
http://api.example.com/2020/products

# Stateless RESTful API

Stateless sederhananya adalah tidak menyimpan state atau data
RESTful API yang baik tidak pernah menyimpan state atau data antar request
Setiap request dari client ke server, harus berisikan semua informasi lengkap yang dibutuhkan oleh server.
Client bertanggung jawab menyimpan dan melakukan manajemen state yang berhubungan dengan client.
Stateless artinya setiap HTTP Request adalah proses independent, tidak bergantung dengan HTTP Request lainnya.
Server tidak boleh tergantung dengan request dari client sebelumnya.

# Keuntungan Stateless RESTful API

RESTful API yang stateless akan mudah di scaling secara horizontal, karena request dari client bisa masuk ke server mana saja, sehingga untuk scaling hanya tinggal menambah server baru.
Sederhana, karena tidak perlu tahu state sebelumnya yang sangat kompleks.
Setiap request client akan sangat lengkap, sehingga mudah untuk di track dan di cek request nya.

# Kesalahan Ketika Membuat RESTful API

Selalu membuat CRUD API untuk table di database
Membuat response data sama dengan table di database
Membuat API terlebih dahulu, baru mengerjakan Web atau Mobile menggunakan API yang sudah dibuat
Mengembalikan data selengkap-lengkapnya di API
Membuat API yang tidak dibutuhkan oleh Client

# Maintenance RESTful API

Dalam membuat produk, fitur pasti akan selalu bertambah
Tak jarang kita mungkin melakukan perubahan di screen Web atau Mobile yang sama
Oleh karena itu, maintenance RESTful API sangatlah penting, agar RESTful API kita tidak menjadi masalah di kemudian hari

# Maintenance : yang Boleh Dilakukan

Menambah data baru di API yang sudah ada
Menambah API baru di endpoint URL berbeda
Mempercepat proses di API yang sudah ada
Menggabungkan beberapa API menjadi satu, tanpa menghilangkan API lama

# Maintenance : yang Tidak Boleh Dilakukan

Mengubah total response data di API yang sudah ada
Merubah field response data di API yang sudah ada
Menghilangkan API yang sudah ada
Men-split API yang sudah ada menjadi dua atau lebih
Menggabungkan beberapa API menjadi satu dengan menghapus API lama
