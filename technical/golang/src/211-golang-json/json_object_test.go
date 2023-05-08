package golangjson

import (
	"encoding/json"
	"fmt"
	"os"
	"testing"
)

type Customer struct {
	Firstname  string
	Lastname   string
	Middlename string
	Hobbies    []string
	Addresses  []Address
}

type Address struct {
	Street  string
	Country string
}

type Product struct {
	Id       string `json:"id"`
	Name     string `json:"name"`
	Price    string `json:"price"`
	ImageUrl string `json:"image_url"`
}

func TestObject(t *testing.T) {
	customer := Customer{
		Firstname:  "MaoMao",
		Lastname:   "Phang",
		Middlename: "Hallooo",
	}

	bytes, _ := json.Marshal(customer)
	fmt.Println(string(bytes))
}

func TestDecode(t *testing.T) {
	jsonObject := `{"Firstname":"MaoMao","Lastname":"Phang","Middlename":"Hallooo"}`
	jsonByte := []byte(jsonObject)

	customer := &Customer{}
	json.Unmarshal(jsonByte, customer)
	fmt.Println(customer)
}

func TestArray(t *testing.T) {
	customer := Customer{
		Firstname:  "MaoMao",
		Lastname:   "Phang",
		Middlename: "Hallooo",
		Hobbies:    []string{"Things", "Stuff", "Random"},
	}

	bytes, _ := json.Marshal(customer)
	fmt.Println(string(bytes))
}

func TestComplesArray(t *testing.T) {
	customer := Customer{
		Firstname:  "MaoMao",
		Lastname:   "Phang",
		Middlename: "Hallooo",
		Hobbies:    []string{"Things", "Stuff", "Random"},
		Addresses: []Address{
			{
				Street:  "Jalan",
				Country: "ID",
			},
			{
				Street:  "Pramuka",
				Country: "MY",
			},
		},
	}

	bytes, _ := json.Marshal(customer)
	fmt.Println(string(bytes))
}

func TestDecodeComplesArray(t *testing.T) {
	jsonObject := `{"Firstname":"MaoMao","Lastname":"Phang","Middlename":"Hallooo","Hobbies":["Things","Stuff","Random"],"Addresses":[{"Street":"Jalan","Country":"ID"},{"Street":"Pramuka","Country":"MY"}]}`
	jsonByte := []byte(jsonObject)

	customer := &Customer{}
	json.Unmarshal(jsonByte, customer)
	fmt.Println(customer)
}

func TestEncodeTag(t *testing.T) {
	customer := Product{
		Id:       "1",
		Name:     "Phang",
		Price:    "Hallooo",
		ImageUrl: "Hallooo",
	}

	bytes, _ := json.Marshal(customer)
	fmt.Println(string(bytes))
}

func TestDecodeTag(t *testing.T) {
	jsonObject := `{"id":"1","name":"Phang","price":"123123", "image_url":"right here!"}`
	jsonByte := []byte(jsonObject)

	customer := &Product{}
	json.Unmarshal(jsonByte, customer)
	fmt.Println(customer)
}

func TestDecodeMap(t *testing.T) {
	jsonObject := `{"id":"1","name":"Phang","price":"123123", "image_url":"right here!"}`
	jsonByte := []byte(jsonObject)

	var result map[string]interface{}
	json.Unmarshal(jsonByte, &result)
	fmt.Println(result)
}

func TestStreamingEncode(t *testing.T) {
	writer, _ := os.Create("sample_output.json")
	encoder := json.NewEncoder(writer)

	customer := Address{
		Street:  "Jlana",
		Country: "ID",
	}

	_ = encoder.Encode(customer)

	fmt.Println(customer)
}

func TestStreamingDecode(t *testing.T) {
	reader, _ := os.Open("sample_output.json")
	decoder := json.NewDecoder(reader)

	address := &Address{}
	decoder.Decode(address)

	fmt.Println(address)
}
