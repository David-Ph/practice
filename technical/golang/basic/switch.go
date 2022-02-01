package main

import "fmt"

func main() {
	name := "Fey"

	switch name {
	case "MaoMao":
		fmt.Println("Name is MaoMao")
	case "Joko":
		fmt.Println("Name is Joko")
	default:
		fmt.Println("name is something else")
	}

	switch length := len(name); length > 5 {
	case true:
		fmt.Println("nama terlalu panjang")
	case false:
		fmt.Println("Nama ckup")
	}

	anotherVar := 10
	switch {
	case anotherVar > 8:
		fmt.Println("Di atas 8")
	default:
		fmt.Println("Di bawah 8")
	}
}
