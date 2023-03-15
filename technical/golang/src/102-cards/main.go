package main

import "fmt"

// ? Function
func newCard() string {
	return "Five of Diamonds"
}

func main() {
	// ? Variable Declarations
	// var card string = "Ace of Spades"
	card := "Ace of Spades"
	card = "Five of Diamonds"
	fmt.Println(card)

	// ? Function
	card2 := newCard()
	fmt.Println(card2)

	getState()
}
