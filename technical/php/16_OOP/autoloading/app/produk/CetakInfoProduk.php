<?php

class CetakInfoProduk {
    public $daftarProduk = [];

    public function tambahProduk(Produk $produk) {
        $this->daftarProduk[] = $produk;
    }

    public function cetak() {
        $str = "Daftar produk: <br>";

        foreach ($this->daftarProduk as $p) {
            $str .= "-{$p->getInfo()} <br>";
        }

        return $str;
    }
}

?>