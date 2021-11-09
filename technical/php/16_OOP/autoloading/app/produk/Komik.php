<?php

class Komik extends Produk implements InfoProduk {

    public function __construct($judul = "Judul", $penulis = "Penulis", $penerbit = "Penerbit", $harga = 0, $halaman = 0) {
        parent::__construct($judul = $judul, $penulis = $penulis, $penerbit = $penerbit, $harga = $harga);

        $this->halaman = $halaman;
    }

    public function getInfo() {
        return "Judul: $this->judul | Penulis: $this->penulis | Penerbit: $this->penerbit | Harga: $this->harga";
    }

    public function getInfoProduk() {
        return "Komik: " . $this->getInfo() . " | Halaman: {$this->halaman}";
    }
}
