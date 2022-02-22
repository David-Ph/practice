/* 
Software testing adalah salah satu disiplin ilmu dalam software engineering
Tujuan utama dari software testing adalah memastikan kualitas kode dan aplikasi kita baik
Ilmu untuk software testing sendiri sangatlah luas, pada materi ini kita hanya akan fokus ke unit testing

UI Test / End to End test
akan ditest seolah olah test itu user biasa
jadi akan mengakses seluruh aplikasi, makanya mahal/lambat

service test / integration test
fokus ke 1 aplikasi

unit test
unit test mengtest layer kerkecil dari suatu aplikasi

Unit test akan fokus menguji bagian kode program terkecil, biasanya menguji sebuah method
Unit test biasanya dibuat kecil dan cepat, oleh karena itu biasanya kadang kode unit test lebih banyak dari kode program aslinya, karena semua skenario pengujian akan dicoba di unit test
Unit test bisa digunakan sebagai cara untuk meningkatkan kualitas kode program kita


Di bahasa pemrograman lain, biasanya untuk implementasi unit test, kita butuh library atau framework khusus untuk unit test
Berbeda dengan Go-Lang, di Go-Lang sudah untuk unit test sudah disediakan sebuah package khusus bernama testing
Selain itu untuk menjalankan unit test, di Go-Lang juga sudah disediakan perintah nya
Hal ini membuat implementasi unit testing di golang sangat mudah dibanding dengan bahasa pemrograman yang lain

Go-Lang memiliki aturan cara membuat file khusus untuk unit test
Untuk membuat file unit test, kita harus menggunakan akhiran _test
Jadi kita misal kita membuat file hello_world.go, artinya untuk membuat unit testnya, kita harus membuat file hello_world_test.go

Selain aturan nama file, di Go-Lang juga sudah diatur untuk nama function unit test
Nama function untuk unit test harus diawali dengan nama Test
Misal jika kita ingin mengetest function HelloWorld, maka kita akan membuat function unit test dengan nama TestHelloWorld
Tak ada aturan untuk nama belakang function unit test harus sama dengan nama function yang akan di test, yang penting adalah harus diawalin dengan kata Test
Selanjutnya harus memiliki parameter (t *testing.T) dan tidak mengembalikan return value

Untuk menjalankan unit test kita bisa menggunakan perintah : 
? go test
Jika kita ingin lihat lebih detail function test apa saja yang sudah di running, kita bisa gunakan perintah : 
? go test -v
Dan jika kita ingin memilih function unit test mana yang ingin di running, kita bisa gunakan perintah : 
? go test -v -run TestNamaFunction

Jika kita ingin menjalankan semua unit test dari top folder module nya, kita bisa gunakan perintah :
? go test ./...

Menggagalkan unit test menggunakan panic bukanlah hal yang bagus
Go-Lang sendiri sudah menyediakan cara untuk menggagalkan unit test menggunakan testing.T
Terdapat function Fail(), FailNow(), Error() dan Fatal() jika kita ingin menggagalkan unit test

* t.Fail() dan t.FailNow()
Terdapat dua function untuk menggagalkan unit test, yaitu Fail() dan FailNow(). Lantas apa bedanya?
Fail() akan menggagalkan unit test, namun tetap melanjutkan eksekusi unit test. Namun diakhir ketika selesai, maka unit test tersebut dianggap gagal
FailNow() akan menggagalkan unit test saat ini juga, tanpa melanjutkan eksekusi unit test

* t.Error(args...) dan t.Fatal(args...)
Selain Fail() dan FailNow(), ada juga Error() dan Fatal()
Error() function lebih seperti melakukan log (print) error, namun setelah melakukan log error, dia akan secara otomatis memanggil function Fail(), sehingga mengakibatkan unit test dianggap gagal
Namun karena hanya memanggil Fail(), artinya eksekusi unit test akan tetap berjalan sampai selesai
Fatal() mirip dengan Error(), hanya saja, setelah melakukan log error, dia akan memanggil FailNow(), sehingga mengakibatkan eksekusi unit test berhenti

* assertion
Melakukan pengecekan di unit test secara manual menggunakan if else sangatlah menyebalkan
Apalagi jika result data yang harus di cek itu banyak
Oleh karena itu, sangat disarankan untuk menggunakan Assertion untuk melakukan pengecekan
Sayangnya, Go-Lang tidak menyediakan package untuk assertion, sehingga kita butuh menambahkan library untuk melakukan assertion ini
Salah satu library assertion yang paling populer di Go-Lang adalah Testify
Kita bisa menggunakan library ini untuk melakukan assertion terhadap result data di unit test
https://github.com/stretchr/testify 

* assert vs require
Testify menyediakan dua package untuk assertion, yaitu assert dan require
Saat kita menggunakan assert, jika pengecekan gagal, maka assert akan memanggil Fail(), artinya eksekusi unit test akan tetap dilanjutkan
Sedangkan jika kita menggunakan require, jika pengecekan gagal, maka require akan memanggil FailNow(), artinya eksekusi unit test tidak akan dilanjutkan

* skip test
Kadang dalam keadaan tertentu, kita ingin membatalkan eksekusi unit test
Di Go-Lang juga kita bisa membatalkan eksekusi unit test jika kita mau
Untuk membatalkan unit test kita bisa menggunakan function Skip() 

*/