package main

import "fmt"

type Customer struct {
	Name, Address string
	Age           int
	Married       bool
}

type Owner struct {
	Name, Address string
	Age           int
	Married       bool
}

func (customer Customer) GetName() string {
	return customer.Name
}

type HasName interface {
	GetName() string
}

func SayHello(hasName HasName) {
	fmt.Println("Hello", hasName.GetName())
}

// return empty interface
func Ups(i int) interface{} {
	if i == 1 {
		return 1
	} else if i == 2 {
		return true
	} else {
		return "Ups"
	}
}

func main() {
	MaoMao := Customer{Name: "MaoMao"}
	SayHello(MaoMao)

	// error
	// Boss := Owner{Name: "Boss"}
	// SayHello(Boss)

	fmt.Println(Ups(2))
}
