// ? Variable Declarations

# Variable declaration

```
// var card string = "Ace of Spades"
card := "Ace of Spades"
card = "Five of Diamonds"
fmt.Println(card)
```

# Function

```
func newCard() string {
  return "Five of Diamonds"
}
```

```
card2 := newCard()
fmt.Println(card2)
```

# Array and slices

```
  // Array is a fixed length list of things
	// Slice is an array that can grow or shrink
	// Every element in a slice must be of same type
	cards := []string{"Ace of Spades", newCard()}

	// appending slices
	// the append function doesn't modify the original slice
	// it instead returns a whole new slice
	cards = append(cards, "Six of Spades")

	// For loop
	for i, card := range cards {
		// i is the index
		// card is the element itself
		fmt.Println(i, card)
	}
	fmt.Println(cards)
```

## OO Aproach vs Go Aproach

With the OO aproach, we may create a Deck class
that deck class will contain some sort of blueprint like what properties or what methods does a deck will have.
For example maybe an instance of deck will have a property called cards, which is a slice of cards, and then methods such as print(), shuffle(), saveToFile()

In Go, it will be different
First we'll have to create a new type of deck

```
type deck []string
```

then we'll create new functions with deck as receiver. It's basically like a composing pattern, we're attaching a method/function to the type

```
func (deck) shuffleCards() {
  // do things
}
```
