/* 
* Number
*********
there are 2 types of numbers

? Integer
int8 = -128 to 127
int16 = -32768 to 32767
int32 = bigger than int16
int64 = bigger than int32

uint8 = 0 to 255
uint16 = 0 to 65535
uint32 = 0 to >uint16
uint64 = 0 to >uint32

make sure to use the most efficient one, because this matters for memory efficiency


? Floating Point
float32 = up to 38 numbers behind comma
float64 = up to 308 numbers behind comma
complex64
comples128

? Alias
Byte = uint8
rune = int32
int = minimal int32
uint = minimal uint32

* Boolean
*********
in go, the key word for Boolean is bool
true / false

* String
*********
String can use "" or ``
there are a lot of string methods such as
len("string") -> length of string
"string"[2] -> will print 3rd character in byte, so "r"

*/