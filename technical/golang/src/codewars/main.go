package main

import (
	"fmt"
	"math"
	"strings"
)

// FInd nearest square number
func NearestSq(n int) int {
	floatNumber := float64(n)
	squareRoot := math.Sqrt(floatNumber)
	roundNumber := math.Round(squareRoot)

	return int(roundNumber * roundNumber)
}

// Band name generator
func bandNameGenerator(word string) string {
	if word[0] == word[len(word)-1] {
		return strings.Title(word + word[1:])
	}
	return strings.Title("The " + word)
}

func main() {
	fmt.Println(NearestSq(1))
	// fmt.Println(NearestSq(2))
	// fmt.Println(NearestSq(10))
	// fmt.Println(NearestSq(111))
	// fmt.Println(NearestSq(9999))
	fmt.Println(bandNameGenerator("alaska"))
	fmt.Println(bandNameGenerator("dolphin"))
}
