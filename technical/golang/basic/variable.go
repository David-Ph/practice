package main

import "fmt"

func main() {
	var name string

	name = "MaoMao"
	fmt.Println(name)

	name = "Fey Syllnae"
	fmt.Println(name)

	var lastName = "Punyang"
	fmt.Println(lastName)

	var age int8 = 24
	fmt.Println(age)

	firstName := "Mushi"
	fmt.Println(firstName)

	var (
		fullName = "Chai Yee Fung"
		nickName = "Mushi"
	)
	fmt.Println(fullName, nickName)
}
