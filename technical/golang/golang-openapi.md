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