package main

import "fmt"

func main() {
	name := "fey"

	if name == "MaoMao" {
		fmt.Println("Name is", name)
	} else if name == "Fey" {
		fmt.Println("Name is ", name, "Instead")
	} else {
		fmt.Println("Name is ", name, "else")
	}

	if length := len(name); length > 5 {
		fmt.Println("name terlalu panjang")
	} else {
		fmt.Println("Nama ckup")
	}

	if !(len(name) > 5) {
		fmt.Println("Hello!")
	}
}
