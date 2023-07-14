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

// Break Chocolate
func BreakChocolate(n, m int) int {
	result := (n * m) - 1

	if result < 0 {
		return 0
	}

	return result
}

func MinMax(arr []int) [2]int {
	min := arr[0]
	max := arr[0]

	for _, v := range arr {
		if v <= min {
			min = v
		}

		if v >= max {
			max = v
		}
	}

	return [2]int{min, max}
}

func main() {
	// fmt.Println(NearestSq(1))
	// fmt.Println(NearestSq(2))
	// fmt.Println(NearestSq(10))
	// fmt.Println(NearestSq(111))
	// fmt.Println(NearestSq(9999))
	// fmt.Println(bandNameGenerator("alaska"))
	// fmt.Println(bandNameGenerator("dolphin"))
	// fmt.Println(BreakChocolate(5, 5)) // 24
	// fmt.Println(BreakChocolate(2, 1)) // 1
	// fmt.Println(BreakChocolate(1, 1)) // 0
	fmt.Println(MinMax([]int{1, 2, 3, 4, 5}))
	fmt.Println(MinMax([]int{5, 234423}))
}
