package golang_json

import (
	"encoding/json"
	"fmt"
	"os"
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

type Product struct {
	Id       string `json:"id"`
	Name     string `json:"name"`
	Price    int64  `json:"price"`
	ImageUrl string `json:"image_url"`
}

func TestStreamDecoder(t *testing.T) {
	reader, _ := os.Open("example.json")
	decoder := json.NewDecoder(reader)

	customer := &Customer{}
	decoder.Decode(customer)

	fmt.Println(customer)
}

func TestStreamEncoder(t *testing.T) {
	writer, _ := os.Create("sample_output.json")
	encoder := json.NewEncoder(writer)

	customer := Customer{
		FirstName:  "Fey",
		MiddleName: "Minami",
		LastName:   "Syllenae",
	}

	_ = encoder.Encode(customer)
	fmt.Println(customer)
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

func TestJsonTag(t *testing.T) {
	product := Product{
		Id:       "123",
		Name:     "David",
		ImageUrl: "http://example.com/image.png",
	}

	bytes, _ := json.Marshal(product)
	fmt.Println(string(bytes))
}

func TestJsonTagDecode(t *testing.T) {
	jsonString := `{"id":"123","name":"David","price":0,"image_url":"http://example.com/image.png"}`
	jsonBytes := []byte(jsonString)

	product := &Product{}

	json.Unmarshal(jsonBytes, product)
	fmt.Println(product.Name)
	fmt.Println(product.ImageUrl)
}

func TestJsonMapDecode(t *testing.T) {
	jsonString := `{"id":"123","name":"David","price":10000}`
	jsonBytes := []byte(jsonString)

	var result map[string]interface{}
	_ = json.Unmarshal(jsonBytes, &result)

	fmt.Println(result)
	fmt.Println(result["id"])
	fmt.Println(result["name"])
	fmt.Println(result["price"])
}

func TestJsonMapEncode(t *testing.T) {
	product := map[string]interface{}{
		"id":   "123",
		"name": "Fey",
		"age":  25,
	}

	bytes, _ := json.Marshal(product)
	fmt.Println(string(bytes))
}
