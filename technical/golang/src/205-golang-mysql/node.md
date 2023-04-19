# Packagea database

Bahasa pemrograman Go-Lang secara default memiliki sebuah package bernama database
Package database adalah package yang berisikan kumpulan standard interface yang menjadi standard untuk berkomunikasi ke database
Hal ini menjadikan kode program yang kita buat untuk mengakses jenis database apapun bisa menggunakan kode yang sama
Yang berbeda hanya kode SQL yang perlu kita gunakan sesuai dengan database yang kita gunakan

# Cara kerja package database

aplikasi -> call to database interface -> call to database driver -> call to DBMS

# Menambah module database mysql

`go get -u github.com/go-sql-driver/mysql`

# Membuat koneksi ke database

Hal yang pertama akan kita lakukan ketika membuat aplikasi yang akan menggunakan database adalah melakukan koneksi ke database nya
Untuk melakukan koneksi ke databsae di Golang, kita bisa membuat object sql.DB menggunakan function sql.Open(driver, dataSourceName)
Untuk menggunakan database MySQL, kita bisa menggunakan driver “mysql”
Sedangkan untuk dataSourceName, tiap database biasanya punya cara penulisan masing-masing, misal di MySQL, kita bisa menggunakan dataSourceName seperti dibawah ini :
username:password@tcp(host:port)/database_name
Jika object sql.DB sudah tidak digunakan lagi, disarankan untuk menutupnya menggunakan function Close()

```
db, err := sql.Open("mysql", "[USERNAME]:[PASSWORD]@tcp(localhost:3306)/belajar_golang")
	if err != nil {
		t.Error(err)
	}
	defer db.Close()
```

# Database Pooling

Database pooling adalah koleksi database yang dimanage oleh sql.DB secara otomatis. Contohnya ketika ada yang ingin mengambil atau mengdit data dari database maka kita akan membuka koneksi ke database, begitu juga untuk user user lainnya.
sql.DB di Golang sebenarnya bukanlah sebuah koneksi ke database
Melainkan sebuah pool ke database, atau dikenal dengan konsep Database Pooling
Di dalam sql.DB, Golang melakukan management koneksi ke database secara otomatis. Hal ini menjadikan kita tidak perlu melakukan management koneksi database secara manual
Dengan kemampuan database pooling ini, kita bisa menentukan jumlah minimal dan maksimal koneksi yang dibuat oleh Golang, sehingga tidak membanjiri koneksi ke database, karena biasanya ada batas maksimal koneksi yang bisa ditangani oleh database yang kita gunakan

# Pengaturan database pooling

(DB) SetMaxIdleConns(number)
Pengaturan berapa jumlah koneksi minimal yang dibuat
(DB) SetMaxOpenConns(number)
Pengaturan berapa jumlah koneksi maksimal yang dibuat
(DB) SetConnMaxIdleTime(duration)
Pengaturan berapa lama koneksi yang sudah tidak digunakan akan dihapus
(DB) SetConnMaxLifetime(duration)
Pengaturan berapa lama koneksi boleh digunakan

# Eksekusi perintah SQL

Saat membuat aplikasi menggunakan database, sudah pasti kita ingin berkomunikasi dengan database menggunakan perintah SQL
Di Golang juga menyediakan function yang bisa kita gunakan untuk mengirim perintah SQL ke database menggunakan function (DB) ExecContext(context, sql, params)
Ketika mengirim perintah SQL, kita butuh mengirimkan context, dan seperti yang sudah pernah kita pelajari di course Golang Context, dengan context, kita bisa mengirim sinyal cancel jika kita ingin membatalkan pengiriman perintah SQL nya

```
CREATE TABLE customer
(
  id VARCHAR(100) NOT NULL,
  name VARCHAR(100) NOT NULL,
  PRIMARY KEY(id)
) ENGINE = InnoDb;
```

```
  db := GetConnection()
	defer db.Close()

	ctx := context.Background()

	script := "INSERT INTO customer(id, name) VALUES('1', 'MaoMao');"
	_, err := db.ExecContext(ctx, script)
	if err != nil {
		panic(err)
	}

	fmt.Println("Successfully insert new customer")
```

# Query SQL

Untuk operasi SQL yang tidak membutuhkan hasil, kita bisa menggunakan perintah Exec, namun jika kita membutuhkan result, seperti SELECT SQL, kita bisa menggunakan function yang berbeda
Function untuk melakukan query ke database, bisa menggunakan function (DB) QueryContext(context, sql, params)

# Rows

Hasil Query function adalah sebuah data structs sql.Rows
Rows digunakan untuk melakukan iterasi terhadap hasil dari query
Kita bisa menggunakan function (Rows) Next() (boolean) untuk melakukan iterasi terhadap data hasil query, jika return data false, artinya sudah tidak ada data lagi didalam result
Untuk membaca tiap data, kita bisa menggunakan (Rows) Scan(columns...)
Dan jangan lupa, setelah menggunakan Rows, jangan lupa untuk menutupnya menggunakan (Rows) Close()

```
  db := GetConnection()
	defer db.Close()

	ctx := context.Background()

	script := "SELECT id, name FROM customer;"
	rows, err := db.QueryContext(ctx, script)
	if err != nil {
		panic(err)
	}

	for rows.Next() {
		var id, name string
		err := rows.Scan(&id, &name) // insert pointer to destination variable
		if err != nil {
			panic(err)
		}
		fmt.Println("ID: ", id)
		fmt.Println("Name: ", name)
	}
	defer rows.Close()
```

# ALter table customer

```
DELETE FROM customer;

ALTER TABLE customer
  ADD COLUMN email VARCHAR(100),
  ADD COLUMN balance INTEGER DEFAULT 0,
  ADD COLUMN rating DOUBLE DEFAULT 0.0,
  ADD COLUMN created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  ADD COLUMN birth_date DATE,
  ADD COLUMN married BOOLEAN DEFAULT false;

INSERT INTO customer (id, name, email, balance, rating, birth_date, married)
VALUES('5', 'MaoMao_5', 'MaoMao_5@gmail.com', 100000, 5.0, '1999-9-9', false),
      ('3', 'MaoMao_3', 'MaoMao_3@gmail.com', 100000, 5.0, '1999-9-9', false),
      ('4', 'MaoMao_4', 'MaoMao_4@gmail.com', 100000, 5.0, '1999-9-9', false);
```

# Error tipe data date

Secara default, Driver MySQL untuk Golang akan melakukan query tipe data DATE, DATETIME, TIMESTAMP menjadi []byte / []uint8. Dimana ini bisa dikonversi menjadi String, lalu di parsing menjadi time.Time
Namun hal ini merepotkan jika dilakukan manual, kita bisa meminta Driver MySQL untuk Golang secara otomatis melakukan parsing dengan menambahkan parameter parseDate=true

# Nullable

Golang database tidak mengerti dengan tipe data NULL di database
Oleh karena itu, khusus untuk kolom yang bisa NULL di database, akan jadi masalah jika kita melakukan Scan secara bulat-bulat menggunakan tipe data representasinya di Golang

# Error data null

Konversi secara otomatis NULL tidak didukung oleh Driver MySQL Golang
Oleh karena itu, khusus tipe kolom yang bisa NULL, kita perlu menggunakan tipe data yang ada dalam package sql

# SQL Injection

- SQL Dengan Parameter

Saat membuat aplikasi, kita tidak mungkin akan melakukan hardcode perintah SQL di kode Golang kita
Biasanya kita akan menerima input data dari user, lalu membuat perintah SQL dari input user, dan mengirimnya menggunakan perintah SQL

- Membuat Table User

```
CREATE TABLE user
(
  username VARCHAR(100) NOT NULL,
  password VARCHAR(100) NOT NULL,
  PRIMARY KEY (username)
) ENGINE = InnoDB;
```

- SQL Injection

SQL Injection adalah sebuah teknik yang menyalahgunakan sebuah celah keamanan yang terjadi dalam lapisan basis data sebuah aplikasi.
Biasa, SQL Injection dilakukan dengan mengirim input dari user dengan perintah yang salah, sehingga menyebabkan hasil SQL yang kita buat menjadi tidak valid
SQL Injection sangat berbahaya, jika sampai kita salah membuat SQL, bisa jadi data kita tidak aman

- Solusinya?

Jangan membuat query SQL secara manual dengan menggabungkan String secara bulat-bulat
Jika kita membutuhkan parameter ketika membuat SQL, kita bisa menggunakan function Execute atau Query dengan parameter yang akan kita bahas di chapter selanjutnya

# SQL Dengan Parameter

Sekarang kita sudah tahu bahaya nya SQL Injection jika menggabungkan string ketika membuat query
Jika ada kebutuhan seperti itu, sebenarnya function Exec dan Query memiliki parameter tambahan yang bisa kita gunakan untuk mensubtitusi parameter dari function tersebut ke SQL query yang kita buat.
Untuk menandai sebuah SQL membutuhkan parameter, kita bisa gunakan karakter ? (tanda tanya)

- Conoth SQL

SELECT username FROM user WHERE username = ? AND password = ? LIMIT 1
INSERT INTO user(username, password) VALUES (?, ?)
Dan lain-lain

# Auto Increment

Kadang kita membuat sebuah table dengan id auto increment
Dan kadang pula, kita ingin mengambil data id yang sudah kita insert ke dalam MySQL
Sebenarnya kita bisa melakukan query ulang ke database menggunakan SELECT LAST_INSERT_ID()
Tapi untungnya di Golang ada cara yang lebih mudah
Kita bisa menggunakan function (Result) LastInsertId() untuk mendapatkan Id terakhir yang dibuat secara auto increment
Result adalah object yang dikembalikan ketika kita menggunakan function Exec

```
CREATE TABLE comments
(
	id INT NOT NULL AUTO_INCREMENT,
	email VARCHAR(100) NOT NULL,
	comment TEXT,
	PRIMARY KEY (id)
) ENGINE InnoDb;
```

# Query atau Exec dengan Parameter

Saat kita menggunakan Function Query atau Exec yang menggunakan parameter, sebenarnya implementasi dibawah nya menggunakan Prepare Statement
Jadi tahapan pertama statement nya disiapkan terlebih dahulu, setelah itu baru di isi dengan parameter
Kadang ada kasus kita ingin melakukan beberapa hal yang sama sekaligus, hanya berbeda parameternya. Misal insert data langsung banyak
Pembuatan Prepare Statement bisa dilakukan dengan manual, tanpa harus mennggunakan Query atau Exec dengan parameter

- Prepare Statement

Saat kita membuat Prepare Statement, secara otomatis akan mengenali koneksi database yang digunakan
Sehingga ketika kita mengeksekusi Prepare Statement berkali-kali, maka akan menggunakan koneksi yang sama dan lebih efisien karena pembuatan prepare statement nya hanya sekali diawal saja
Jika menggunakan Query dan Exec dengan parameter, kita tidak bisa menjamin bahwa koneksi yang digunakan akan sama, oleh karena itu, bisa jadi prepare statement akan selalu dibuat berkali-kali walaupun kita menggunakan SQL yang sama
Untuk membuat Prepare Statement, kita bisa menggunakan function (DB) Prepare(context, sql)
Prepare Statement direpresentasikan dalam struct database/sql.Stmt
Sama seperti resource sql lainnya, Stmt harus di Close() jika sudah tidak digunakan lagi

# Database Transaction

Salah satu fitur andalan di database adalah transaction
Materi database transaction sudah saya bahas dengan tuntas di materi MySQL database, jadi silahkan pelajari di course tersebut
Di course ini kita akan fokus bagaimana menggunakan database transaction di Golang

# Transaction di Golang

Secara default, semua perintah SQL yang kita kirim menggunakan Golang akan otomatis di commit, atau istilahnya auto commit
Namun kita bisa menggunakan fitur transaksi sehingga SQL yang kita kirim tidak secara otomatis di commit ke database
Untuk memulai transaksi, kita bisa menggunakan function (DB) Begin(), dimana akan menghasilkan struct Tx yang merupakan representasi Transaction
Struct Tx ini yang kita gunakan sebagai pengganti DB untuk melakukan transaksi, dimana hampir semua function di DB ada di Tx, seperti Exec, Query atau Prepare
Setelah selesai proses transaksi, kita bisa gunakan function (Tx) Commit() untuk melakukan commit atau Rollback()

# Repository Pattern

Dalam buku Domain-Driven Design, Eric Evans menjelaskan bahwa “repository is a mechanism for encapsulating storage, retrieval, and search behavior, which emulates a collection of objects”
Pattern Repository ini biasanya digunakan sebagai jembatan antar business logic aplikasi kita dengan semua perintah SQL ke database
Jadi semua perintah SQL akan ditulis di Repository, sedangkan business logic kode program kita hanya cukup menggunakan Repository tersebut

# Entity / Model

Dalam pemrograman berorientasi object, biasanya sebuah tabel di database akan selalu dibuat representasinya sebagai class Entity atau Model, namun di Golang, karena tidak mengenal Class, jadi kita akan representasikan data dalam bentuk Struct
Ini bisa mempermudah ketika membuat kode program
Misal ketika kita query ke Repository, dibanding mengembalikan array, alangkah baiknya Repository melakukan konversi terlebih dahulu ke struct Entity / Model, sehingga kita tinggal menggunakan objectnya saja
