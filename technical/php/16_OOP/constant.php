<?php 
define("NAMA", 'David');

echo NAMA;

echo "<br>";

const UMUR = 32;

echo UMUR;

echo "<br>";

class Coba{
    const NAMA = "Sandhika Galih";
    // define("NAMA", 'David'); // WILL NOT WORK IN CLASS

}

echo Coba::NAMA;

echo "<br>";

echo __LINE__;

echo "<br>";

echo __FILE__;

echo "<br>";


?>