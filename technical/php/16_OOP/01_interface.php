<?php
interface InfoProduk{
    public function getInfoProduk();
}

// class
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

class Komik extends Produk implements InfoProduk{

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

class Game extends Produk implements InfoProduk{
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



// object
$komikNaruto = new Komik("Naruto Shippuden", "Masashi Kishimoto", "WSJ", 15000, 100);
$dota = new Game("DOTA2", "ICEFROG", "VALVE", 250000, 15000);

$pencetak = new CetakInfoProduk();

$pencetak->tambahProduk($komikNaruto);
$pencetak->tambahProduk($dota);

echo $pencetak->cetak();
