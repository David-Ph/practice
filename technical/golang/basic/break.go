package main

import "fmt"

func main() {
	for i := 0; i < 10; i++ {
		if i == 8 {
			continue
		}
		fmt.Println(i)
	}

	fmt.Println("---------------------")

	for i := 0; i < 10; i++ {
		if i == 8 {
			break
		}
		fmt.Println(i)
	}
}
