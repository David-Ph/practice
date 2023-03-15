package main

import (
	"fmt"
	"math"
)

func NearestSq(n int) int {
	floatNumber := float64(n)
	squareRoot := math.Sqrt(floatNumber)
	roundNumber := math.Round(squareRoot)

	return int(roundNumber * roundNumber)
}

func main() {
	fmt.Println(NearestSq(1))
	fmt.Println(NearestSq(2))
	fmt.Println(NearestSq(10))
	fmt.Println(NearestSq(111))
	fmt.Println(NearestSq(9999))
}
