<?php
require_once 'app/init.php';

$komikNaruto = new Komik("Naruto Shippuden", "Masashi Kishimoto", "WSJ", 15000, 100);
$dota = new Game("DOTA2", "ICEFROG", "VALVE", 250000, 15000);

$pencetak = new CetakInfoProduk();

$pencetak->tambahProduk($komikNaruto);
$pencetak->tambahProduk($dota);

echo $pencetak->cetak();
