# Integrasi Aplikasi

Saat membuat aplikasi, sering sekali kita akan melakukan integrasi dengan aplikasi lain
Baik itu aplikasi yang kita buat sendiri, ataupun aplikasi yang dibuat oleh pihak lain, misal :
Saat kita membuat toko online, sistem akan terintegrasi dengan sistem logistic untuk mengelola pengiriman barangnya
Saat kita membuat aplikasi belajar online, sistem akan terintegrasi dengan payment gateway untuk menyediakan layanan pembayaran kelas online
Saat kita membuat aplikasi mobile, aplikasi kita akan terintegrasi dengan sistem kita yang terdapat di server untuk mengirim atau mengambil data

# Cara Integrasi Aplikasi

Secara garis besar, terdapat 4 cara integrasi antar aplikasi, yaitu :
File Sharing
Database Sharing
Remote Procedure Invocation
Messaging

# File Sharing

File Sharing merupakan integrasi aplikasi dengan cara berbagi file
Integrasi menggunakan file sharing adalah integrasi yang paling mudah dilakukan dan masih banyak dilakukan sampai sekarang
Biasanya aplikasi yang memiliki data akan membuat file (misal excel, csv, text, json), dan aplikasi yang membutuhkan data akan membaca data tersebut dari file
File Sharing sangat bermanfaat ketika integrasi dilakukan antar aplikasi yang tidak terhubung secara langsung

# Database Sharing

Database Sharing merupakan integrasi antar aplikasi yang memanfaatkan database untuk berbagi data
Database sharing sangat mudah dilakukan ketika aplikasi berada di tempat yang sama dan bisa mengakses database yang sama
Aplikasi hanya perlu menyimpan data ke database, dan secara otomatis aplikasi lain bisa membaca data tersebut dari database secara langsung

# Remote Procedure Invocation

Remote Procedure Invocation merupakan mekanisme integrasi antar aplikasi dengan cara membuat API yang bisa digunakan oleh aplikasi lain
Aplikasi yang memiliki data akan membuat API, dan aplikasi yang membutuhkan akan menggunakan API tersebut untuk mendapatkan data dari aplikasi tersebut
Remote Procedure Invocation merupakan cara sulit, namun sangat populer dilakukan saat ini
Hal ini karena menggunakan Remote Procedure Invocation, integrasi bisa dilakukan dengan cara real time, dan kompleksitas internal data aplikasi tidak perlu di expose ke aplikasi lain

# Messaging

Messaging merupakan cara integrasi aplikasi yang memanfaatkan aplikasi message broker atau message bus
Aplikasi yang memiliki data akan mengirim data ke aplikasi message broker, dan aplikasi yang membutuhkan data akan mengambil data dari message broker
Messaging sekilas mirip dengan Remote Procedure Invocation, namun yang membedakan adalah, Messaging tidak real time, kadang butuh waktu sampai data sampai ke aplikasi yang menerima data, sederhananya proses di Messaging adalah Asynchronous, sedangkan proses di Remote Procedure Invocation adalah Synchronous
