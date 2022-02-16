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

	if errorHasil == nil {
		fmt.Println(hasil)
	} else {
		fmt.Println(errorHasil.Error())
	}

	var contohError error = errors.New("Contoh Error")
	fmt.Println(contohError.Error())
}
