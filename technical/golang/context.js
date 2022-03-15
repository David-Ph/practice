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

* Parent dan Child Context
Context menganut konsep parent dan child
Artinya, saat kita membuat context, kita bisa membuat child context dari context yang sudah ada
Parent context bisa memiliki banyak child, namun child hanya bisa memiliki satu parent context
Konsep ini mirip dengan pewarisan di pemrograman berorientasi object

* Hubungan Antara Parent dan Child Context
Parent dan Child context akan selalu terhubung
Saat nanti kita melakukan misal pembatalan context A, maka semua child dan sub child dari context A akan ikut dibatalkan
Namun jika misal kita membatalkan context B, hanya context B dan semua child dan sub child nya yang dibatalkan, parent context B tidak akan ikut dibatalkan
Begitu juga nanti saat kita menyisipkan data ke dalam context A, semua child dan sub child nya bisa mendapatkan data tersebut
Namun jika kita menyisipkan data di context B, hanya context B dan semua child dan sub child nya yang mendapat data, parent context B tidak akan mendapat data

* Immutable
Context merupakan object yang Immutable, artinya setelah Context dibuat, dia tidak bisa diubah lagi
Ketika kita menambahkan value ke dalam context, atau menambahkan pengaturan timeout dan yang lainnya, secara otomatis akan membentuk child context baru, bukan merubah context tersebut

* Context With Value
Pada saat awal membuat context, context tidak memiliki value
Kita bisa menambah sebuah value dengan data Pair (key - value) ke dalam context
Saat kita menambah value ke context, secara otomatis akan tercipta child context baru, artinya original context nya tidak akan berubah sama sekali
Untuk membuat menambahkan value ke context, kita bisa menggunakan function context.WithValue(parent, key, value)

* Context With Cancel
Selain menambahkan value ke context, kita juga bisa menambahkan sinyal cancel ke context
Kapan sinyal cancel diperlukan dalam context?
Biasanya ketika kita butuh menjalankan proses lain, dan kita ingin bisa memberi sinyal cancel ke proses tersebut
Biasanya proses ini berupa goroutine yang berbeda, sehingga dengan mudah jika kita ingin membatalkan eksekusi goroutine, kita bisa mengirim sinyal cancel ke context nya
Namun ingat, goroutine yang menggunakan context, tetap harus melakukan pengecekan terhadap context nya, jika tidak, tidak ada gunanya
Untuk membuat context dengan cancel signal, kita bisa menggunakan function context.WithCancel(parent)

* Context With Timeout
Selain menambahkan value ke context, dan juga sinyal cancel, kita juga bisa menambahkan sinyal cancel ke context secara otomatis dengan menggunakan pengaturan timeout
Dengan menggunakan pengaturan timeout, kita tidak perlu melakukan eksekusi cancel secara manual, cancel akan otomatis di eksekusi jika waktu timeout sudah terlewati
Penggunaan context dengan timeout sangat cocok ketika misal kita melakukan query ke database atau http api, namun ingin menentukan batas maksimal timeout nya
Untuk membuat context dengan cancel signal secara otomatis menggunakan timeout, kita bisa menggunakan function context.WithTimeout(parent, duration)

* Context With Deadline
Selain menggunakan timeout untuk melakukan cancel secara otomatis, kita juga bisa menggunakan deadline
Pengaturan deadline sedikit berbeda dengan timeout, jika timeout kita beri waktu dari sekarang, kalo deadline ditentukan kapan waktu timeout nya, misal jam 12 siang hari ini
Untuk membuat context dengan cancel signal secara otomatis menggunakan deadline, kita bisa menggunakan function context.WithDeadline(parent, time)


* Query SQL
Untuk operasi SQL yang tidak membutuhkan hasil, kita bisa menggunakan perintah Exec, namun jika kita membutuhkan result, seperti SELECT SQL, kita bisa menggunakan function yang berbeda
Function untuk melakukan query ke database, bisa menggunakan function (DB) QueryContext(context, sql, params)
function ini akan mereturn struct rows.
rows ini harus diclose jika sudah selesai digunakan

* Rows
Hasil Query function adalah sebuah data structs sql.Rows
Rows digunakan untuk melakukan iterasi terhadap hasil dari query
Kita bisa menggunakan function (Rows) Next() (boolean) untuk melakukan iterasi terhadap data hasil query, jika return data false, artinya sudah tidak ada data lagi didalam result
Untuk membaca tiap data, kita bisa menggunakan (Rows) Scan(columns...)
Dan jangan lupa, setelah menggunakan Rows, jangan lupa untuk menutupnya menggunakan (Rows) Close()


*/
