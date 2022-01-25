package main

import "fmt"

func main() {
	const firstName = "Fey"
	const lastName string = "Syllenae"

	const (
		fullName = "Chai Yee Fung"
		nickName = "Mushi"
	)

	// firstName = "MaoMao" -> Error

	fmt.Println(firstName, lastName)

	var nilai32 int32 = 32768
	var nilai64 int64 = int64(nilai32)
	var nilai16 int16 = int16(nilai64)
	var myName string = string(nilai32)

	fmt.Println(nilai16) // -32768
	fmt.Println(myName)  // weird chinese char

	var name = "MaoMao"
	var e byte = name[0]
	var eString string = string(e)

	fmt.Println(eString) // M
}
