package main

import "fmt"

type Customer struct {
	Name, Address string
	Age           int
	Married       bool
}

func main() {
	var eko Customer
	eko.Name = "Eko"
	eko.Address = "Indonesia"
	eko.Age = 30

	fmt.Println(eko)

	MaoMao := Customer{
		Name:    "MaoMao",
		Address: "Indonesia",
		Age:     30,
	}

	fmt.Println(MaoMao)

	Fey := Customer{"Fey Syllenae", "Indonesia", 30, false}

	fmt.Println(Fey)
}
