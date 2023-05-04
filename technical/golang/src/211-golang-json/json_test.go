package golangjson

import (
	"encoding/json"
	"fmt"
	"testing"
)

func logJson(d interface{}) {
	bytes, err := json.Marshal(d)
	if err != nil {
		panic(err)
	}
	fmt.Println(string(bytes))
}

func TestMarshal(t *testing.T) {
	logJson("MaoMao")
	logJson(1)
	logJson(true)
	logJson([]string{"MaoMao", "Phang", "Kyz"})
	logJson(map[string]interface{}{
		"name":    "MaoMao",
		"hobbies": []string{"Things", "Stuff", "Random!"},
	})
}
