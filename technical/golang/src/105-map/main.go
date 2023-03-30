package main

import "fmt"

func main() {
	colors := map[string]string{
		"white": "#fff",
		"black": "#000",
	}

	// colors["red"] = "#ff000"
	// delete(colors, "red")
	// black := "black"

	fmt.Println(colors)
	fmt.Println(colors["white"])
	// fmt.Println(colors[black])
	printMap(colors)
}

func printMap(c map[string]string) {
	for color, hex := range c {
		fmt.Println("Hex code for", color, "is", hex)
	}
}
