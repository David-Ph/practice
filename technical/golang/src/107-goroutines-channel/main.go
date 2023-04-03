package main

import (
	"fmt"
	"net/http"
	"time"
)

func checkLink(link string, c chan string) {
	_, err := http.Get(link)

	if err != nil {
		fmt.Println(link, "might be down")
		// c <- "it is down, I think"
		c <- link
		return
	}
	fmt.Println(link, "is up")
	// c <- "Yep, it is up"
	c <- link
}

func main() {
	links := []string{
		"http://google.com",
		"http://facebook.com",
		"http://stackoverflow.com",
		"http://golang.org",
		"http://amazon.com",
	}

	// create new channel
	c := make(chan string)

	for _, link := range links {
		// pass the channel to checkLink
		go checkLink(link, c)
	}

	// make a for loop to prepare the channel to receive data
	// what is happening here, is the channel is still waiting for the first data to come through before going on to the next loop, so remember that this part is a blocking code
	// for i := 0; i < len(links); i++ {
	// this is a an infinite loop
	// what is happening here is we loop through c
	// each time c receives a data, it will put the data into l
	// which in turn will be passed to checkLink
	for l := range c {
		// fmt.Println(<-c)
		// go checkLink(l, c)
		// this is go function literal
		go func(link string) {
			time.Sleep(time.Second * 5)
			checkLink(link, c)
		}(l)
	}
}
