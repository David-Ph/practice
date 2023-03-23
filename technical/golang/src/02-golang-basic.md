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

# Receiver Functions and return multiple values

```
// Create a new type of deck
// which is a slice of string
type deck []string

// create a function with deck as receiver
// this is like creating a method for a class
// so it's like saying any variable of type deck
// now gets access to this pritn() method
func (d deck) print() {
	for i, card := range d {
		fmt.Println(i, card)
	}
}

// create a function that returns multiple values
func deal(d deck, handSize int) (deck, deck) {
	return d[:handSize], d[handSize:]
}
```

# Error Checking

```

// create a function to create a new deck from file
func newDeckFromFile(filename string) deck {
	// this is a common pattern in go to check for error
	// a function will return 2 values, one of them is the err variable
	// then we'll check if err is null or not
	bs, err := ioutil.ReadFile(filename)

	if err != nil {
		return nil, err
	}
	
	// Convert byteslice to slice string
	s := strings.Split(string(bs), ",")

	// Create new deck from string and return it
	return deck(s)
}
```

# Getting a random number 

```
// Create a function to shuffle a deck
func (d deck) shuffle() {
	rand.Seed(time.Now().UnixNano())

	for i := range d {
		newIndex := rand.Intn(len(d) - 1)
		d[i], d[newIndex] = d[newIndex], d[i]
	}
}

```