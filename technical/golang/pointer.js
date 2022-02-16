/* 
pass by value
secara default, semua variable di golang itu dipass sebagai value, bukan reference

we use & for the address
we use * for the value inside the address(dereferencing)

bisa juga membuat pointer baru dengand ata kosong dengan kata kunci New

walaupun method akan menempel di struct, tapi sebenarnya data yang diakses di dalam method adalah pass by value

sangat direkomendasikan menggunakan pointer di method sehingga tidak boros memori
*/