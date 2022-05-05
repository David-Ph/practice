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
	Hobbies    []string
	Addresses  []Address
}

type Address struct {
	Street     string
	Country    string
	PostalCode string
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

func TestJSONArray(t *testing.T) {
	customer := Customer{
		FirstName:  "Fey",
		MiddleName: "Minami",
		LastName:   "Syllenae",
		Age:        25,
		Married:    false,
		Hobbies:    []string{"Game", "Reading", "Coding"},
	}

	bytes, _ := json.Marshal(customer)
	fmt.Println(string(bytes))
}

func TestJSONArrayDecode(t *testing.T) {
	jsonString := `{"FirstName":"Fey","MiddleName":"Minami","LastName":"Syllenae","Age":25,"Married":false,"Hobbies":["Game","Reading","Coding"]}`
	jsonBytes := []byte(jsonString)

	customer := &Customer{}

	json.Unmarshal(jsonBytes, customer)
	fmt.Println(customer.FirstName)
	fmt.Println(customer.Hobbies)
}

func TestComplexJson(t *testing.T) {
	customer := Customer{
		FirstName: "Fey",
		Addresses: []Address{
			{
				Street:     "Jalan Pramuka",
				Country:    "Indonesia",
				PostalCode: "29123",
			},
			{
				Street:     "Jalan Pemuda",
				Country:    "Singapore",
				PostalCode: "12366",
			},
		},
	}

	bytes, _ := json.Marshal(customer)
	fmt.Println(string(bytes))
}

func TestComplexJsonDecode(t *testing.T) {
	jsonString := `{"FirstName":"Fey","MiddleName":"","LastName":"","Age":0,"Married":false,"Hobbies":null,"Addresses":[{"Street":"Jalan Pramuka","Country":"Indonesia","PostalCode":"29123"}]}`
	jsonBytes := []byte(jsonString)

	customer := &Customer{}

	json.Unmarshal(jsonBytes, customer)
	fmt.Println(customer.FirstName)
	fmt.Println(customer.Addresses)
}
