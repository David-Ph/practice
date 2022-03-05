package goroutine

import (
	"fmt"
	"sync"
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

func GiveMeResponse(channel chan string) {
	time.Sleep(2 * time.Second)
	channel <- "Eko Kurniawa Khannedy"
}

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

// func TestRangeChannel(t *testing.T) {
// 	channel := make(chan string)

// 	go func() {
// 		for i := 0; i < 10; i++ {
// 			channel <- "Perulangan ke " + strconv.Itoa(i)
// 		}
// 		close(channel)
// 	}()

// 	for data := range channel {
// 		fmt.Println(data)
// 	}

// 	time.Sleep(2 * time.Second)

// 	fmt.Println("Done")
// }

// func TestSelectChannel(t *testing.T) {
// 	channel1 := make(chan string)
// 	channel2 := make(chan string)

// 	go GiveMeResponse(channel1)
// 	go GiveMeResponse(channel2)

// 	counter := 0

// 	for {
// 		select {
// 		case data := <-channel1:
// 			fmt.Println("Data dari channel 1", data)
// 			counter++
// 		case data := <-channel2:
// 			fmt.Println("Data dari channel 2", data)
// 			counter++
// 		default:
// 			fmt.Println("Menunggu data...")
// 		}

// 		if counter == 2 {
// 			break
// 		}
// 	}

// 	close(channel1)
// 	close(channel2)
// }

// func TestRaceCondition(t *testing.T) {
// 	var x = 0
// 	for i := 0; i <= 1000; i++ {
// 		go func() {
// 			for j := 1; j <= 100; j++ {
// 				x += 1
// 			}
// 		}()
// 	}

// 	time.Sleep(5 * time.Second)

// 	fmt.Println("Counter :", x)
// }

// func TestSynxMutex(t *testing.T) {
// 	var x = 0
// 	var mutex sync.Mutex

// 	for i := 1; i <= 1000; i++ {
// 		go func() {
// 			for j := 1; j <= 100; j++ {
// 				mutex.Lock()
// 				x += 1
// 				mutex.Unlock()
// 			}
// 		}()
// 	}

// 	time.Sleep(5 * time.Second)

// 	fmt.Println("Counter :", x)
// }

type BankAccount struct {
	RWMUtex sync.RWMutex
	Balance int
}

func (account *BankAccount) AddBalance(amount int) {
	account.RWMUtex.Lock()
	account.Balance += amount
	account.RWMUtex.Unlock()
}

func (account *BankAccount) GetBalance() int {
	account.RWMUtex.RLock()
	balance := account.Balance
	account.RWMUtex.RUnlock()
	return balance
}

func TestReadWriteMutex(t *testing.T) {
	account := BankAccount{}

	for i := 0; i < 100; i++ {
		go func() {
			for j := 0; j < 100; j++ {
				account.AddBalance(1)
				fmt.Println(account.GetBalance())
			}
		}()
	}

	time.Sleep(5 * time.Second)
	fmt.Println("FInal balance: ", account.GetBalance())
}
