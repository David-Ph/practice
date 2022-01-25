/* 
in Golang, each variable can only contain one type of data type
in Golang, if you declare a variable and it's not used, it will give an error
syntax is

* Declaring Variable
****************
? var name string
? var myVar string
or
? var lastName = "Punyang" (will automatically be string)
? var age int8 = 24
or
? firstName := "Mushi"

* Constant
***************
contant in go is the same as constant with others

* Converting data type
**********************
sometimes in golang you need to convert a data type
for example from int to float, or int32 to int64
? var nilai32 int32 = 32768
? var nilai64 int64 = int64(nilai32)
? var nilai16 int16 = int16(nilai64)
be careful when converting bigger to smaller, for example int8 will not be able to handle values above 128

*/
