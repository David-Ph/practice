package test

import (
	"fmt"
	"programmerzamannow/belajar-golang-restful-api/simple"
	"testing"
)

func TestSimpleService(t *testing.T) {
	simpleService := simple.CreateService()
	fmt.Println(simpleService.SimpleRepository)
}
