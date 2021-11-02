<?php
//? built in function
//* time
// untuk menampilkan tanggal dengan fomrat
echo date("l, d-M-Y");
echo "<br>";
echo date("l, d M Y", time() + (60 * 60 * 24 * 2));
echo "<br>";

// ? mktime
// membuat sendiri detik
echo date("l d M Y", mktime(0, 0, 0, 11, 26, 1997));
echo "<br>";

// ? strtotime
echo date("l d M Y", strtotime("25 aug 1985"));

//? most commonly used function
/* 
*String
strlen() // check string length
strcmp() // compare two strings
exlode() // split to array
htmlspecialchars() // 

*Utility
var_dump()
isset() // apakah variable pernah dibikin
empty() // apakah variable kosong
die() // untuk menghentikan program
sleep() // untuk mengpause program



*/