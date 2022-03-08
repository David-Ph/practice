/* 
* Tipe Data
Saat kita membuat tabel di Excel, kita bisa menentukan tipe data apa yang kita masukkan ke tiap kolom di Excel
Di MySQL, kita juga bisa menentukan tipe data tiap kolom yang kita buat di sebuah tabel
Ada banyak sekali tipe data yang tersedia di MySQL, dari yang sederhana, sampai yang kompleks.
Biasanya kita akan menggunakan tipe data sesuai dengan kebutuhan kolom yang perlu kita buat

* Saat kita membuat tabel di Excel, kita bisa menentukan tipe data apa yang kita masukkan ke tiap kolom di Excel
Di MySQL, kita juga bisa menentukan tipe data tiap kolom yang kita buat di sebuah tabel
Ada banyak sekali tipe data yang tersedia di MySQL, dari yang sederhana, sampai yang kompleks.
Biasanya kita akan menggunakan tipe data sesuai dengan kebutuhan kolom yang perlu kita buat

* Tipe Data Number
Secara garis besar, tipe data number di MySQL ada dua jenis;
Integer, atau tipe number bilangan bulat
Floating Point, atau tipe data number pecahan

* Tipe Data Integer
TINYINT, SMALLINT, MEDIUMINT, INT, BIGINT, 
FLOAT, DOUBLE

* DECIMAL
Selain Integer dan Floating Point, di MySQL terdapat tipe data DECIMAL
Ini tipe data number khusus yang bisa ditentukan jumlah precision dan scale nya
? DECIMAL(5, 2) -> -999.99 - 999.99
? DECIMAL(5, 0) -> -99999 - 99999
? DECIMAL(3, 1) -> -99.9 - 999

* Tipe Data String
Selain number, biasanya kita sering menyimpan data di dalam tabel dalam bentuk tulisan
Tipe data ini namanya tipe data String atau Text
Ada banyak tipe data String di MySQL

* CHAR dan VARCHAR
Pertama tipe data String di MySQL adalah CHAR dan VARCHAR
Kita bisa menentukan jumlah panjang maksimal karakter yang bisa ditampung oleh CHAR dan VARCHAR dengan menggunakan kurung buka lalu masukan jumlah maksimal karakter dan diakhiri kurung tutup
Misal, CHAR(10) atau VARCHAR(10) artinya tipe data String dengan maksimal jumlah karakternya adalah 10 karakter
Maksimum ukuran CHAR atau VARCHAR adalah 65535 karakter

* TEXT
Selain CHAR dan VARCHAR, tipe data String yang lainnya adalah TEXT
Berbeda dengan CHAR dan VARCHAR yang kita bisa tentukan panjang maksimum nya, TEXT tidak sudah memiliki maksimum  panjang nya
Terdapat 4 tipe data TEXT
TINYTEXT dengan maksimum 255 karakter (~256 bytes)
TEXT dengan maksimum 65535 karakter ( ~64 kb)
MEDIUMTEXT dengan maksimum 16777215 karakter (~16MB)
dan LONGTEXT dengan maksimum 4294967295 karakter (~4GB)

* ENUM
ENUM adalah tipe data String yang bisa kita tentukan pilihan pilihannya
Misal kita bisa membuat 
ENUM(‘Pria’, ‘Wanita’), artinya hanya bisa menerima data Pria atau Wanita
ENUM(‘Programmer’, ‘Zaman’, ‘Now’), artinya hanya bisa menerima data Programmer, Zaman atau Now

* Tipe Data Date dan Time
Selain tipe data Number dan String, biasanya kadang kita sering menyimpan data waktu atau tanggal
Sebenarnya bisa kita gunakan String untuk menyimpan data waktu atau tanggal, namun itu tidak di rekomendasikan, karena akan menyulitkan kita ketika nanti butuh melakukan manipulasi waktu atau tanggal di MySQL

* Jenis-Jenis Tipe Data Date dan Time
DATE, DATETIME, TIMESTAMP, TIME, YEAR

* Tipe Data Boolean
BOOLEAN adalah tipe data kebenaran, yang artinya datanya hanya ada dua jenis, benar atau salah
Benar direpresentasikan dengan data TRUE, sedangkan salah direpresentasikan dengan data FALSE

*/
