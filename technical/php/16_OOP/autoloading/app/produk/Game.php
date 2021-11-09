<?php

class Game extends Produk implements InfoProduk {
    public function __construct($judul = "Judul", $penulis = "Penulis", $penerbit = "Penerbit", $harga = 0, $jam = 0) {
        parent::__construct($judul = $judul, $penulis = $penulis, $penerbit = $penerbit, $harga = $harga);

        $this->jam = $jam;
    }

    public function getInfo() {
        return "Judul: $this->judul | Penulis: $this->penulis | Penerbit: $this->penerbit | Harga: $this->harga";
    }

    public function getInfoProduk() {
        return "Game: " . $this->getInfo() . " | Jam: {$this->jam}";
    }
}
