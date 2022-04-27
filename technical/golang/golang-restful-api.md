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

# Resource Naming

Banyak orang yang asal dalam pembuatan URL untuk RESTful API
Walaupun pembuatan URL RESTful API sendiri tidak ada standar baku nya, namun alangkah baiknya mengikuti best practice yang ada

# Resource

Resource dalam RESTful API adalah data yang sifatnya bisa satu atau banyak
Misal, “customers” adalah kumpulan dari “customer”, dimana “customer” adalah satu data customer.

# Gunakan Kata Benda, Bukan Kata Kerja

Contoh Benar :
http://api.example.com/products
http://api.example.com/members
Contoh Salah :
http://api.example.com/get-all-products
http://api.example.com/select-members-table

# Gunakan Hirarki

Contoh Benar :
http://api.example.com/products/{productId}/images
http://api.example.com/merchants/{merchantId}/addresses
Contoh Salah :
http://api.example.com/product-images/{productId}
http://api.example.com/merchant-addresses/{merchantId}

# Gunakan Action Pada Resource

Contoh Benar :
http://api.example.com/users/login
http://api.example.com/users/forget-password
Contoh Salah :
http://api.example.com/login-user
http://api.example.com/forget-password-user

# Gunakan - dan lowercase

Contoh Benar :
http://api.example.com/products/{productId}/warehouse-locations
Contoh Salah :
http://api.example.com/products/{productId}/warehouse_locations
http://api.example.com/products/{productId}/warehouseLocations

# Gunakan CRUD pada HTTP Method

Contoh Benar :
GET http://api.example.com/products/{productId}
POST http://api.example.com/products
Contoh Salah :
GET http://api.example.com/get-products-by-id/{productId}
POST http://api.example.com/create-product

# Gunakan Query untuk Filter

Contoh Benar :
http://api.example.com/products?name=Indomie
http://api.example.com/products?name=Indomie&page=10
Contoh Salah :
http://api.example.com/products/filter-by-name/{name}
http://api.example.com/products/page/1
