package main

import (
	"fmt"
	"math"
	"strconv"
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

func Accum(s string) string {
	res := ""

	for i, v := range s {
		str := strings.ToLower(strings.Repeat(string(v), i+1))
		res += strings.Title(str)

		if i != len(s)-1 {
			res += "-"
		}
	}

	return res
}

func sumArray(arr []int) int {
	res := 0
	for i := 0; i < len(arr); i++ {
		res += arr[i]
	}
	return res
}

func FindEvenIndex(arr []int) int {
	result := -1

	for i := range arr {
		leftArr := arr[:i]
		rightArr := arr[i:]

		if len(rightArr) > 0 {
			rightArr = rightArr[1:]
		}
		// if len(leftArr) > 0 {
		// 	leftArr = leftArr[:len(leftArr)-1]
		// }

		leftSum := sumArray(leftArr)
		rightSum := sumArray(rightArr)
		if leftSum == rightSum {
			result = i
			break
		}
	}

	return result
}

func BouncingBall(h, bounce, window float64) int {
	if h <= 0 ||
		(bounce >= 1 || bounce <= 0) ||
		window >= h {
		return -1
	}

	bounces := 0

	for h > window {
		bounces += 1
		h = h * bounce

		if h > window {
			bounces += 1
		}
	}

	return bounces
}

func evenOrOdd(str string) string {
	var oddNumbers []int
	var evenNumbers []int

	for i := 0; i < len(str); i++ {
		res, _ := strconv.Atoi(string(str[i]))
		if res%2 == 0 {
			evenNumbers = append(evenNumbers, res)
		} else {
			oddNumbers = append(oddNumbers, res)
		}
	}

	oddSum := 0
	evenSum := 0

	for _, v := range oddNumbers {
		oddSum += v
	}

	for _, v := range evenNumbers {
		evenSum += v
	}

	if oddSum == evenSum {
		return "Odd is same as Even"
	} else if oddSum > evenSum {
		return "Odd is greater than Even"
	} else {
		return "Even is greater than Odd"
	}
}

func repeatSingle(arr []int) int {
	// find unique numbers
	seen := make(map[int]bool)

	for _, number := range arr {
		if !seen[number] {
			seen[number] = true
		} else {
			delete(seen, number)
		}
	}

	uniqueSlice := make([]int, 0, len(seen))

	for keys := range seen {
		uniqueSlice = append(uniqueSlice, keys)
	}

	result := 0

	for _, v := range uniqueSlice {
		result += v
	}

	return result
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
	// fmt.Println(MinMax([]int{1, 2, 3, 4, 5}))
	// fmt.Println(MinMax([]int{5, 234423}))
	// fmt.Println(Accum("abcd"))
	// fmt.Println(Accum("RqaEzty"))
	// fmt.Println(Accum("cwAt"))
	// fmt.Println(FindEvenIndex([]int{1, 2, 3, 4, 3, 2, 1}))         // 3
	// fmt.Println(FindEvenIndex([]int{1, 100, 50, -51, 1, 1}))       // 1
	// fmt.Println(FindEvenIndex([]int{1, 2, 3, 4, 5, 6}))            // -1
	// fmt.Println(FindEvenIndex([]int{20, 10, 30, 10, 10, 15, 35}))  // 3
	// fmt.Println(FindEvenIndex([]int{20, 10, -80, 10, 10, 15, 35})) // 0

	// arr := []int{1, 2, 3, 4, 5}
	// fmt.Println(arr[:1])

	// fmt.Println(BouncingBall(3, 0.66, 1.5)) // 3
	// fmt.Println(BouncingBall(40, 0.4, 10))  // 3
	// fmt.Println(BouncingBall(10, 0.6, 10))  // -1
	// fmt.Println(BouncingBall(40, 1, 10))    // -1
	// fmt.Println(BouncingBall(5, -1, 1.5))   // -1

	// fmt.Println(evenOrOdd("112")) // same
	// fmt.Println(evenOrOdd("123")) // odd > even
	// fmt.Println(evenOrOdd("122")) // even > odd

	fmt.Println(repeatSingle([]int{4, 5, 7, 5, 4, 8})) // 15
	// fmt.Println(repeatSingle([]int{9, 10, 19, 13, 19, 13}))      // 19
	// fmt.Println(repeatSingle([]int{16, 0, 11, 4, 8, 16, 0, 11})) // 15
}
