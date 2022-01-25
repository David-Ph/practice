package main

import "fmt"

func main() {
	name1 := "Eko"
	name2 := "Eko"

	fmt.Println(name1 != name2)

	firstVar := true
	secondVar := true
	thirdVar := firstVar && secondVar  // true
	fourthVar := firstVar || secondVar // true

	fmt.Println(thirdVar)   // true
	fmt.Println(!fourthVar) // false

}
