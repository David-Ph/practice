package main

import "fmt"

func sayHello() {
	fmt.Println("Hello")
}

func sayFullName(firstName string, lastName string) {
	fmt.Println("Fullname is", firstName, lastName)
}

func add(a int, b int) int {
	return a + b
}

func returnMultipleValues() (string, string) {
	return "Fey", "Syllenae"
}

func getCompleteName() (firstName, lastName string) {
	firstName = "Fey"
	lastName = "Syllenae"

	return firstName, lastName
}

func main() {
	sayHello()
	sayFullName("Fey", "Syllenae")
	result := add(2, 5)
	fmt.Println(result)

	firstName, _ := returnMultipleValues()
	fmt.Println(firstName)

	namaDepan, namaBelakang := getCompleteName()
	fmt.Println(namaDepan, namaBelakang)
}
