package main

// ? Function
// func newCard() string {
// 	return "Five of Diamonds"
// }

func main() {
	// ? Variable Declarations
	// var card string = "Ace of Spades"
	// card := "Ace of Spades"
	// card = "Five of Diamonds"
	// fmt.Println(card)

	// ? Function
	// card2 := newCard()
	// fmt.Println(card2)

	// getState()

	// ? Array and slices
	// Array is a fixed length list of things
	// Slice is an array that can grow or shrink
	// Every element in a slice must be of same type
	// cards := deck{"Ace of Spades", newCard()}

	// appending slices
	// the append function doesn't modify the original slice
	// it instead returns a whole new slice
	// cards = append(cards, "Six of Spades")

	// For loop
	// for i, card := range cards {
	// 	// i is the index
	// 	// card is the element itself
	// 	fmt.Println(i, card)
	// }
	// fmt.Println(cards)

	// calling deck method
	// cards.print()

	cards := newDeck()

	cards.print()
}
