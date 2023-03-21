package main

import (
	"fmt"
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
