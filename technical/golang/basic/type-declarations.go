package main

import "fmt"

func main() {
	type NoKTP string
	type Married bool

	var NoKTPEko NoKTP = "218126857265"
	var isMarried Married = true

	fmt.Println(NoKTPEko)
	fmt.Println(isMarried)

}
