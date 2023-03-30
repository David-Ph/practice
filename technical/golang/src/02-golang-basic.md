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

# Struct and interface

What's the difference between struct and interface?

```

type Cat struct{}

func (c Cat) Say() string { return "meow" }

type Dog struct{}

func (d Dog) Say() string { return "woof" }

func main() {
    c := Cat{}
    fmt.Println("Cat says:", c.Say())
    d := Dog{}
    fmt.Println("Dog says:", d.Say())
}

We can already see some repetition in the code above: when making both Cat and Dog say something. Can we handle both as the same kind of entity, as animal? Not really. Sure we could handle both as interface{}, but if we do so, we can't call their Say() method because a value of type interface{} does not define any methods.

There is some similarity in both of the above types: both have a method Say() with the same signature (parameters and result types). We can capture this with an interface:

type Sayer interface {
    Say() string
}

The interface contains only the signatures of the methods, but not their implementation.

Note that in Go a type implicitly implements an interface if its method set is a superset of the interface. There is no declaration of the intent. What does this mean? Our previous Cat and Dog types already implement this Sayer interface even though this interface definition didn't even exist when we wrote them earlier, and we didn't touch them to mark them or something. They just do.

Interfaces specify behavior. A type that implements an interface means that type has all the methods the interface "prescribes".

Since both implement Sayer, we can handle both as a value of Sayer, they have this in common. See how we can handle both in unity:

animals := []Sayer{c, d}
for _, a := range animals {
    fmt.Println(reflect.TypeOf(a).Name(), "says:", a.Say())
}

(That reflect part is only to get the type name, don't make much of it as of now.)

The important part is that we could handle both Cat and Dog as the same kind (an interface type), and work with them / use them. If you were quickly on to create additional types with a Say() method, they could line up beside Cat and Dog:

type Horse struct{}

func (h Horse) Say() string { return "neigh" }

animals = append(animals, Horse{})
for _, a := range animals {
    fmt.Println(reflect.TypeOf(a).Name(), "says:", a.Say())
}

Let's say you want to write other code that works with these types. A helper function:

func MakeCatTalk(c Cat) {
    fmt.Println("Cat says:", c.Say())
}

Yes, the above function works with Cat and with nothing else. If you'd want something similar, you'd have to write it for each type. Needless to say how bad this is.

Yes, you could write it to take an argument of interface{}, and use type assertion or type switches, which would reduce the number of helper functions, but still looks really ugly.

The solution? Yes, interfaces. Simply declare the function to take a value of an interface type which defines the behavior you want to do with it, and that's all:

func MakeTalk(s Sayer) {
    fmt.Println(reflect.TypeOf(s).Name(), "says:", s.Say())
}

You can call this function with a value of Cat, Dog, Horse or any other type not known until now, that has a Say() method. Cool.
```

# Struct

```
type person struct {
	firstName string
	lastName  string
}

alex := person{firstName: "Alex", lastName: "Anderson"}
```

# Pointers

you can turn value into address with &pointer
you can turn address into value with \*pointer

```
func (p *person) updateName(newFirstName string) { // *person means it's of type address of person
	(*p).firstName = newFirstName // *p means get me the value that is stored in the memory address of *p
}

davidPointer := &david // get me the memory address of the variable &david and store it in davidPointer
```

There is also a pointer shortcut. You can just remove the &part and go will automatically infer it as pointer if the receiver is using \*pointer

# Gotcha with pointers

We can't update a variable through a function directly because when we pass an argument to a function, we're passing only the value. So even if we change the value from inside the function, the original variable would still have the original value.
That's why in order to change it, we need to pass the pointer.
But that doesn't apply for all types of variables.

There is a mutable and immutable variables. In javascript, only objects and arrays are mutable. Primitive values like string, numbers, boolean, etc are immutable.

primitive types data types are value types and are immutable, so in order to change them you need to pass by pointer. In javascript these includes string, numbers, etc. In Go this includes struct, int, float, string, bool, etc.

non primitive data types are reference types and are not immutable, so in order to change them you don't need to pass by pointer. In javascript these are just objects and arrays. In Go this includes slices, maps, channels, pointers, and functions.

# When we create a slice, Go will automatically create which two data structures?

an array and a structure that records the lenght of the slice, the capacity of the slice, and the reference/memory addres to the array.

# Map

Map in go is similar to Object in Javascript. The Keys of the map has to be of the same type, and the value has to be of the same type as well.

```
func main() {
	colors := map[string]string{
		"white": "#fff",
		"black": "#000",
	}

	colors["red"] = "#ff000"
	black := "black"

	delete(colors, "red")

	fmt.Println(colors)
	fmt.Println(colors["white"])
	fmt.Println(colors[black])
}
```

# Iterating over maps

```
func printMap(c map[string]string) {
	for color, hex := range c {
		fmt.Println("Hex code for", color, "is", hex)
	}
}
```

# Maps vs Structs
Maps:
	- All keys must be same type
	- use to represent a collection of related properties
	- all values must be same type
	- don't need to know all the keys during compile time
	- keys are indexed - we can iterate over them
	- reference type
Struct:
	- Values can be of different type
	- you need to know all the different types at compile time
	- keys don't support indexing
	- use to represent a "thing" with a lot of different properties
	- value type

