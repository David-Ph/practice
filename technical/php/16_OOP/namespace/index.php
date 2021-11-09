<?php
require_once 'app/init.php';

// $komikNaruto = new Komik("Naruto Shippuden", "Masashi Kishimoto", "WSJ", 15000, 100);
// $dota = new Game("DOTA2", "ICEFROG", "VALVE", 250000, 15000);

// $pencetak = new CetakInfoProduk();

// $pencetak->tambahProduk($komikNaruto);
// $pencetak->tambahProduk($dota);

// echo $pencetak->cetak();

use app\service\User as ServiceUser;
use app\produk\User as ProdukUser;

new ServiceUser();
echo "<br>";
new ProdukUser();
