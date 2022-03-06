package goroutine

import (
	"fmt"
	"sync"
	"testing"
	"time"
)

// simulating deadlock
type UserBalance struct {
	Mutex   sync.Mutex
	Name    string
	Balance int
}

func (user *UserBalance) Lock() {
	user.Mutex.Lock()
}

func (user *UserBalance) Unlock() {
	user.Mutex.Unlock()
}

func (user *UserBalance) Change(amount int) {
	user.Balance = user.Balance + amount
}

func Transfer(user1 *UserBalance, user2 *UserBalance, amount int) {
	user1.Lock()
	fmt.Println("Locking", user1.Name)
	user1.Change(-amount)

	time.Sleep(1 * time.Second)

	user2.Lock()
	fmt.Println("Locking", user2.Name)
	user2.Change(amount)

	time.Sleep(1 * time.Second)

	user1.Unlock()
	user2.Unlock()
}

func TestDeadLock(t *testing.T) {
	user1 := UserBalance{
		Name:    "Eko",
		Balance: 1000,
	}
	user2 := UserBalance{
		Name:    "MaoMao",
		Balance: 1000,
	}

	// so what is happening here
	// is that because on the first Transfer
	// we're locking user1
	// and then before we get to the next line of code
	// the second transfer locks user2
	// and then because each goroutine is essentially waiting for
	// the others to unlock
	// it will get stuck in deadlock
	go Transfer(&user1, &user2, 1000)
	go Transfer(&user2, &user1, 1000)

	time.Sleep(3 * time.Second)

	fmt.Println("User", user1.Name, "Balance is", user1.Balance)
	fmt.Println("User", user2.Name, "Balance is", user2.Balance)
}

// end of simulating deadlock

func RunAsynchronous(group *sync.WaitGroup, index int) {
	defer group.Done()

	group.Add(1)

	// fmt.Println("Hello", index)
	time.Sleep(1 * time.Second)
}

func TestWaitGroup(t *testing.T) {
	group := &sync.WaitGroup{}

	for i := 0; i < 100; i++ {
		go RunAsynchronous(group, i)
	}

	group.Wait()
	fmt.Println("Complete")
}

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
	fmt.Println("Counter is", counter)
}
