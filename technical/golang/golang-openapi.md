https://docs.google.com/presentation/d/1NbezAv0g-P9hvVCUl4W81RAvAbGzSmNnEaW6FYbaMFM/edit#slide=id.ge7b226dabd_0_285

# Pengenalan OpenAPI

OpenAPI merupakan standar spesifikasi, tidak tergantung bahasa pemrograman apapun, untuk membuat dokumentasi RESTful API.
OpenAPI dibuat agar pengguna RESTful API tidak perlu mengakses kode aplikasi dan membaca dokumen manual (misal dalam bentuk doc, pdf) untuk memahami RESTful API yang dibuat
OpenAPI bisa menggunakan tool untuk menampilkan secara visual, bahkan untuk membuat kode program client atau server
https://www.openapis.org/
https://github.com/OAI/OpenAPI-Specification
https://swagger.io/specification/

# Document Structure

OpenAPI memiliki struktur document yang sudah standar
Namun kita diberi dua opsi untuk membuat document nya, bisa menggunakan JSON atau YAML
https://www.json.org/
https://yaml.org/

# OpenAPI Editor

Document OpenAPI hanya menggunakan JSON atau Yaml, jadi untuk membuat document OpenAPI kita cukup menggunakan Text Editor
Namun jika kita ingin melihat OpenAPI dalam bentuk visual, kita juga bisa menggunakan Swagger Editor : https://editor.swagger.io/
Jika menggunakan product JetBrains, bisa menggunakan plugin OpenAPI https://www.jetbrains.com/help/idea/openapi.html
Jika menggunakan Visual Studio Code, bisa menggunakan plugin OpenAPI https://marketplace.visualstudio.com/items?itemName=42Crunch.vscode-openapi

# Tipe Data

Saat kita membuat RESTful API, sudah dipastikan kita akan membuat request dan response, dimana dalam data request dan response sudah dipastikan terdapat detail data
Misal jika terdapat data Product, pasti ada id, name, price, dan lain-lain
Semua detail data tersebut pasti memiliki tipe data
Kita tidak bisa menggunakan tipe data yang terdapat pada bahasa pemrograman yang digunakan untuk membuat RESTful API, oleh karena itu pada OpenAPI terdapat tipe data general yang bisa digunakan yang dapat dimengerti di semua bahasa pemrograman

# OpenAPI Tipe Data (1)

type format
integer int32
integer int64
number float
number double
string
string byte
string binary
boolean
string date
string date-time
string password

# Document

OpenAPI sangatlah sederhana, kita hanya perlu membuat satu file berisi semua data OpenAPI nya
OpenAPI memiliki struktur yang sudah ditentukan ketika membuat document nya
Kita bisa menggunakan JSON atau YAML untuk file nya
https://spec.openapis.org/oas/v3.0.3#openapi-object

# OpenAPI Object (1)

fieldname type description
openapi string
info info object
servers [server object]
paths paths objet
components components object
security security requirement object
tags tag object
externalDocs external documentation object

# Info

Info merupakan bagian dari informasi metadata tentang API yang kita buat
Kita bisa memasukkan author, lisensi, dan lain-lain

## Info Object

title string
description string
termsOfService string
contact contactobject
license licenseobject
version string

# Server

Saat kita membuat API sudah pasti terdapat server RESTful API yang nanti akan kita buat
Kita bisa memberitahu server yang tersedia di OpenAPI
Misal, terdapat server development, staging, production dan lain-lain

# External Documentation

External documentation merupakan bagian dalam OpenAPI jika kita ingin menambahkan link tambahan dalam OpenAPI
Bisa menuju link documentation lain, atau mungkin link menuju website

# Path

Path merupakan representasi endpoint API di OpenAPI
Pada Path, kita tidak perlu menuliskan seluruh URL, cukup url di belakang setelah lokasi server

# Operation

Setiap Path yang kita buat di OpenAPI, bisa memiliki lebih dari satu Operation
Hal ini dikarenakan, dalam HTTP, satu URL bisa memiliki beberapa HTTP Method
Misal url untuk mengambil semua data dan membuat data baru, mungkin url nya sama, yang membedakan adalah HTTP Method nya, GET untuk mengambil data, POST untuk membuat data
Inti dari API Documentation adalah dokumentasi operation yang terdapat pada RESTful API yang kita buat

# Parameter

Parameter adalah data yang dikirim tidak melalui Request Body
Operation bisa memiliki parameter lebih dari satu
OpenAPI mendukung beberapa jenis parameter, yaitu Query Parameter, Path Variable, Header, dan Cookie
Kita bisa menambahkan parameter pada Operation, sehingga pengguna bisa tahu bahwa ada parameter yang perlu dikirim ketika memanggil Operation tersebut

# Schema

Saat kita membuat parameter, kita mungkin ingin memberitahu tentang tipe data untuk parameter tersebut
Parameter memiliki attribute bernama schema, dimana schema sebenarnya sangat kompleks, kita akan bahas secara bertahap
Dimulai dari simple schema, misal tipe data yang sebelumnya sudah kita bahas

# JSON Schema Specification

Schema menggunakan JSON Schema untuk mendefinisikan struktur datanya
JSON Schema bisa berisikan tipe sederhana, seperti number, string, boolean dan lain-lain, atau bahkan tipe data kompleks, seperti object dan array (yang akan kita bahas nanti)
https://json-schema.org/
https://json-schema.org/draft/2020-12/json-schema-core.html

# JSON Schema Validation

Schema mendukung JSON Schema Validation
Hal ini membuat kita bisa memberitahu validasi yang diperlukan ketika pengguna membaca OpenAPI kita
Dengan kita tambahkan Schema Validation, pengguna RESTful API kita bisa tahu validation yang kita buat tanpa harus kita buat dokumentasi secara terpisah
https://json-schema.org/draft/2020-12/json-schema-validation.html

# Request Body

OpenAPI juga mendukung dokumentasi untuk request body
Dengan ini, kita memberi tahu tentang schema request body yang harus dikirim ketika menggunakan RESTful API kita
Request body mendukung schema, sehingga kita memberi tahu bentuk schema format data, bahkan validasi yang diperlukan

# Object Schema

Sebelumnya kita hanya membuat schema sederhana, seperti schema tipe data boolean atau string
Spesifikasi di JSON Schema juga mendukung pembuatan schema berupa objek, yaitu data yang memiliki attribute lebih dari satu

# Array Schema

Selain tipe data object, Schema juga mendukung tipe data array
Saat membuat tipe data array, kita juga bisa menentukan tipe data items yang terdapat di array, bisa tipe data sederhana, bisa tipe data kompleks seperti object atau array lagi

# Example

OpenAPI mendukung example data
Example data merupakan data contoh yang bisa kita tambahkan baik itu di Parameter, Request Body dan Response Body

# Response Body

Selain Request Body, kita juga mendokumentasikan Response Body di OpenAPI
Dengan demikian, kita bisa memberi tahu format Response Body yang kita kembalikan pada RESTful API yang kita buat
Yang menarik di OpenAPI, kita bisa memberi tahu format response body sesuai dengan response status nya, misal kita bisa tentukan untuk response status 200, 400, 500, dan lain-lain

