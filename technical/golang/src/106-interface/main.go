package main

import "fmt"

type IBot interface {
	getGreeting() string
}

type englishBot struct{}
type chineseBot struct{}

func main() {
	eb := englishBot{}
	sb := chineseBot{}

	printGreeting(eb)
	printGreeting(sb)
}

func (englishBot) getGreeting() string {
	return "Hi there!"
}

func (chineseBot) getGreeting() string {
	return "Ni Hao!"
}

func printGreeting(b IBot) {
	fmt.Println(b.getGreeting())
}
