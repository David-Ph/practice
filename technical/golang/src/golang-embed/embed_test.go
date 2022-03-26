package golang_embed

import (
	_ "embed"
	"fmt"
	"io/fs"
	"io/ioutil"
	"testing"
)

//go:embed version.txt
var version string

//go:embed logo.png
var logo []byte

func TestString(t *testing.T) {
	fmt.Println("Printing version")
	fmt.Println(version)
}

func TestPng(t *testing.T) {
	err := ioutil.WriteFile("logo_next.png", logo, fs.ModePerm)
	if err != nil {
		panic(err)
	}
}
