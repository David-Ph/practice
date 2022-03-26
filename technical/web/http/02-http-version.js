/* 
* HTTP Version
Spesifikasi HTTP selalu diperbaharui
Saat ini, kebanyakan web berjalan di HTTP/1.1 atau HTTP2
HTTP2 mulai hadir sekitar tahun 2015, dan saat ini sudah banyak diadopsi oleh semua Web di Dunia

* HTTP/1.1 vs HTTP/2
Saat ini HTTP/1.1 merupakan fallback protocol, dimana Web Browser secara default akan melakukan request menggunakan HTTP/2, jika web server tidak mendukung, maka web browser akan melakukan fallback ke protocol HTTP/1.1
Secara garis besar, spesifikasi HTTP/2 sama dengan HTTP/1.1, yang membedakan adalah pada HTTP/2, HTTP Request yang dikirim dalam bentuk teks, secara otomatis menjadi binary, sehingga lebih cepat dibandingkan HTTP/1.1
Selain itu di HTTP/2, menggunakan algoritma kompresi untuk memperkecil request dan mendukung multiplexing, sehingga bisa mengirim beberapa request dalam satu connection yang sama
Dari sisi pembuatan aplikasi, tidak ada perbedaan, semua ini biasanya sudah diurus secara otomatis oleh Web Server yang kita gunakan

* HTTPS
Secara default, HTTP tidaklah aman
HTTPS merupakan HTTP dengan enkripsi
Perbedaan HTTP dan HTTPS adalah, pada HTTPS menggunakan SSL (Secure Sockets Layer) untuk melakukan enkripsi HTTP Request dan HTTP Response
Hasilnya HTTPS jauh lebih aman dibanding dengan HTTP biasa
Web yang menggunakan HTTPS akan menggunakan https:// pada url nya, dan yang hanya menggunakan HTTP tanpa enkripsi, akan menggunakan http://

*/