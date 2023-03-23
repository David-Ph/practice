package main

import "testing"

func TestIsEven(t *testing.T) {
	evenNumber := 2
	oddNumber := 3

	if !isEven(evenNumber) {
		t.Errorf("Expected true. Received: false")
	}

	if isEven(oddNumber) {
		t.Errorf("Expected true. Received: false")
	}
}
