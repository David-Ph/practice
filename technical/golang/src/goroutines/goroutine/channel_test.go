package goroutine

import (
	"fmt"
	"testing"
	"time"
)

func TestCreateChannel(t *testing.T) {
	channel := make(chan string)

	// mock async function
	go func() {
		time.Sleep(2 * time.Second)
		channel <- "Fey Syllenae"
	}()

	data := <-channel
	fmt.Println(data)

	close(channel)
}
