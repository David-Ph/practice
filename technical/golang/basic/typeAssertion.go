package main

import "fmt"

func Random() interface{} {
	return 1
}

func main() {
	var result interface{} = Random()
	switch value := result.(type) {
	case string:
		fmt.Println("Value is string", value)
	case int:
		fmt.Println("Value is int", value)
	default:
		fmt.Println("Unknown")
	}

	// rand := Random()
	// resultString := rand.(string)
	// fmt.Println(resultString)

	// WILL PANIC
	// resultInt := rand.(int)
	// fmt.Println(resultInt)
}
