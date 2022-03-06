package goroutine

import (
	"fmt"
	"sync"
	"testing"
	"time"
)

var locker = sync.Mutex{}        // buat locker baru
var cond = sync.NewCond(&locker) // buat cond baru
var group = sync.WaitGroup{}

func WaitCondition(value int) {
	defer group.Done()
	group.Add(1)

	cond.L.Lock()
	cond.Wait()
	// so this is basically like a listener
	// this wait() will block any code below
	// until it gets a signal

	fmt.Println("Done", value)

	cond.L.Unlock()
}

func TestWaitCondition(t *testing.T) {
	for i := 0; i < 10; i++ {
		go WaitCondition(i)
	}

	go func() {
		for i := 0; i < 10; i++ {
			time.Sleep(1 * time.Second)
			cond.Signal() // call the signal to unblock one of the wait()
			// cond.Broadcast() // call broadcast to unblock all of the wait()
		}
	}()

	group.Wait()
}
