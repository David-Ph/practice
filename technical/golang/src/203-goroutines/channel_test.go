package go_routines

import (
	"fmt"
	"runtime"
	"strconv"
	"sync"
	"sync/atomic"
	"testing"
	"time"
)

func TestCreateChannel(t *testing.T) {
	channel := make(chan string)

	go func() {
		time.Sleep(2 * time.Second)
		channel <- "MaoMao"
	}()

	data := <-channel
	fmt.Println(data)
	close(channel)
}

func GiveMeResponse(channel chan string) {
	time.Sleep(1 * time.Second)
	channel <- "MaoMao God"
}

func TestChannelAsParameter(t *testing.T) {
	channel := make(chan string)

	go GiveMeResponse(channel)

	fmt.Println(<-channel)
	close(channel)
}

func OnlyIn(channel chan<- string) {
	time.Sleep(1 * time.Second)
	channel <- "MaoMao"
}

func OnlyOut(channel <-chan string) {
	data := <-channel
	fmt.Println(data)
}

func TestInOutChannel(t *testing.T) {
	channel := make(chan string)

	go OnlyIn(channel)
	go OnlyOut(channel)

	time.Sleep(2 * time.Second)
	close(channel)
}

func TestBufferedChannel(t *testing.T) {
	channel := make(chan string, 3)
	defer close(channel)

	go func() {
		channel <- "Phang"
		channel <- "MaoMao"
		channel <- "Miaw"
	}()

	go func() {
		fmt.Println(<-channel)
		fmt.Println(<-channel)
		fmt.Println(<-channel)
	}()

	time.Sleep(2 * time.Second)

	fmt.Println("Selesai")
}

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
}

func TestSelectChannel(t *testing.T) {
	channel1 := make(chan string)
	channel2 := make(chan string)
	defer close(channel1)
	defer close(channel2)

	go GiveMeResponse(channel1)
	go GiveMeResponse(channel2)

	counter := 0

	for {
		select {
		case data := <-channel1:
			fmt.Println("Data dari channel ke 1", data)
			counter++
		case data := <-channel2:
			fmt.Println("Data dari channel ke 2", data)
			counter++
		default:
			fmt.Println("Menunggu data...")
		}

		if counter == 2 {
			break
		}
	}
}

func TestRaceCondition(t *testing.T) {
	var x = 0
	for i := 1; i < 1000; i++ {
		go func() {
			for j := 1; j < 1000; j++ {
				x = x + 1
			}
		}()
	}

	time.Sleep(5 * time.Second)
	fmt.Println("Counter : ", x)
}

func TestSynxMutex(t *testing.T) {
	var x = 0
	var mutex sync.Mutex
	for i := 1; i <= 1000; i++ {
		go func() {
			for j := 1; j <= 1000; j++ {
				mutex.Lock()
				x += 1
				mutex.Unlock()
			}
		}()
	}

	time.Sleep(time.Second * 5)
	fmt.Println("Counter : ", x)
}

// START OF RWMUTES
type BankAccount struct {
	RWMutex sync.RWMutex
	Balance int
}

func (ba *BankAccount) AddBalance(amount int) {
	ba.RWMutex.Lock()
	ba.Balance = ba.Balance + amount
	ba.RWMutex.Unlock()
}

func (ba *BankAccount) GetBalance() int {
	ba.RWMutex.RLock()
	balance := ba.Balance
	ba.RWMutex.RUnlock()
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

// END OF RWMUTES

// Start of DeadLock
type UserBalance struct {
	sync.Mutex
	Name    string
	Balance int
}

func (ub *UserBalance) Lock() {
	ub.Mutex.Lock()
}

func (ub *UserBalance) Unlock() {
	ub.Mutex.Unlock()
}

func (ub *UserBalance) Change(amount int) {
	ub.Balance += amount
}

func Transfer(u1 *UserBalance, u2 *UserBalance, amount int) {
	u1.Lock()
	fmt.Println("Lock", u1.Name)
	u1.Change(-amount)

	time.Sleep(1 * time.Second)

	u2.Lock()
	fmt.Println("Lock", u2.Name)
	u2.Change(amount)

	time.Sleep(1 * time.Second)

	u1.Unlock()
	u2.Unlock()
}

func TestDeadLock(t *testing.T) {
	u1 := UserBalance{
		Name:    "MaoMao",
		Balance: 10000,
	}
	u2 := UserBalance{
		Name:    "Phang",
		Balance: 10000,
	}

	go Transfer(&u1, &u2, 1000)
	go Transfer(&u2, &u1, 1000)

	time.Sleep(5 * time.Second)
}

// End of DeadLock

// Start of Waitgroup
func RunAsynchronous(group *sync.WaitGroup) {
	defer group.Done()

	group.Add(1)
	fmt.Println("Hello")
	time.Sleep(1 * time.Second)
}

func TestWaitGroup(t *testing.T) {
	group := &sync.WaitGroup{}

	for i := 0; i < 100; i++ {
		go RunAsynchronous(group)
	}

	group.Wait()
	fmt.Println("COmpelte")
}

// End of Waitgroup

// Start of Once
var counter = 0

func OnlyOnce() {
	counter++
}

func TestOnce(t *testing.T) {
	var once sync.Once
	var group sync.WaitGroup

	for i := 0; i < 100; i++ {
		go func() {
			group.Add(1)
			once.Do(OnlyOnce)
			group.Done()
		}()
	}

	group.Wait()
	fmt.Println(counter)
}

// End of Once

// Start of Pool
func TestPool(t *testing.T) {
	var pool sync.Pool

	pool.Put("MaoMao")
	pool.Put("Phang")
	pool.Put("OKK")

	for i := 0; i < 10; i++ {
		go func() {
			data := pool.Get()
			fmt.Println(data)
			pool.Put(data)
		}()
	}

	time.Sleep(1 * time.Second)
	fmt.Println("Done!")
}

// End of Pool

// Start of Map
func TestMap(t *testing.T) {
	data := &sync.Map{}
	group := &sync.WaitGroup{}
	var addToMap = func(data *sync.Map, value int, group *sync.WaitGroup) {
		defer group.Done()
		group.Add(1)
		data.Store(value, value)
	}

	for i := 0; i < 100; i++ {
		go addToMap(data, i, group)
	}

	group.Wait()

	data.Range(func(key, value interface{}) bool {
		fmt.Println(key, ":", value)
		return true
	})
}

// End of Map

// Start of cond
var locker = sync.Mutex{}
var cond = sync.NewCond(&locker)
var group = sync.WaitGroup{}

func WaitCondition(value int) {
	defer group.Done()
	group.Add(1)

	cond.L.Lock()
	cond.Wait()
	fmt.Println("Done", value)
	cond.L.Unlock()
}

func TestCond(t *testing.T) {
	for i := 0; i < 10; i++ {
		go WaitCondition(i)
	}

	go func() {
		for i := 0; i < 10; i++ {
			time.Sleep(1 * time.Second)
			cond.Signal() // this sends the signal to the cond.Wait() above to go ahead
		}
	}()

	//go func() {
	//	time.Sleep(1 * time.Second)
	//	cond.Broadcast()
	//}()

	group.Wait()
}

// End of cond

// Start of atomic
func TestAtomic(t *testing.T) {
	var x = 0
	group := sync.WaitGroup{}

	for i := 1; i <= 1000; i++ {
		group.Add(1)
		go func() {
			/**
			Jika terjadi error : panic: sync: WaitGroup is reused before previous Wait has returned
			Itu artinya, goroutine belum selesai menjalankan kode group.Add(1), naun goroutine unit test
			sudah melakukan group.Wait(), group tidak boleh di add ketika sudah di Wait(), hal ini biasanya
			terjadi jika resource hardware kurang cepat ketika menjalankan goroutine diawal
			Jika hal ini terjadi, silahkan pindahkan kode group.Add(1), ke baris 15 sebelum memanggil go func()
			*/
			for j := 1; j <= 100; j++ {
				var convert = int64(x)
				atomic.AddInt64(&convert, 1)
			}
			group.Done()
		}()
	}

	group.Wait()
	fmt.Println("Counter = ", x)
}

// End of atomic

// Start of Timer

func TestTimer(t *testing.T) {
	timer := time.NewTimer(5 * time.Second)
	fmt.Println(time.Now())

	time := <-timer.C
	fmt.Println(time)
}

func TestAfter(t *testing.T) {
	channel := time.After(5 * time.Second)
	fmt.Println(time.Now())

	time := <-channel
	fmt.Println(time)
}

func TestAfterFunc(t *testing.T) {
	group := sync.WaitGroup{}
	group.Add(1)

	time.AfterFunc(5*time.Second, func() {
		fmt.Println(time.Now())
		group.Done()
	})
	fmt.Println(time.Now())

	group.Wait()
}

// End of Timer

// Start of ticker

func TestTicker(t *testing.T) {
	ticker := time.NewTicker(1 * time.Second)

	go func() {
		time.Sleep(5 * time.Second)
		ticker.Stop()
	}()

	for time := range ticker.C {
		fmt.Println(time)
	}
}

func TestTick(t *testing.T) {
	channel := time.Tick(1 * time.Second)

	for time := range channel {
		fmt.Println(time)
	}
}

// End of ticker

// Start of gomaxprocs

func TestGetGomaxprocs(t *testing.T) {
	group := sync.WaitGroup{}
	for i := 0; i < 100; i++ {
		group.Add(1)
		go func() {
			time.Sleep(3 * time.Second)
			group.Done()
		}()
	}

	totalCpu := runtime.NumCPU()
	fmt.Println("Total CPU", totalCpu)

	totalThread := runtime.GOMAXPROCS(-1)
	fmt.Println("Total Thread", totalThread)

	totalGoroutine := runtime.NumGoroutine()
	fmt.Println("Total Goroutine", totalGoroutine)

	group.Wait()
}

func TestChangeThreadNumber(t *testing.T) {
	group := sync.WaitGroup{}
	for i := 0; i < 100; i++ {
		group.Add(1)
		go func() {
			time.Sleep(3 * time.Second)
			group.Done()
		}()
	}

	totalCpu := runtime.NumCPU()
	fmt.Println("Total CPU", totalCpu)

	runtime.GOMAXPROCS(20)
	totalThread := runtime.GOMAXPROCS(-1)
	fmt.Println("Total Thread", totalThread)

	totalGoroutine := runtime.NumGoroutine()
	fmt.Println("Total Goroutine", totalGoroutine)

	group.Wait()
}

// End of gomaxprocs
