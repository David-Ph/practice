package main

import "fmt"

func main() {
	var names [3]string
	names[0] = "Mao"
	names[1] = "Fey"
	names[2] = "Syllenae"
	// names[3] = "Hello" // error

	fmt.Println(names)

	primes := [6]int{2, 3, 5, 7, 11, 13}
	fmt.Println(primes)
	fmt.Println(len(primes))
	fmt.Println(primes[0])

}
