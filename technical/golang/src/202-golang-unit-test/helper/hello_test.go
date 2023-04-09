package helper

import (
	"fmt"
	"runtime"
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestMain(m *testing.M) {
	fmt.Println("Before Unit test")

	m.Run()

	fmt.Println("After Unit test")
}

func TestHelloWorld(t *testing.T) {
	if runtime.GOOS == "darwin" {
		t.Skip("Unit test can't run in darwin")
	}

	result := HelloWorld("MaoMao")

	// if result != "Hello, MaoMao" {
	// 	// panic("Result should be 'Hello, MaoMao. Instead, received: " + result)
	// 	// t.Fail()
	// 	t.Error("Result should be 'Hello, MaoMao. Instead, received: " + result)
	// }
	assert.Equal(t, "Hello, MaoMao", result)
	fmt.Println("finished!")
}

func TestSubTest(t *testing.T) {
	t.Run("MaoMao", func(t *testing.T) {
		result := HelloWorld("MaoMao")
		assert.Equal(t, "Hello, MaoMao", result)
	})

	t.Run("Phang", func(t *testing.T) {
		result := HelloWorld("Phang")
		assert.Equal(t, "Hello, Phang", result)
	})
}

func TestTableTest(t *testing.T) {
	// Create a slice of struct
	tests := []struct {
		name     string
		request  string
		expected string
	}{
		{
			name:     "HelloWorld(Eko)",
			request:  "Eko",
			expected: "Hello, Eko",
		},
		{
			name:     "HelloWorld(David)",
			request:  "David",
			expected: "Hello, David",
		},
		{
			name:     "HelloWorld(MaoMao)",
			request:  "MaoMao",
			expected: "Hello, MaoMao",
		},
	}

	for _, test := range tests {
		t.Run(test.name, func(t *testing.T) {
			result := HelloWorld(test.request)
			assert.Equal(t, test.expected, result)
		})
	}
}
