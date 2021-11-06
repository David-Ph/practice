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
    public function getInfoProduk() {
        return "Judul: $this->judul | Penulis: $this->penulis | Penerbit: $this->penerbit | Harga: $this->harga | Halaman: $this->halaman";
    }
}

class Game extends Produk {
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
$komikNaruto = new Komik("Naruto", "Masashi Kishimoto", "WSJ", 15000);
$dota = new Game("DOTA2", "ICEFROG", "VALVE", 0);
$pencetak = new CetakInfoProduk();

echo $pencetak->cetak($dota);