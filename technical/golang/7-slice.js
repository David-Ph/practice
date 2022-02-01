/* 
Apa itu tipe data slice?
    - Tipe data slice adalah potongan dari array
    - slice mirip dengan array, yang membedakan adalah slice bisa berubah
    - slice dan array selalu terkoneksi. dimana slice adalah data yang mengakses sebagian atau seluruh data di array

Detail tipe data slice:
    - Tipe data slice memiliki 3 tipe data: Pointer, length, dan capacity
    - Pointer adalah penunjuk alamat ke data pertama di array para slice
    - length adalah panjang dari slice
    - capacity adalah kapasitas dari slice, dimana length tidak boleh lebih dari capacity

membuat slice dari array:
 array[low:high] -> buat slice dari array dari index low ke high
 array[low:] -> buat slice dari array dari index low hingga index terakhir
 array[:high] -> buat slice dari array dari index 0 hingga index high
 array[:] -> buat slice dari seluruh data array

Slice mendapat data dengan mereferensi array, jadi kalau kita mengubah data di array, data di slice akan berubah, dan begitu juga sebaliknya.

method slice:
- len(slice) -> cek panjang slice
- cap(slice) -> cek kapasitas slice
- append(slice, data) -> membuat slice baru dengan menambah data ke posisi terakhir slice, jika kapasitas sudah penuh, maka akan membuat array baru. Jika belum penuh, makan original array yang akan direferensi.
- make([]TypeData, length, capacity) -> membuat slice baru
- copy(destination, source) -> menyalin slice dari source ke destination

slice vs array
iniArray := [...]int{1, 2, 3, 4, 5}
iniSlice := []int{1, 2, 3, 4, 5}

*/
