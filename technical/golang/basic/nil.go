package main

import "fmt"

func NewMap(name string) map[string]string {
	if name == "" {
		return nil
	} else {
		return map[string]string{
			"name": name,
		}
	}
}

func main() {
	MaoMao := NewMap("MaoMao")

	fmt.Println(MaoMao)

	var name bool
	fmt.Println(name)
}
