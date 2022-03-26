/* 
* HTTP Caching
HTTP memiliki fitur yang bernama caching
Caching adalah menyimpan data di client sampai batas waktu yang sudah ditentukan, sehingga jika client ingin melakukan request resource yang sama, cukup ambil resource nya di client, tanpa harus meminta ulang ke server
HTTP Caching sangat cocok dilakukan untuk resource file static yang jarang berubah, seperti file gambar, audio, video dan lain-lain

* Header Cache Control
Server ketika meminta agar client melakukan caching, maka HTTP Response perlu menambahkan informasi Cache-Control di Header
Cache-Control berisi informasi seperti berapa lama client bisa menyimpan data response tersebut, sehingga tidak perlu meminta ulang ke server
https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control 


*/