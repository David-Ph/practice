# Pengenalan HttpRouter

HttpRouter merupakan salah satu OpenSource Library yang populer untuk Http Handler di Go-Lang
HttpRouter terkenal dengan kecepatannya dan juga sangat minimalis
Hal ini dikarenakan HttpRouter hanya memiliki fitur untuk routing saja, tidak memiliki fitur apapun selain itu
https://github.com/julienschmidt/httprouter

# Menambah HttpRouter ke Project

go get github.com/julienschmidt/httprouter
go get github.com/stretchr/testify

# Router

Inti dari library HttpRouter adalah struct Router
Router ini merupakan implementasi dari http.Handler, sehingga kita bisa dengan mudah menambahkan ke dalam http.Server
Untuk membuat Router, kita bisa menggunakan function httprouter.New(), yang akan mengembalikan Router pointer

# HTTP Method

Router mirip dengan ServeMux, dimana kita bisa menambahkan route ke dalam Router
Kelebihan dibandingkan dengan ServeMux adalah, pada Router, kita bisa menentukan HTTP Method yang ingin kita gunakan, misal GET, POST, PUT, dan lain-lain
Cara menambahkan route ke dalam Router adalah gunakan function yang sama dengan HTTP Method nya, misal router.GET(), router.POST(), dan lain-lain

# Params

httprouter.Handle memiliki parameter yang ketiga, yaitu Params. Untuk apa kegunaan Params?
Params merupakan tempat untuk menyimpan parameter yang dikirim dari client
Namun Params ini bukan query parameter, melainkan parameter di URL
Kadang kita butuh membuat URL yang tidak fix, alias bisa berubah-ubah, misal /products/1, /products/2, dan seterusnya
ServeMux tidak mendukung hal tersebut, namun Router mendukung hal tersebut
Parameter yang dinamis yang terdapat di URL, secara otomatis dikumpulkan di Params
Namun, agar Router tahu, kita harus memberi tahu ketika menambahkan Route, dibagian mana kita akan buat URL path nya menjadi dinamis

# Router Pattern

Sekarang kita sudah tahu bahwa dengan menggunakan Router, kita bisa menambah params di URL
Sekarang pertanyaannya, bagaimana pattern (pola) pembuatan parameter nya?

# Named Parameter

Named parameter adalah pola pembuatan parameter dengan menggunakan nama
Setiap nama parameter harus diawali dengan : (titik dua), lalu diikuti dengan nama parameter
Contoh, jika kita memiliki pattern seperti ini :

Pattern /user/:user
/user/eko -> match
/user/you -> match
/user/eko/profile -> no match
/user/ -> no match

# Catch All Parameter

Selain named parameter, ada juga yang bernama catch all parameter, yaitu menangkap semua parameter
Catch all parameter harus diawali dengan \* (bintang), lalu diikuti dengan nama parameter
Catch all parameter harus berada di posisi akhir URL

Pattern /src/\*filepath
/src/ -> no match
/src/somefile -> match
/src/subdir/somefile -> match

# Serve File

Pada materi Go-Lang Web, kita sudah pernah membahas tentang Serve File
Pada Router pun, mendukung serve static file menggunakan function ServeFiles(Path, FileSystem)
Dimana pada Path, kita harus menggunakan Catch All Parameter
Sedangkan pada FileSystem kita bisa melakukan manual load dari folder atau menggunakan golang embed, seperti yang pernah kita bahas di materi Go-Lang Web
