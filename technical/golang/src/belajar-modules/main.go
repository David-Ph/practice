package main

import (
	"belajar-modules/lib"
	"fmt"

	go_say_hello "github.com/ProgrammerZamanNow/go-say-hello"
)

func main() {
	result := lib.ConcatenateString("My", "String")
	fmt.Println(result)
	fmt.Println(go_say_hello.SayHello())
}
