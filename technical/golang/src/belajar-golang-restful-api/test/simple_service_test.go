package test

import (
	"fmt"
	"programmerzamannow/belajar-golang-restful-api/simple"
	"testing"
)

func TestSimpleService(t *testing.T) {
	simpleService, _ := simple.CreateService()
	fmt.Println(simpleService.SimpleRepository)
}
