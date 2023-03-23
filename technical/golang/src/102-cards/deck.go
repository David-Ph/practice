package main

import (
	"fmt"
	"io/ioutil"
	"math/rand"
	"os"
	"strings"
)

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

// create a fucntion to convert deck to string
func (d deck) toString() string {
	return strings.Join([]string(d), ",")
}

func newDeck() deck {
	cards := deck{}

	cardSuits := []string{"Spades", "Diamonds", "Hearts", "Clubs"}
	cardValues := []string{"Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"}

	for _, suit := range cardSuits {
		for _, value := range cardValues {
			cards = append(cards, value+" of "+suit)
		}
	}

	return cards
}

// create a function to save deck to file
func (d deck) saveToFile(filename string) error {
	return ioutil.WriteFile(filename, []byte(d.toString()), 0666)
}

// create a function to create a new deck from file
func newDeckFromFile(filename string) deck {
	// this is a common pattern in go to check for error
	// a function will return 2 values, one of them is the err variable
	// then we'll check if err is null or not
	bs, err := ioutil.ReadFile(filename)

	if err != nil {
		// Option 1: log the error and return a call to new deck
		// Option 2: log the error and quit the program
		// return nil, err
		fmt.Println("Error:", err)
		os.Exit(1)
	}

	// Convert byteslice to slice string
	s := strings.Split(string(bs), ",")

	// Create new deck from string and return it
	return deck(s)
}

// Create a function to shuffle a deck
func (d deck) shuffle() {
	for i := range d {
		newIndex := rand.Intn(len(d) - 1)
		d[i], d[newIndex] = d[newIndex], d[i]
	}
}
