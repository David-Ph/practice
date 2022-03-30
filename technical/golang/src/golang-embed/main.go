package main

import (
	"embed"
	"fmt"
	"io/fs"
	"io/ioutil"
)

//go:embed version.txt
var version string

//go:embed logo.png
var logo []byte

//go:embed docs/*
var path embed.FS

func main() {
	fmt.Println(version)

	err := ioutil.WriteFile("logo_next.png", logo, fs.ModePerm)
	if err != nil {
		panic(err)
	}

	dir, _ := path.ReadDir("docs")
	for _, entry := range dir {
		if !entry.IsDir() {
			fmt.Println(entry.Name())
			content, _ := path.ReadFile("docs/" + entry.Name())
			fmt.Println("Content: " + string(content))
		}
	}
}
