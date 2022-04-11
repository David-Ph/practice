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

# Handler

- Server hanya bertugas sebagai Web Server, sedangkan untuk menerima HTTP Request yang masuk ke Server, kita butuh yang namanya Handler
- Handler di Go-Lang di representasikan dalam interface, dimana dalam kontraknya terdapat sebuah function bernama ServeHTTP() yang digunakan sebagai function yang akan di eksekusi ketika menerima HTTP Request

# HandlerFunc

- Salah satu implementasi dari interface Handler adalah HandlerFunc
- Kita bisa menggunakan HandlerFunc untuk membuat function handler HTTP

# ServeMux

Saat membuat web, kita biasanya ingin membuat banyak sekali endpoint URL
HandlerFunc sayangnya tidak mendukung itu
Alternative implementasi dari Handler adalah ServeMux
ServeMux adalah implementasi Handler yang bisa mendukung multiple endpoint

# URL Pattern

- URL Pattern dalam ServeMux sederhana, kita tinggal menambahkan string yang ingin kita gunakan sebagai endpoint, tanpa perlu memasukkan domain web kita
- Jika URL Pattern dalam ServeMux kita tambahkan di akhirnya dengan garis miring, artinya semua url tersebut akan menerima path dengan awalan tersebut, misal /images/ artinya akan dieksekusi jika endpoint nya /images/, /images/contoh, /images/contoh/lagi
- Namun jika terdapat URL Pattern yang lebih panjang, maka akan diprioritaskan yang lebih panjang, misal jika terdapat URL /images/ dan /images/thumbnails/, maka jika mengakses /images/thumbnails/ akan mengakses /images/thumbnails/, bukan /images

# Request

- Request adalah struct yang merepresentasikan HTTP Request yang dikirim oleh Web Browser
- Semua informasi request yang dikirim bisa kita dapatkan di Request
- Seperti, URL, http method, http header, http body, dan lain-lain

# HTTP Test

Go-Lang sudah menyediakan package khusus untuk membuat unit test terhadap fitur Web yang kita buat
Semuanya ada di dalam package net/http/httptest https://golang.org/pkg/net/http/httptest/
Dengan menggunakan package ini, kita bisa melakukan testing handler web di Go-Lang tanpa harus menjalankan aplikasi web nya
Kita bisa langsung fokus terhadap handler function yang ingin kita test

# httptest.NewRequest()

NewRequest(method, url, body) merupakan function yang digunakan untuk membuat http.Request
Kita bisa menentukan method, url dan body yang akan kita kirim sebagai simulasi unit test
Selain itu, kita juga bisa menambahkan informasi tambahan lainnya pada request yang ingin kita kirim, seperti header, cookie, dan lain-lain

# httptest.NewRecorder()

httptest.NewRecorder() merupakan function yang digunakan untuk membuat ResponseRecorder
ResponseRecorder merupakan struct bantuan untuk merekam HTTP response dari hasil testing yang kita lakukan

# Query Parameter

Query parameter adalah salah satu fitur yang biasa kita gunakan ketika membuat web
Query parameter biasanya digunakan untuk mengirim data dari client ke server
Query parameter ditempatkan pada URL
Untuk menambahkan query parameter, kita bisa menggunakan ?nama=value pada URL nya

# url.URL

Dalam parameter Request, terdapat attribute URL yang berisi data url.URL
Dari data URL ini, kita bisa mengambil data query parameter yang dikirim dari client dengan menggunakan method Query() yang akan mengembalikan map

# Multiple Query Parameter

Dalam spesifikasi URL, kita bisa menambahkan lebih dari satu query parameter
Ini cocok sekali jika kita memang ingin mengirim banyak data ke server, cukup tambahkan query parameter lainnya
Untuk menambahkan query parameter, kita bisa gunakan tanda & lalu diikuti dengan query parameter berikutnya

# Multiple Value Query Parameter

Sebenarnya URL melakukan parsing query parameter dan menyimpannya dalam map[string][]string
Artinya, dalam satu key query parameter, kita bisa memasukkan beberapa value
Caranya kita bisa menambahkan query parameter dengan nama yang sama, namun value berbeda, misal :
name=Eko&name=Kurniawan

# Header

Selain Query Parameter, dalam HTTP, ada juga yang bernama Header
Header adalah informasi tambahan yang biasa dikirim dari client ke server atau sebaliknya
Jadi dalam Header, tidak hanya ada pada HTTP Request, pada HTTP Response pun kita bisa menambahkan informasi header
Saat kita menggunakan browser, biasanya secara otomatis header akan ditambahkan oleh browser, seperti informasi browser, jenis tipe content yang dikirim dan diterima oleh browser, dan lain-lain

# Request Header

Untuk menangkap request header yang dikirim oleh client, kita bisa mengambilnya di Request.Header
Header mirip seperti Query Parameter, isinya adalah map[string][]string
Berbeda dengan Query Parameter yang case sensitive, secara spesifikasi, Header key tidaklah case sensitive

# Response Header

Sedangkan jika kita ingin menambahkan header pada response, kita bisa menggunakan function ResponseWriter.Header()

# Form Post

Saat kita belajar HTML, kita tahu bahwa saat kita membuat form, kita bisa submit datanya dengan method GET atau POST
Jika menggunakan method GET, maka hasilnya semua data di form akan menjadi query parameter
Sedangkan jika menggunakan POST, maka semua data di form akan dikirim via body HTTP request
Di Go-Lang, untuk mengambil data Form Post sangatlah mudah

# Request.PostForm

Semua data form post yang dikirim dari client, secara otomatis akan disimpan dalam attribute Request.PostForm
Namun sebelum kita bisa mengambil data di attribute PostForm, kita wajib memanggil method Request.ParseForm() terlebih dahulu, method ini digunakan untuk melakukan parsing data body apakah bisa di parsing menjadi form data atau tidak, jika tidak bisa di parsing, maka akan menyebabkan error

# Response Code

Dalam HTTP, terdapat yang namanya response code
Response code merupakan representasi kode response
Dari response code ini kita bisa melihat apakah sebuah request yang kita kirim itu sukses diproses oleh server atau gagal
Ada banyak sekali response code yang bisa kita gunakan saat membuat web
https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
Mengubah Response Code

# Mengubah Response Code

Secara default, jika kita tidak menyebutkan response code, maka response code nya adalah 200 OK
Jika kita ingin mengubahnya, kita bisa menggunakan function ResponseWriter.WriteHeader(int)
Semua data status code juga sudah disediakan di Go-Lang, jadi kita ingin, kita bisa gunakan variable yang sudah disediakan : https://github.com/golang/go/blob/master/src/net/http/status.go

# Cookie

Cookie adalah fitur di HTTP dimana server bisa memberi response cookie (key-value) dan client akan menyimpan cookie tersebut di web browser
Request selanjutnya, client akan selalu membawa cookie tersebut secara otomatis
Dan server secara otomatis akan selalu menerima data cookie yang dibawa oleh client setiap kalo client mengirimkan request

# Stateless

HTTP merupakan stateless antara client dan server, artinya server tidak akan menyimpan data apapun untuk mengingat setiap request dari client
Hal ini bertujuan agar mudah melakukan scalability di sisi server
Lantas bagaimana caranya agar server bisa mengingat sebuah client? Misal ketika kita sudah login di website, server otomatis harus tahu jika client tersebut sudah login, sehingga request selanjutnya, tidak perlu diminta untuk login lagi
Untuk melakukan hal ini, kita bisa memanfaatkan Cookie

# Membuat Cookie

Cookie merupakan data yang dibuat di server dan sengaja agar disimpan di web browser
Untuk membuat cookie di server, kita bisa menggunakan function http.SetCookie()

# FileServer

Go-Lang memiliki sebuah fitur yang bernama FileServer
Dengan ini, kita bisa membuat Handler di Go-Lang web yang digunakan sebagai static file server
Dengan menggunakan FileServer, kita tidak perlu manual me-load file lagi
FileServer adalah Handler, jadi bisa kita tambahka ke dalam http.Server atau http.ServeMux

# 404 Not Found

Jika kita coba jalankan, saat kita membuka misal /static/index.js, maka akan dapat error 404 Not Found
Kenapa ini terjadi?
Hal ini dikarenakan FileServer akan membaca url, lalu mencari file berdasarkan url nya, jadi jika kita membuat /static/index.js, maka FileServer akan mencari ke file /resources/static/index.js
Hal ini menyebabkan 404 Not Found karena memang file nya tidak bisa ditemukan
Oleh karena itu, kita bisa menggunakan function http.StripPrefix() untuk menghapus prefix di url

# Go-Lang Embed

Di Go-Lang 1.16 terdapat fitur baru yang bernama Go-Lang embed
Dalam Go-Lang embed kita bisa embed file ke dalam binary distribution file, hal ini mempermudah sehingga kita tidak perlu meng-copy static file lagi
Go-Lang Embed juga memiliki fitur yang bernama embed.FS, fitur ini bisa diintegrasikan dengan FileServer

# 404 Not Found

Jika kita coba jalankan, dan coba buka /static/index.js, maka kita akan mendapatkan error 404 Not Found
Kenapa ini terjadi? Hal ini karena di Go-Lang embed, nama folder ikut menjadi nama resource nya, misal resources/index.js, jadi untuk mengaksesnya kita perlu gunakan URL /static/resources/index.js
Jika kita ingin langsung mengakses file index.js tanpa menggunakan resources, kita bisa menggunakan function fs.Sub() untuk mendapatkan sub directory
