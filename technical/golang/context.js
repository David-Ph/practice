/* 
* Pengenalan Context
Context merupakan sebuah data yang membawa value, sinyal cancel, sinyal timeout dan sinyal deadline
Context biasanya dibuat per request (misal setiap ada request masuk ke server web melalui http request)
Context digunakan untuk mempermudah kita meneruskan value, dan sinyal antar proses

* Kenapa Context Perlu Dipelajari?
Context di Golang biasa digunakan untuk mengirim data request atau sinyal ke proses lain
Dengan menggunakan context, ketika kita ingin membatalkan semua proses, kita cukup mengirim sinyal ke context, maka secara otomatis semua proses akan dibatalkan
Hampir semua bagian di Golang memanfaatkan context, seperti database, http server, http client, dan lain-lain
Bahkan di Google sendiri, ketika menggunakan Golang, context wajib digunakan dan selalu dikirim ke setiap function yang dikirim

* Package Context
Context direpresentasikan di dalam sebuah interface Context
interface Context terdapat dalam package context
https://golang.org/pkg/context/ 

* Membuat Context
Karena Context adalah sebuah interface, untuk membuat context kita butuh sebuah struct yang sesuai dengan kontrak interface Context
Namun kita tidak perlu membuatnya secara manual
Di Golang package context terdapat function yang bisa kita gunakan untuk membuat Context

* Function Membuat Context
? context.Background()
Membuat context kosong. Tidak pernah dibatalkan, tidak pernah timeout, dan tidak memiliki value apapun. Biasanya digunakan di main function atau dalam test, atau dalam awal proses request terjadi.

? context.TODO()
Membuat context kosong seperti Background(), namun biasanya menggunakan ini ketika belum jelas context apa yang ingin digunakan

*/
