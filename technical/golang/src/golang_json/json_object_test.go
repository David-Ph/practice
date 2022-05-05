package golang_json

import (
	"encoding/json"
	"fmt"
	"testing"
)

type Customer struct {
	FirstName  string
	MiddleName string
	LastName   string
	Age        int
	Married    bool
}

func TestJSONObject(t *testing.T) {
	customer := Customer{
		FirstName:  "Fey",
		MiddleName: "Minami",
		LastName:   "Syllenae",
		Age:        25,
		Married:    false,
	}

	bytes, _ := json.Marshal(customer)

	fmt.Println(string(bytes))
}

func TestDecodeJSON(t *testing.T) {
	customer := Customer{
		FirstName:  "Fey",
		MiddleName: "Minami",
		LastName:   "Syllenae",
		Age:        25,
		Married:    false,
	}

	jsonString, _ := json.Marshal(customer)

	jsonBytes := []byte(jsonString)

	myCustomer := &Customer{}

	json.Unmarshal(jsonBytes, myCustomer)
	fmt.Println(myCustomer)
	fmt.Println(myCustomer.FirstName)
	fmt.Println(myCustomer.LastName)
	fmt.Println(myCustomer.Married)
}
