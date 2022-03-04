package goroutine

import (
	"fmt"
	"testing"
	"time"
)

// func TestCreateChannel(t *testing.T) {
// 	channel := make(chan string)

// 	// mock async function
// 	go func() {
// 		time.Sleep(2 * time.Second)
// 		channel <- "Fey Syllenae"
// 	}()

// 	data := <-channel
// 	fmt.Println(data)

// 	close(channel)
// }

// func GiveMeResponse(channel chan string) {
// 	time.Sleep(2 * time.Second)
// 	channel <- "Eko Kurniawa Khannedy"
// }

// func TestChannelAsParameter(t *testing.T) {
// 	channel := make(chan string)

// 	go GiveMeResponse(channel)

// 	data := <-channel
// 	fmt.Println(data)
// 	close(channel)
// }

// hanya memasukkan data
func OnlyIn(channel chan<- string) {
	time.Sleep(2 * time.Second)
	channel <- "Eko Kurniawan Khannedy"
}

// hanya menerima data
func OnlyOut(channel <-chan string) {
	data := <-channel
	fmt.Println(data)
}

func TestInOutChannel(t *testing.T) {
	channel := make(chan string)

	go OnlyIn(channel)

	go OnlyOut(channel)

	time.Sleep(3 * time.Second)
	close(channel)
}
