package main

import "fmt"

type Address struct {
	City, Province, Country string
}

func main() {
	// pass by value
	address1 := Address{"Tanjungpinang", "Kepri", "Indonesia"}
	address2 := address1

	address2.City = "Batam"

	fmt.Println(address1)
	fmt.Println(address2)

	// pass by reference
	address3 := Address{"Jakarta", "Jawa", "Indonesia"}
	address4 := &address3 // address4 data type is pointer *Address

	address4.City = "Bandung"

	fmt.Println(address3)
	fmt.Println(address4)

	// reassign variable (mengubah hanya 1 alamat)
	address5 := Address{"Papua", "Kota", "Indonesia"}
	address6 := &address5 // address6 data type is pointer *Address

	address6 = &Address{"Malang", "Jawa Timur", "Indonesia"}

	fmt.Println(address5)
	fmt.Println(address6)

	// reassign variable (mengubah 2 alamat)
	address7 := Address{"Kalimantan", "Padang", "Indonesia"}
	address8 := &address7 // address8 data type is pointer *Address

	*address8 = Address{"Sumut", "Medan", "Indonesia"}

	fmt.Println(address7)
	fmt.Println(address8)

	// new
	alamat1 := new(Address)
	alamat1.City = "Jakarta"
	fmt.Println(alamat1)
}
