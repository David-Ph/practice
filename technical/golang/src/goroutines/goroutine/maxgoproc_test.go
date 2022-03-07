package goroutine

import (
	"fmt"
	"runtime"
	"testing"
)

func TestMaxGoProc(t *testing.T) {
	totalCpu := runtime.NumCPU()
	fmt.Println(totalCpu)

	// mengubah jumlah thread
	// runtime.GOMAXPROCS(20)
	totalThread := runtime.GOMAXPROCS(-1)
	fmt.Println(totalThread)

	totalGoroutine := runtime.NumGoroutine()
	fmt.Println(totalGoroutine)
}
