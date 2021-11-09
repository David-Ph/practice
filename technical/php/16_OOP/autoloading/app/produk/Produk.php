<?php
abstract class Produk {
    protected $judul, $penulis, $penerbit, $harga;
    protected $diskon = 0;

    public function __construct($judul = "Judul", $penulis = "Penulis", $penerbit = "Penerbit", $harga = 0) {
        $this->judul = $judul;
        $this->penulis = $penulis;
        $this->penerbit = $penerbit;
        $this->harga = $harga;
    }

    // setter function
    public function setJudul($judul) {
        $this->judul = $judul;
    }
    // getter function
    public function getJudul() {
        return $this->judul;
    }

    // setter function
    public function setPenulis($penulis) {
        $this->penulis = $penulis;
    }
    // getter function
    public function getPenulis() {
        return $this->penulis;
    }

    // setter function
    public function setPenerbit($penerbit) {
        $this->penerbit = $penerbit;
    }
    // getter function
    public function getPenerbit() {
        return $this->penerbit;
    }

    public function setDiskon($diskon) {
        $this->diskon = $diskon;
    }

    public function getDiskon() {
        return $this->diskon;
    }

    public function setHarga($harga) {
        return $this->harga = $harga;
    }

    public function getHarga() {
        return $this->harga - ($this->harga * $this->diskon / 100);
    }

    public function getLabel() {
        return "Penulis: $this->penulis; Penerbit: $this->penerbit";
    }

    abstract public function getInfo();
}
