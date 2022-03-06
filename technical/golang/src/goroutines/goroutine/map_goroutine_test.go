package goroutine

import (
	"fmt"
	"sync"
	"testing"
	_ "time"
)

func addToMap(data *sync.Map, value int, group *sync.WaitGroup) {
	// defer group.Done()

	group.Add(1)
	data.Store(value, value)
	group.Done()
}

func TestGoroutineMap(t *testing.T) {
	data := &sync.Map{}
	group := &sync.WaitGroup{}

	for i := 0; i < 100; i++ {
		go addToMap(data, i, group)
	}

	group.Wait()
	// time.Sleep(3 * time.Second)

	data.Range(func(key, value interface{}) bool {
		fmt.Println(key, ":", value)
		return true
	})
}
