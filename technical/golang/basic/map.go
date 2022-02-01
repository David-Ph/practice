package main

import "fmt"

func main() {
	person := map[string]string{
		"name": "MaoMao",
		"age":  "24",
	}

	fmt.Println(person)
	fmt.Println(person["name"])
	fmt.Println(person["age"])

	book := make(map[string]string)
	book["title"] = "New Book"
	book["author"] = "New Author"
	book["wrong"] = "ups"

	delete(book, "wrong")

	fmt.Println(book)
}
