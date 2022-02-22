package helper

import (
	"testing"

	_ "github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
)

func TestHelloWorld(t *testing.T) {
	result := HelloWorld("Eko")
	// assert.Equal(t, "Hello Eko", result, "Result must be Hello Eko")
	require.Equal(t, "Hello Eko", result, "Result must be Hello Eko")

	// if result != "Hello Eko" {
	// 	// unit test failed
	// 	t.Fatal("TestHelloWorld Failed, Expected: 'Hello Eko', Result: " + result)
	// }

}
