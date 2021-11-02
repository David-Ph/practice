<?php
// ini komentar
/* 
        ini komentar
        2 baris
*/

// ? Standar ouput
// echo, print, print_r, var_dump
echo "Hello there "; // will print html on the page
print 'MaoMao '; // works the same as echo
print_r("Anjaaayy "); // is used to print array
var_dump("Anjaaayy "); // will print also data type and length
echo "<br>";

// ? Penulisan sintaks php
// 1. PHP di dalam HTML
// 2. HTML di dalam PHP

// ? Variable
$nama_saya = "MaoMao";

echo "halo, nama saya $nama_saya";

echo "<br>";
// ? Operator
// + - * / %
$x = 10;
$y = 20;
echo $x + $y;

echo "<br>";
// ? concatenation
$nama_depan = "MaoMao";
$nama_belakang = "Syllenae";
echo $nama_depan . " " . $nama_belakang;

echo "<br>";
// ? assignment
$secondX = 1;
$secondX += 5;
echo $secondX;
echo "<br>";
// can also work with concatenation
$nama_lengkap = $nama_depan;
$nama_lengkap .= " ";
$nama_lengkap .= $nama_belakang;
echo $nama_lengkap;
echo "<br>";

// ? Perbandingan
// < > <= >= == === !==
var_dump(1 == '1'); // true
echo "<br>";

// ? operator logika
// && || ! 
?>


<!-- <!DOCTYPE html>
<html lang="en">

<head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Belajar PHP</title>
</head>

<body>
        <h1>Halo, Selamat Datang <?php echo $nama_saya ?></h1>
</body>

</html> -->