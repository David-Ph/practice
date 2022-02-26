package helper

import (
	"fmt"
	"runtime"
	"testing"

	"github.com/stretchr/testify/assert"
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

func TestHelloWorldTable(t *testing.T) {
	tests := []struct {
		name     string
		request  string
		expected string
	}{
		{
			name:     "HelloWorld(Eko)",
			request:  "Eko",
			expected: "Hello Eko",
		},
		{
			name:     "HelloWorld(MaoMao)",
			request:  "MaoMao",
			expected: "Hello MaoMao",
		},
	}

	for _, test := range tests {
		t.Run(test.name, func(t *testing.T) {
			result := HelloWorld(test.request)
			assert.Equal(t, test.expected, result)
		})
	}
}

func TestSkip(t *testing.T) {
	fmt.Println(runtime.GOOS)
	if runtime.GOOS == "windows" {
		t.Skip("Unit test tidak bisa jalan di windows")
	}

	result := HelloWorld("MaoMao")
	require.Equal(t, "Hello MaoMao", result, "Result must be Hello MaoMao")
}

func BenchmarkHelloWork(b *testing.B) {
	// for i := 0; i < b.N; i++ {
	// 	HelloWorld("Eko")
	// }
	b.Run("Eko", func(b *testing.B) {
		for i := 0; i < b.N; i++ {
			HelloWorld("Eko")
		}
	})
	b.Run("Kurniawan", func(b *testing.B) {
		for i := 0; i < b.N; i++ {
			HelloWorld("Kurniawan")
		}
	})
	b.Run("Say it! Say my name!", func(b *testing.B) {
		for i := 0; i < b.N; i++ {
			HelloWorld("Say it! Say my name!")
		}
	})
}

func BenchmarkHelloWorkTable(b *testing.B) {
	benchmarks := []struct {
		name    string
		request string
	}{
		{
			name:    "HelloWorld(Eko)",
			request: "Eko",
		},
		{
			name:    "HelloWorld(Kurniawan)",
			request: "Kurniawan",
		},
	}

	for _, benchmark := range benchmarks {
		b.Run(benchmark.name, func(b *testing.B) {
			for i := 0; i < b.N; i++ {
				HelloWorld(benchmark.name)
			}
		})
	}
}
