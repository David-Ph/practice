/* 
? access modifier
ketika membuat variable atau function, ketika diawali oleh huruf kecil, tidak akan bisa diakses dari luar

jadi kalau membuat function untuk diakses dari luar, harus diawali dengan huruf ebsar

? initialization
Saat kita membuat package, kita bisa membuat sebuah function yang akan diakses ketika package kita diakses
Ini sangat cocok ketika contohnya, jika package kita berisi function-function untuk berkomunikasi dengan database, kita membuat function inisialisasi untuk membuka koneksi ke database
Untuk membuat function yang diakses secara otomatis ketika package diakses, kita cukup membuat function dengan nama init

Kadang kita hanya ingin menjalankan init function di package tanpa harus mengeksekusi salah satu function yang ada di package
Secara default, Go-Lang akan komplen ketika ada package yang di import namun tidak digunakan
Untuk menangani hal tersebut, kita bisa menggunakan blank identifier (_) sebelum nama package ketika melakukan import

? package os
Package os berisikan fungsionalitas untuk mengakses fitur sistem operasi secara independen (bisa digunakan  disemua sistem operasi)

? package flag
Package flag berisikan fungsionalitas untuk memparsing command line argument

? package strings
strings.Trim(string, cutset)
Memotong cutset di awal dan akhir string

strings.ToLower(string)
Membuat semua karakter string menjadi lower case

strings.ToUpper(string)
Membuat semua karakter string menjadi upper case

strings.Split(string, separator)
Memotong string berdasarkan separator

strings.Contains(string, search)
Mengecek apakah string mengandung string lain

strings.ReplaceAll(string, from, to)
Mengubah semua string dari from ke to

? package strconv
Sebelumnya kita sudah belajar cara konversi tipe data, misal dari int32 ke int34
Bagaimana jika kita butuh melakukan konversi yang tipe datanya berbeda? Misal dari int ke string, atau sebaliknya
Hal tersebut bisa kita lakukan dengan bantuan package strconv (string conversion)

strconv.parseBool(string)
Mengubah string ke bool

strconv.parseFloat(string)
Mengubah string ke float

strconv.parseInt(string)
Mengubah string ke int64

strconv.FormatBool(bool)
Mengubah bool ke string

strconv.FormatFloat(float, … )
Mengubah float64 ke string

strconv.FormatInt(int, … )
Mengubah int64 ke string

?package math
math.Round(float64)
Membulatkan float64 keatas atau kebawah, sesuai dengan yang paling dekat

math.Floor(float64)
Membulatkan float64 kebawah

math.Ceil(float64)
Membulatkan float64 keatas

math.Max(float64, float64)
Mengembalikan nilai float64 paling besar

math.Min(float64, float64)
Mengembalikan nilai float64 paling kecil

? Package container/list
Package container/list adalah implementasi struktur data double linked list di Go-Lang

? Package container/ring
Package container/ring adalah implementasi struktur data circular list
Circular list adalah struktur data ring, dimana diakhir element akan kembali ke element awal (HEAD)

? Package sort
Package sort adalah package yang berisikan utilitas untuk proses pengurutan
Agar data kita bisa diurutkan, kita harus mengimplementasikan kontrak di interface sort.Interface

? Package time
 time.Now()
Untuk mendapatkan waktu saat ini

time.Date(...)
Untuk membuat waktu

time.Parse(layout, string)
Untuk memparsing waktu dari string

? Package reflect
Dalam bahasa pemrograman, biasanya ada fitur Reflection, dimana kita bisa melihat struktur kode kita pada saat aplikasi sedang berjalan
Hal ini bisa dilakukan di Go-Lang dengan menggunakan package reflect
Fitur ini mungkin tidak bisa dibahas secara lengkap dalam satu video, Anda bisa eksplorasi package reflec ini secara otodidak
Reflection sangat berguna ketika kita ingin membuat library yang general sehingga mudah digunakan

? Package regexp
Package regexp adalah utilitas di Go-Lang untuk melakukan pencarian regular expression
regexp.MustCompile(string)
Membuat Regexp

Regexp.MatchString(string) bool
Mengecek apakah Regexp match dengan string

Regexp.FindAllString(string, max)
Mencari string yang match dengan maximum jumlah hasil

*/
