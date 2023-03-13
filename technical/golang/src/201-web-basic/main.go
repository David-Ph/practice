package main

import "fmt"

// creating a type, kind of like a template for variable/object
// this is like Class in javascript

type Person struct {
	fname string // first char lowercase means it's NOT gonna be visible outside of this package
	lname string
	Age   int // first char uppercase means it's gonna be visible outside of this package
}

// this is a function that we attach to a type
// note the () next to func but before the function name
// this is like adding a method to a class in JS
func (p Person) speak() {
	fmt.Println(p.fname, `says, "Good Morning, James."`)
}

type SecretAgent struct {
	Person
	licenseToKill bool
}

func (sa SecretAgent) speak() {
	fmt.Println(sa.fname, `says, "Shaken a bit..."`)
}

// interface is like a template for struct or other variable
type human interface {
	speak()
}

func saySomething(h human) {
	h.speak()
}

func main() {
	// Variable declaration
	x := 7
	var y = 10
	fmt.Println(x, y)
	fmt.Println("Hello, the first number is", x, ", and the second number is", y)

	// Declaring a slice of int
	// this is like an array
	xi := []int{2, 4, 7, 9, 42}
	fmt.Println(xi)

	// declaring a map with string key which contains int value
	// this is like declaring an object in JS
	m := map[string]int{
		"Todd": 45,
		"Job":  42,
	}
	fmt.Println(m)

	p1 := Person{
		"John",
		"Doe",
		16,
	}

	fmt.Println(p1)
	p1.speak()

	s1 := SecretAgent{
		p1,
		true,
	}
	s1.speak()
	s1.Person.speak()

	saySomething(s1)
}
