package main

import "fmt"

func isEven(n int) bool {
	if n%2 == 0 {
		return true
	} else {
		return false
	}
}

func main() {
	numbers := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}

	for _, n := range numbers {
		if isEven(n) {
			fmt.Println(n, "is even")
		} else {
			fmt.Println(n, "is odd")
		}
	}
}
