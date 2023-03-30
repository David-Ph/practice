package main

import "fmt"

type person struct {
	firstName   string
	lastName    string
	contactInfo // this is equivalent to contactInfo contactInfo
}

func (p person) print() {
	fmt.Printf("%+v", p)
}

func (p *person) updateName(newFirstName string) { // *person means it's of type address of person
	// (*p).firstName = newFirstName // *p means get me the value that is stored in the memory address of *p
	p.firstName = newFirstName
}

type contactInfo struct {
	email   string
	zipCode int
}

func main() {
	// alex := person{firstName: "Alex", lastName: "Anderson"}
	// fmt.Println(alex)
	// fmt.Printf("%+v", alex)
	david := person{
		firstName: "David",
		lastName:  "Phang",
		contactInfo: contactInfo{
			email:   "phang@gmail.com",
			zipCode: 19400,
		},
	}
	// fmt.Println(david)
	// davidPointer := &david // get me the memory address of the variable &david and store it in davidPointer
	// davidPointer.updateName("Phang")
	david.updateName("MaoMao")
	david.print()

	mySlice := []string{
		"Hi", "There", "How", "Are", "You",
	}

	updateSlice(mySlice)
	fmt.Println(mySlice)
}

func updateSlice(s []string) {
	s[0] = "Bye"
}
