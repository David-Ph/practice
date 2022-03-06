package goroutine

import (
	"fmt"
	"sync"
	"testing"
	"time"
)

func TestPool(t *testing.T) {
	pool := sync.Pool{
		New: func() interface{} {
			return "New" // data otomatis / data default
		},
	}

	pool.Put("Eko")
	pool.Put("Kurniawan")
	pool.Put("Khannedy")

	for i := 0; i < 10; i++ {
		go func() {
			data := pool.Get()          // ambil data di dalam pool
			fmt.Println(data)           // lakukan seusatu dengan data
			time.Sleep(1 * time.Second) // try to take all the data
			pool.Put(data)              // kembalikan data ke dalam pool
		}()
	}

	time.Sleep(11 * time.Second)
	fmt.Println("Selesai")
}
