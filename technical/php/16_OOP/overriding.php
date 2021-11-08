<?php
// class
class Produk {
    public function __construct($judul = "Judul", $penulis = "Penulis", $penerbit = "Penerbit", $harga = 0) {
        $this->judul = $judul;
        $this->penulis = $penulis;
        $this->penerbit = $penerbit;
        $this->harga = $harga;
    }

    public function getLabel() {
        return "Penulis: $this->penulis; Penerbit: $this->penerbit";
    }

    public function getInfoProduk() {
        return "Judul: $this->judul | Penulis: $this->penulis | Penerbit: $this->penerbit | Harga: $this->harga";
    }
}

class Komik extends Produk {

    public function __construct($judul = "Judul", $penulis = "Penulis", $penerbit = "Penerbit", $harga = 0, $halaman = 0) {
        parent::__construct($judul = $judul, $penulis = $penulis, $penerbit = $penerbit, $harga = $harga);

        $this->$halaman = $halaman;
    }

    public function getInfoProduk() {
        return "Komik: " . parent::getInfoProduk() . " | {$this->halaman}";
    }
}

class Game extends Produk {
    public function __construct($judul = "Judul", $penulis = "Penulis", $penerbit = "Penerbit", $harga = 0, $jam = 0) {
        parent::__construct($judul = $judul, $penulis = $penulis, $penerbit = $penerbit, $harga = $harga);

        $this->$jam = $jam;
    }

    public function getInfoProduk() {
        return "Judul: $this->judul | Penulis: $this->penulis | Penerbit: $this->penerbit | Harga: $this->harga | Waktu: $this->jam";
    }
}

class CetakInfoProduk {
    public function cetak(Produk $produk) {
        return "$produk->judul | {$produk->getLabel()} | Rp.$produk->harga";
    }
}



// object
$komikNaruto = new Komik("Naruto Shippuden", "Masashi Kishimoto", "WSJ", 15000, 100);
$dota = new Game("DOTA2", "ICEFROG", "VALVE", 0);

echo $komikNaruto->getInfoProduk();
echo "<br>";
echo $dota->judul;

// $pencetak = new CetakInfoProduk();
// echo $pencetak->cetak($dota);
