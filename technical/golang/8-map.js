/* 
- pada array atau slice, untuk mengakses data, kita menggunakan index number dimulai dari 0

- map ada tipe data lain yang berisikan kumpulan data yang sama, namun kita bisa menentukan tipe data index yang kita gunakan

- sederhananya, map adalah tipe data kumpulan key-value di mana key bersifat unik, tidak boleh ada yang sama

- berbeda dengan data array dan slice, jumlah data yang kita masukkan ke dalam map boleh sebanyak banyaknya.

begini membuat map:

person := map[tipe-key]tipe-value {
    "name" : "Eko"
    "Address" : "Indonesia"
}

method method map:
len(map) -> cek panjang map
map[key] -> mengambil data di map dengan key
map[key] = value -> mengubah data di map daengan key
make(map[TypeKey]TypeValue) -> membuat map baru
delete(map, key) -> menghapus data di map dengan key

*/