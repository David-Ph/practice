package main

import (
	"errors"
	"fmt"
)

func Pembagian(nilai int, pembagi int) (int, error) {
	if pembagi == 0 {
		return 0, errors.New("Pembagian dengan NOL tidak diperbolehkan")
	} else {
		return nilai / pembagi, nil
	}
}

func main() {
	hasil, errorHasil := Pembagian(10, 0)
	fmt.Println(hasil)
	fmt.Println(errorHasil)

	var contohError error = errors.New("Contoh Error")
	fmt.Println(contohError.Error())
}
