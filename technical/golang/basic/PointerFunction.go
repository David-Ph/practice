package main

import "fmt"

type Address struct {
	City, Province, Country string
}

func ChangeAddress(address *Address, city string) {
	address.City = city
}

type Man struct {
	Name string
}

func (this *Man) gotMarried() {
	this.Name = "Mr. " + this.Name
}

func swapNumber(a *int, b *int) {
	temp := *a
	*a = *b
	*b = temp
}

func main() {
	newMan := Man{"MaoMao"}
	fmt.Println(newMan.Name)
	newMan.gotMarried()
	fmt.Println(newMan.Name)

	address := Address{"Batam", "Kepri", "Indonesia"}
	ChangeAddress(&address, "Tanjungpinang")

	fmt.Println(address)

	a := 5
	b := 10

	fmt.Println("A IS", a)
	fmt.Println("B IS", b)

	swapNumber(&a, &b)

	fmt.Println("A IS", a)
	fmt.Println("B IS", b)
}
