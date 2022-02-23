package helper

import (
	"fmt"
	"runtime"
	"testing"

	_ "github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
)

func TestMain(m *testing.M) {
	fmt.Println("Sebelum unit test")

	m.Run() // Eksekusi semua unit test

	fmt.Println("Setelah unit test")
}

func TestSubTest(t *testing.T) {
	t.Run("Eko", func(t *testing.T) {
		result := HelloWorld("Eko")
		require.Equal(t, "Hello Eko", result)
	})
	t.Run("Kurniawan", func(t *testing.T) {
		result := HelloWorld("Kurniawan")
		require.Equal(t, "Hello Kurniawan", result)
	})
}

func TestHelloWorld(t *testing.T) {
	result := HelloWorld("Eko")
	// assert.Equal(t, "Hello Eko", result, "Result must be Hello Eko")
	require.Equal(t, "Hello Eko", result, "Result must be Hello Eko")

	// if result != "Hello Eko" {
	// 	// unit test failed
	// 	t.Fatal("TestHelloWorld Failed, Expected: 'Hello Eko', Result: " + result)
	// }
}

func TestSkip(t *testing.T) {
	fmt.Println(runtime.GOOS)
	if runtime.GOOS == "windows" {
		t.Skip("Unit test tidak bisa jalan di windows")
	}

	result := HelloWorld("MaoMao")
	require.Equal(t, "Hello MaoMao", result, "Result must be Hello MaoMao")
}
