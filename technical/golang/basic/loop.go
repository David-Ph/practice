package main

import "fmt"

func main() {
	counter := 1

	for counter <= 10 {
		fmt.Println("perulangan ke ", counter)
		counter++
	}

	for i := 0; i < 10; i++ {
		fmt.Println("ini ", i)
	}

	slice := []string{"Eko", "Kurniawan", "Bambang"}

	for i := 0; i < len(slice); i++ {
		fmt.Println(slice[i])
	}

	for index, name := range slice {
		fmt.Println("index", index, "=", name)
	}

	person := make(map[string]string)
	person["name"] = "MaoMao"
	person["title"] = "Jr. Software Engineer"

	for key, value := range person {
		fmt.Println("key", key, "value", value)
	}

	for _, value := range person {
		fmt.Println("value", value)
	}
}
