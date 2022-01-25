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
}
