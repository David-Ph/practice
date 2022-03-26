/* 
* HTTP Body
HTTP Body merupakan data yang bisa dikirim di HTTP Request, atau data yang diterima dari HTTP Response
Artinya client bisa mengirim data ke server menggunakan HTTP Body, begitu juga sebaliknya
Server bisa memberikan body di response menggunakan HTTP Body

* Content-Type
HTTP Body erat kaitannya dengan Header key Content-Type
Biasanya agar client dan server mudah mengerti isi HTTP Body, HTTP Message akan memiliki Header Content-Type, yang berisi informasi tipe data HTTP Body
HTTP Body bisa berisikan teks (html, javascript, css, json) atau binary (image, video, audio)
Data Content-Type sudah memiliki standarisasi, misal nya bisa kita lihat di link berikut : https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types 

* Redirect
Seperti yang sudah dijelaskan pada materi HTTP Status, untuk memaksa client melakukan redirect ke halaman lain, kita bisa menggunakan http redirect status code (300-399)
Lantas pertanyaannya, dari mana client tahu, harus melakukan redirect ke URL mana?
Oleh karena itu, biasanya response HTTP Status redirect, selalu dibarengi dengan informasi URL redirectnya, dan itu disimpan pada header Location

*/