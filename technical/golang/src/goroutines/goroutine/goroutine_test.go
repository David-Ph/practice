package goroutine

import (
	"fmt"
	"testing"
	"time"
)

func DisplayNumber(number int) {
	fmt.Println("Displaying", number)
}

func RunHelloWorld() {
	fmt.Println("Hello World")
}

func TestCreateGoroutine(t *testing.T) {
	go RunHelloWorld()
	fmt.Println("Ups")

	time.Sleep(1 * time.Second)
}

func TestManyGoroutine(t *testing.T) {
	for i := 0; i < 5; i++ {
		go DisplayNumber(i)
	}
	time.Sleep(1 * time.Second)
}
