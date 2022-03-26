/* 
* HTTP Status
HTTP Status merupakan kode HTTP Response yang mengindikasikan apakah sebuah request yang diterima Server sukses, gagal atau ada hal lain yang harus diketahui oleh Client
HTTP status diklasifikasikan dalam lima grup, yaitu :
Informational Response (100-199)
Successful Response (200-299)
Redirect (300-399)
Client Error (400-499)
Server Error (500-599)
https://en.wikipedia.org/wiki/List_of_HTTP_status_codes 

* Informational Response (100-199)
Informational response mengindikasi bahwa request telah diterima dan dimengerti
Namun client diminta untuk menunggu tahapan akhir response
Pada kenyataannya, informational response sangat jarang sekali digunakan
https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#information_responses 

* Successful Response (200-299)
Successful Response merupakan kode yang mengindikasi bahwa request yang dikirim oleh client telah diterima, dimengerti dan sukses diproses oleh Server
https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#successful_responses 

* Redirect (300-399)
Redirect status code mengindikasi bahwa client harus melakukan aksi selanjutnya untuk menyelesaikan request
Biasanya redirect status code digunakan ketika lokasi sebuah resource berubah, sehingga Server meminta Client untuk berpindah ke URL lain
https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#redirection_messages 

* Client Error (400-499)
Client error status code merupakan indikasi bahwa request yang dikirim oleh Client tidak diterima oleh Server dikarenakan request yang dikirim dianggap tidak valid
Contohnya client mengirim body yang salah, client melakukan request ke tanpa autentikasi di resource yang mewajibkan autentikasi, dan lain-lain
https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#client_error_responses 

* Server Error (500-599)
Server error status code mengindikasi bahwa terjadi kesalahan di Server
Biasanya ini terjadi ketika ada masalah di Server, seperti misalnya tidak bisa terkoneksi ke basis data, terdapat jaringan error di server, dan lain-lain
https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#server_error_responses 


*/