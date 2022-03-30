package test

import (
	"embed"
	"fmt"
	"io/fs"
	"io/ioutil"
	"testing"
)

//go:embed version.txt
var version string

//go:embed logo.png
var logo []byte

//go:embed docs/first.txt
//go:embed docs/second.txt
//go:embed docs/third.txt
var files embed.FS

//go:embed docs/*.txt
var path embed.FS

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

func TestMultipleFiles(t *testing.T) {
	first, _ := files.ReadFile("docs/first.txt")
	fmt.Println(string(first))

	second, _ := files.ReadFile("docs/second.txt")
	fmt.Println(string(second))

	third, _ := files.ReadFile("docs/third.txt")
	fmt.Println(string(third))
}

func TestPathMatcher(t *testing.T) {
	dir, _ := path.ReadDir("docs")
	for _, entry := range dir {
		if !entry.IsDir() {
			fmt.Println(entry.Name())
			content, _ := path.ReadFile("docs/" + entry.Name())
			fmt.Println("Content: " + string(content))
		}
	}
}
