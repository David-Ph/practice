package main

import "fmt"

func factorial(n int, total int) int {
	if n == 1 {
		return total
	}

	total *= n

	return factorial(n-1, total)
}

func main() {
	fmt.Println(factorial(5, 1))
}
