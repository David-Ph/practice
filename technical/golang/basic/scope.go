package main

import "fmt"

func main() {
	counter := 0
	increment := func() {
		fmt.Println("Incrementing")
		// this function will have access of counter from main scope
		counter++
	}

	increment()
	increment()
	fmt.Println(counter)
}
