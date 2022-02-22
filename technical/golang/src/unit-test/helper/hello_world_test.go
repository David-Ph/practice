package helper

import "testing"

func TestHelloWorld(t *testing.T) {
	result := HelloWorld("Eko")
	if result != "Hello Eko" {
		// unit test failed
		t.Fatal("TestHelloWorld Failed, Expected: 'Hello Eko', Result: " + result)
	}
}
