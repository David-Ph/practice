package goroutine

import (
	"fmt"
	"sync"
	"sync/atomic"
	"testing"
)

func TestAtomic(t *testing.T) {
	var group sync.WaitGroup
	var counter int64 = 0

	for i := 0; i < 100; i++ {
		group.Add(1)
		go func() {
			for i := 0; i < 100; i++ {
				atomic.AddInt64(&counter, 1)
			}
			group.Done()
		}()
	}

	group.Wait()
	fmt.Println("Counter:", counter)
}
