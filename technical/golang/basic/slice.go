package main

import "fmt"

func main() {
	var months = [...]string{
		"Januari",
		"Februari",
		"Maret",
		"April",
		"Mei",
		"Juni",
		"Juli",
		"Agustus",
		"September",
		"Oktober",
		"November",
		"Desember",
	}

	var slice1 = months[4:7]
	slice1 = months[:]
	fmt.Println(slice1)
	fmt.Println(len(slice1))
	fmt.Println(cap(slice1))

	var slice2 = append(slice1, "Bambang")
	fmt.Println(slice2)
	fmt.Println(slice1)

	createNewSlice := make([]string, 2, 5)
	createNewSlice[0] = "Eko"
	createNewSlice[1] = "Kurniawan"
	fmt.Println(createNewSlice)

	copySlice := make([]string, len(createNewSlice), cap(createNewSlice))
	copy(copySlice, createNewSlice)
	fmt.Println(copySlice)
}
