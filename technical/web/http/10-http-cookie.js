/* 
* Stateless
HTTP didesain stateless, artinya tiap request yang dilakukan, dia tidak tahu request sebelumnya atau selanjutnya yang akan dilakukan
Lantas pertanyaannya, bagaimana Server tahu, kalo Client sudah login sebelum mengakses halaman tertentu?
Hal ini, biasanya menggunakan fitur HTTP Cookie

* HTTP Cookie
HTTP Cookie merupakan informasi yang diberikan oleh server, dan client secara otomatis akan menyimpan data tersebut, contohnya di Web Browser
Ketika Web Browser melakukan request selanjutnya, maka Web Browser akan menyisipkan cookie yang sudah diterima di request sebelumnya
Dari cookie tersebut, Server bisa mengetahui apakah request tersebut merupakan request client yang sudah login atau belum

* Cookie di HTTP Response
Informasi cookie yang diberikan dari Server, ditempatkan pada Header dengan value Set-Cookie
Cookie bisa lebih dari satu, jika kita Server memberikan lebih dari satu cookie, bisa menggunakan beberapa key Set-Cookie di Header

* Cookie di HTTP Request
Setelah cookie dari HTTP Response diterima oleh Web Browser, maka akan disimpan di Web Browser
Selanjutnya HTTP Request selanjutnya akan mengirim cookie di tiap request, dimana cookie yang dikirim bisa menggunakan Header dengan nama Cookie
Berbeda dengan HTTP Response, untuk HTTP Request, Cookie harus digabung di satu header jika lebih dari satu Cookie

* Cookie Attributes
Cookie memiliki atribut yang bisa ditambahkan ketika membuat cookie di HTTP Response
Seperti masa berlaku cookie, apakah harus https, apakah tidak boleh diakses via script, dan lain-lain
https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie 


*/