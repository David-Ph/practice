# Pengenalan JSON

JSON singkatan dari JavaScript Object Notation, merupakan struktur format data yang bentuknya seperti Object di JavaScript
JSON merupakan struktur format data yang paling banyak digunakan saat kita membuat RESTful API
Dan pate kelas ini kita akan menggunakan JSON juga
https://www.json.org/json-en.html

# Package json

Go-Lang sudah menyediakan package json, dimana kita bisa menggunakan package ini untuk melakukan konversi data ke JSON (encode) atau sebaliknya (decode)
https://pkg.go.dev/encoding/json

# Encode JSON

Go-Lang telah menyediakan function untuk melakukan konversi data ke JSON, yaitu menggunakan function json.Marshal(interface{})
Karena parameter nya adalah interface{}, maka kita bisa masukan tipe data apapun ke dalam function Marshal

# JSON Object

Pada materi sebelumnya kita melakukan encode data seperti string, number, boolean, dan tipe data primitif lainnya
Walaupun memang bisa dilakukan, karena sesuai dengan kontrak interface{}, namun tidak sesuai dengan kontrak JSON
Jika mengikuti kontrak json.org, data JSON bentuknya adalah Object dan Array
Sedangkan value nya baru berupa

# Struct

JSON Object di Go-Lang direpresentasikan dengan tipe data Struct
Dimana tiap attribute di JSON Object merupakan attribute di Struct

# Decode JSON

Sekarang kita sudah tahu bagaimana caranya melakukan encode dari tipe data di Go-Lang ke JSON
Namun bagaimana jika kebalikannya?
Untuk melakukan konversi dari JSON ke tipe data di Go-Lang (Decode), kita bisa menggunakan function json.Unmarshal(byte[], interface{})
Dimana byte[] adalah data JSON nya, sedangkan interface{} adalah tempat menyimpan hasil konversi, biasa berupa pointer

# JSON Array

Selain tipe dalam bentuk Object, biasanya dalam JSON, kita kadang menggunakan tipe data Array
Array di JSON mirip dengan Array di JavaScript, dia bisa berisikan tipe data primitif, atau tipe data kompleks (Object atau Array)
Di Go-Lang, JSON Array direpresentasikan dalam bentuk slice
Konversi dari JSON atau ke JSON dilakukan secara otomatis oleh package json menggunakan tipe data slice

# Decode JSON Array

Selain menggunakan Array pada attribute di Object
Kita juga bisa melakukan encode atau decode langsung JSON Array nya
Encode dan Decode JSON Array bisa menggunakan tipe data Slice

# JSON Tag

Secara default atribut yang terdapat di Struct dan JSON akan di mapping sesuai dengan nama atribut yang sama (case sensitive)
Kadang ada style yang berbeda antara penamaan atribute di Struct dan di JSON, misal di JSON kita ingin menggunakan snake_case, tapi di Struct, kita ingin menggunakan PascalCase
Untungnya, package json mendukun Tag Reflection
Kita bisa menambahkan tag reflection dengan nama json, lalu diikuti dengan atribut yang kita inginkan ketika konversi dari atau ke JSON

# Map

Saat menggunakan JSON, kadang mungkin kita menemukan kasus data JSON nya dynamic
Artinya atribut nya tidak menentu, bisa bertambah, bisa berkurang, dan tidak tetap
Pada kasus seperti itu, menggunakan Struct akan menyulitkan, karena pada Struct, kita harus menentukan semua atribut nya
Untuk kasus seperti ini, kita bisa menggunakan tipe data map[string]interface{}
Secara otomatis, atribut akan menjadi key di map, dan value menjadi value di map
Namun karena value berupa interface{}, maka kita harus lakukan konversi secara manual jika ingin mengambil value nya
Dan tipe data Map tidak mendukung JSON Tag lagi

# Streaming Decoder

Sebelumnya kita belajar package json dengan melakukan konversi data JSON yang sudah dalam bentuk variable dan data string atau []byte
Pada kenyataanya, kadang data JSON nya berasal dari Input berupa io.Reader (File, Network, Request Body)
Kita bisa saja membaca semua datanya terlebih dahulu, lalu simpan di variable, baru lakukan konversi dari JSON, namun hal ini sebenarnya tidak perlu dilakukan, karena package json memiliki fitur untuk membaca data dari Stream

# json.Decoder

Untuk membuat json Decoder, kita bisa menggunakan function json.NewDecoder(reader)
Selanjutnya untuk membaca isi input reader dan konversikan secara langsung ke data di Go-Lang, cukup gunakan function Decode(interface{})

# Streaming Encoder

Selain decoder, package json juga mendukung membuat Encoder yang bisa digunakan untuk menulis langsung JSON nya ke io.Writer
Dengan begitu, kita tidak perlu menyimpan JSON datanya terlebih dahulu ke dalam variable string atau []byte, kita bisa langsung tulis ke io.Writer

# json.Encoder

Untuk membuat Encoder, kita bisa menggunakan function json.NewEncoder(writer)
Dan untuk menulis data sebagai JSON langsung ke writer, kita bisa gunakan function Encode(interface{})
