# Dependency Injection

Dalam pembuatan perangkat lunak, Dependency Injection merupakan sebuah teknik dimana sebuah object menerima object lain yang dibutuhkan (dependencies) ketika pembuatan object itu sendiri
Biasanya object yang menerima dependencies disebut client, proses mengirim dependencies ke object tersebut biasa dibilang inject
Dependency Injection sebenarnya sudah sering sekali kita lakukan, misal membuat object Controller yang membutuhkan dependencies object Service, atau membuat object Service yang membutuhkan dependencies object Repository

# Function Sebagai Constructor (1)

Dalam bahasa pemrograman berorientasi object, ada istilah yang bernama Constructor, yaitu sebuah function yang digunakan ketika sebuah object dibuat
Di Go-Lang, biasanya kita juga membuat sebuah function untuk membuat object, dan ini mirip seperti Constructor tugasnya, yaitu membuat object baru

# Function Sebagai Constructor (2)

Biasanya kita akan membuat object dengan memanggil function Constructor tersebut, lalu mengirimkan dependencies yang dibutuhkan pada function Constructor tersebut
Cara seperti ini mudah dilakukan ketika kode program aplikasi kita tidak terlalu besar
Namun saat kode program aplikasi kita semakin besar, akan semakin sulit melakukan hal ini, terutama kita harus tahu urutan object mana yang harus dibuat terlebih dahulu
Oleh karena ini, proses Dependency Injection sebenarnya bisa kita permudah dengan memanfaatkan library

# Library Dependency Injection

Banyak sekali library Dependency Injection yang bisa kita gunakan di Go-Lang, misalnya
https://github.com/google/wire
https://github.com/uber-go/fx
https://github.com/golobby/container
Dan lain-lain

# Google Wire

Pada kelas ini, kita akan menggunakan Google Wire sebagai Dependency Injection library nya
Salah satu kenapa Google Wire menjadi pilihan, karena saat ini Google Wire adalah library paling populer untuk melakukan Dependency Injection di Go-Lang
Selain itu, Google Wire merupakan library Dependency Injection yang berbasis compile, artinya kodenya akan di generate, bukan menggunakan reflection
Hal ini membuat Google Wire menjadi cepat, karena hasil kompilasi nya adalah kode yang sudah di generate melakukan Dependency Injection, tanpa perlu menggunakan reflection lagi

# Tambah Dependency Google Wire

go get github.com/google/wire

# Menginstall Wire

Google Wire membutuhkan aplikasi command line wire untuk melakukan auto generate kode Dependency injection ketika kita nanti membuat kode
Program ini perlu kita install manual di komputer kita dengan perintah :

go install github.com/google/wire/cmd/wire@latest

Secara otomatis akan ada file binary di $GOPATH/bin/wire
Agar aplikasi command line wire tersebut bisa diakses, jangan lupa masukkan ke $PATH sistem operasi kita, seperti yang pernah kita lakukan ketika belajar setting $PATH Go-Lang di kelas Go-Lang Dasar

# Provider

Untuk melakukan Dependency Injection, kita perlu buat dalam bentuk function constructor
Dalam Google Wire, function constructor tersebut kita sebut dengan Provider

# Injector

Setelah kita membuat Provider untuk nanti kita gunakan, selanjutnya kita perlu membuat Injector
Injector sendiri adalah sebuah function constructor, namun isinya berupa konfigurasi yang kita beritahukan ke Google Wire
Injector ini sendiri sebenarnya tidak akan digunakan oleh kode program kita, Injector ini adalah function yang akan digunakan oleh Google Wire untuk melakukan auto generate kode Dependency Injection
Khusus ketika membuat Injector, pada file nya kita perlu tambahkan komentar penanda :
go:build wireinject
+build wireinject

# Dependency Injection

Setelah kita membuat Injector dan Provider, selanjutnya yang perlu kita lakukan adalah menggunakan aplikasi command line Google Wire untuk melakukan auto generate kode Dependency Injection
Kita bisa menggunakan perintah ini untuk melakukan auto generate kode dependency injection :
wire gen namapackage
Secara otomatis aplikasi Google Wire akan mencari kode Injector di package tersebut, lalu membuat file wire_gen.go yang isinya adalah kode otomatis dependency injection

# Error

Google Wire juga bisa mendeteksi jika terjadi error pada Provider kita
Jika terdapat error, secara otomatis akan mengembalikan error ketika kita melakukan dependency injection
Caranya sederhana, kita cukup buat di Provider return value kedua berupa error, dan di Injector nya juga perlu kita tambahkan return value kedua berupa error

# Injector Signature

Saat membuat Injector, kadang kita butuh parameter yang dinamis
Dengan Google Wire, kita juga bisa mengirim parameter pada Injector yang akan di generate secara otomatis
Secara otomatis jika ada Provider yang membutuhkan data dengan tipe parameter yang sama, secara otomatis data di parameter akan digunakan

# Multiple Binding

Saat melakukan dependency injection, kadang ada kasus kita membuat beberapa Provider dengan tipe yang sama
Hal ini akan membuat error proses auto generate kode dependency injection, karena Google Wire tidak mendukung multiple binding dengan tipe yang sama
Pada kasus ini, kita bisa membuat tipe alias untuk multiple binding

# Provider Set

Google Wire memiliki fitur yang bernama Provider Set, fitur ini digunakan untuk melakukan grouping Provider
Provider Set sangat berguna ketika kode program kita sudah banyak, dan Providernya sudah banyak, sehingga akan lebih mudah untuk dibaca ketika kita grouping data Provider nya

# Binding Interface

Dalam pembuatan aplikasi, sering sekali kita biasanya menggunakan Interface sebagai kontrak struct
Secara default, Google Wire akan menggunakan tipe data asli untuk melakukan dependency injection, jadi jika terdapat parameter berupa Interface, dan tidak ada Provider yang mengembalikan Interface tersebut, maka akan dianggap error
Pada kasus ini, kita bisa memberi tahu ke Google Wire, jika kita ingin melakukan binding interface, yaitu memberi tahu untuk sebuah interface akan menggunakan provider dengan tipe apa

# Struct Provider

Kita juga bisa membuat Struct Provider, yaitu Struct yang bisa kita jadikan sebagai Provider
Secara otomatis Struct yang kita sebutkan akan menjadi Provider
Dan kita juga bisa melakukan dependency injection terhadap field yang terdapat didalam Struct tersebut, kita cukup menyebutkan field mana yang akan di inject, atau jika ingin melakukan injection ke semua field, kita bisa gunakan karakter \* (bintang)

# Binding Values

Kadang ada kasus dimana kita ingin melakukan dependency injection terhadap value yang sudah ada, tanpa harus membuat Provider terlebih dahulu
Untuk kasus seperti, kita bisa langsung sebutkan value dari objectnya, tanpa menggunakan Provider

# Interface Value

Seperti di awal sudah dijelaskan, bahkan Google Wire akan melakukan dependency injection sesuai tipe data Provider n
Pada kasus jika kita ingin menggunakan value berupa Interface, maka kita perlu melakukan Interface Binding seperti yang sudah dibahas
Atau ada cara yang lebih mudah, kita bisa binding value sekaligus menyebutkan interface yang digunakan oleh value tersebut

# Struct Field Provider

Google Wire juga mendukung pembuatan Provider dari Field sebuah Struct
Misal pada kondisi kita ingin menggunakan sebuah Field dari Struct untuk dijadikan dependency untuk Provider lain

# Cleanup Function

Jika Provider membuat object yang membutuhkan proses cleanup (pembersihan) setelah object dibuat, maka pada provider kita bisa mengembalikan closure
Closure secara otomatis akan dipanggil dalam proses cleanup oleh Google Wire
