package goroutine

import (
	"fmt"
	"strconv"
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

// // hanya memasukkan data
// func OnlyIn(channel chan<- string) {
// 	time.Sleep(1 * time.Second)
// 	channel <- "Eko Kurniawan Khannedy"
// }

// // hanya menerima data
// func OnlyOut(channel <-chan string) {
// 	data := <-channel
// 	fmt.Println(data)
// }

// func TestInOutChannel(t *testing.T) {
// 	channel := make(chan string)

// 	go OnlyIn(channel)
// 	go OnlyOut(channel)

// 	time.Sleep(1 * time.Second)
// 	close(channel)
// }

// func TestBufferedChannel(t *testing.T) {
// 	channel := make(chan string, 3)

// 	go func() {
// 		channel <- "Eko"
// 		channel <- "Kurniawan"
// 		channel <- "Khannedy"
// 	}()

// 	go func() {
// 		fmt.Println(<-channel)
// 		fmt.Println(<-channel)
// 		fmt.Println(<-channel)
// 	}()

// 	time.Sleep(2 * time.Second)

// 	fmt.Println("Selesai")

// 	close(channel)
// }

func TestRangeChannel(t *testing.T) {
	channel := make(chan string)

	go func() {
		for i := 0; i < 10; i++ {
			channel <- "Perulangan ke " + strconv.Itoa(i)
		}
		close(channel)
	}()

	for data := range channel {
		fmt.Println(data)
	}

	time.Sleep(2 * time.Second)

	fmt.Println("Done")
}
