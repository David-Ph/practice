/* 
* URL
URL singkatan dari Uniform Resource Locator
URL merupakan alamat dari sebuah resource di Web
URL wajib kita gunakan untuk menuju informasi resource yang akan kita tuju dalam Web
Tanpa URL, Client atau Server tidak akan mengerti informasi apa yang ingin kita cari

* Anatomi URL
URL terdiri dari beberapa bagian
Beberapa bagian wajib ada, beberapa bagian tidak wajib ada
Berikut adalah contoh URL :
https://www.programmerzamannow.com/ 
https://www.programmerzamannow.com/premium-membership/
https://www.programmerzamannow.com/?search=java 

* Schema
Bagian awal di URL adalah schema yang mengindikasikan protocol yang perlu digunakan oleh Client
Biasanya dalam URL website, schema protocol tersebut adalah http dan https

* Authority
Selanjutnya, dipisahkan dengan tanda :// diikuti dengan authority, yang terdiri dari nama domain dan nomor port yang dipisah menggunakan titik dua
Nama domain nanti akan ditanyakan ke DNS untuk mendapatkan alamat IP nya
Namun kita juga bisa langsung menggunakan IP jika memang website tersebut tidak memiliki nama domain
Nomor port tidak wajib, tanpa nomor port, secara default bernilai 80 untuk http, dan 443 untuk https

* Path
Selanjutnya setelah Authority, bagian selanjutnya adalah tidak wajib, yaitu Path
Path biasanya berisikan informasi menuju ke resource yang kita tuju
Path terlihat seperti kumpulan folder dan diakhiri dengan file yang ingin kita akses

* Parameters
Selanjutnya, dalam URL juga bisa terdapat informasi parameters, namun ini tidak wajib
Parameter dipisah oleh karakter ? setelah Authority atau Path
Parameter merupakan informasi tambahan yang berisi key=value, jika ingin menambahkan lebih dari satu parameter, kita bisa tambahkan parameter dengan menggunakan karakter &

* Anchor
Anchor merupakan merupakan bagian yang tidak wajib di URL
Anchor merupakan representasi bookmark dalam sebuah halaman website
Misal jika dalam website terdapat banyak sekali bagian informasi, kita bisa gunakan anchor sebagai bookmark ke tiap bagian informasi tersebut agar lebih mudah diakses


*/