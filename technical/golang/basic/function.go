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

	// return firstName, lastName
	return
}

func sumAll(numbers ...int) int {
	total := 0
	for _, number := range numbers {
		total += number
	}

	return total
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

	mySlice := []int{1, 2, 3, 4, 5}
	myTotal := sumAll(mySlice...)
	total := sumAll(10, 15, 25, 30)
	fmt.Println(myTotal)
	fmt.Println(total)
}
