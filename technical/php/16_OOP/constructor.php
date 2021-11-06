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
}

class CetakInfoProduk{
    public function cetak(Produk $produk){
        return "$produk->judul | {$produk->getLabel()} | Rp.$produk->harga";
    }
}

// object
$komikNaruto = new Produk("Naruto", "Masashi Kishimoto", "WSJ", 15000);
$pencetak = new CetakInfoProduk();




// echo $pencetak->cetak($komikNaruto);

// var_dump($komikNaruto);
// echo $komikNaruto->getLabel();

?>