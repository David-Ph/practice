package context

import (
	"context"
	"fmt"
	"runtime"
	"testing"
	"time"
)

func TestContext(t *testing.T) {
	background := context.Background()
	fmt.Println(background)

	todo := context.TODO()
	fmt.Println(todo)
}

func TestContextWithValue(t *testing.T) {
	contextA := context.Background()

	contextB := context.WithValue(contextA, "b", "B")
	contextC := context.WithValue(contextA, "c", "C")

	contextD := context.WithValue(contextB, "d", "D")
	contextE := context.WithValue(contextB, "e", "E")

	contextF := context.WithValue(contextC, "f", "F")

	fmt.Println(contextF.Value("f")) // dapat
	fmt.Println(contextF.Value("c")) // dapat milik parent
	fmt.Println(contextF.Value("b")) // tidak dapat, beda parent
	fmt.Println(contextA.Value("b")) // tidak bisa mengambil data child
	fmt.Println(contextD.Value("d")) // dapat, milik sendiri
	fmt.Println(contextE.Value("d")) // tidak dapat
}

func CreateCounter() chan int {
	destination := make(chan int)

	go func() {
		defer close(destination)
		counter := 1

		for {
			// this will never end
			// so we will have a goroutine leak
			// basically a goroutine that will never close
			destination <- counter
			counter++
		}
	}()

	return destination
}

func CreateCounterWithCancel(ctx context.Context) chan int {
	destination := make(chan int)
	go func() {
		defer close(destination)
		counter := 1

		for {
			select {
			case <-ctx.Done():
				return
			default:
				destination <- counter
				counter++
			}
		}
	}()

	return destination
}

func TestCreateCounterLeak(t *testing.T) {
	fmt.Println(runtime.NumGoroutine())

	parent := context.Background()
	ctx, cancel := context.WithCancel(parent)

	destination := CreateCounterWithCancel(ctx)
	for n := range destination {
		fmt.Println("Counter", n)
		if n == 10 {
			break
		}
	}
	cancel() // mengirim sinyal cancel / done ke context

	time.Sleep(2 * time.Second)
	fmt.Println(runtime.NumGoroutine())
}

func CreateCounterWithTimeout(ctx context.Context) chan int {
	destination := make(chan int)

	go func() {
		defer close(destination)
		counter := 1

		for {
			select {
			case <-ctx.Done():
				return
			default:
				destination <- counter
				counter++
				time.Sleep(1 * time.Second) // simulate slow process
			}
		}
	}()

	return destination
}

func TestCreateCounterWithTime(t *testing.T) {
	fmt.Println(runtime.NumGoroutine())

	parent := context.Background()
	ctx, cancel := context.WithTimeout(parent, 5*time.Second)
	// so why do we still need to call cancel() if it's automatically done by timeout?
	// because sometimes we can have a process that's faster than the timeout, and we want to just close the channel after it's done and not wait for timeout
	defer cancel()

	destination := CreateCounterWithTimeout(ctx)
	for n := range destination {
		fmt.Println("Counter", n)
	}

	fmt.Println(runtime.NumGoroutine())
}

func TestCreateCounterWithDeadLine(t *testing.T) {
	fmt.Println(runtime.NumGoroutine())
	parent := context.Background()
	ctx, cancel := context.WithDeadline(parent, time.Now().Add(5*time.Second))
	defer cancel()

	destination := CreateCounterWithTimeout(ctx)
	for n := range destination {
		fmt.Println("counter", n)
	}

	fmt.Println(runtime.NumGoroutine())
}
