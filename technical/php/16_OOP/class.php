<?php 

// class
class Produk{
    public $judul = "Judul", 
    $penulis = "Penulis", 
    $penerbit = "Penerbit", 
    $harga = 0;
    

    public function getLabel(){
        return "Penulis: $this->penulis; Penerbit: $this->penerbit";
    }
}
// object
$produk1 = new Produk();
$produk1->judul = "Naruto";
$produk1->penulis = "Masashi Kishimoto";
$produk1->penerbit = "Shounen Jump Weekly";
$produk1->harga = 18000;
$produk1->propertyBaru = "Baru";

var_dump($produk1);
echo $produk1->getLabel(); 
?>