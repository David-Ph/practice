package main

import (
	_ "basic/database"
	_ "basic/helper"
	_ "container/list"
	_ "container/ring"
	_ "flag"
	"fmt"
	_ "math"
	_ "os"
	"reflect"
	"regexp"
	_ "sort"
	_ "strconv"
	_ "strings"
	_ "time"
)

// sort
type User struct {
	Name string
	Age  int
}

type UserSlice []User // type alias

func (userSlice UserSlice) Len() int {
	return len(userSlice)
}

func (userSlice UserSlice) Less(i, j int) bool {
	return userSlice[i].Age < userSlice[j].Age
}

func (userSlice UserSlice) Swap(i, j int) {
	userSlice[i], userSlice[j] = userSlice[j], userSlice[i]
}

// reflect
type Sample struct {
	Name string `required:"true" max:"10"`
}

func IsValid(data interface{}) bool {
	t := reflect.TypeOf(data)
	for i := 0; i < t.NumField(); i++ {
		field := t.Field(i)
		if field.Tag.Get("required") == "true" {
			return reflect.ValueOf(data).Field(i).Interface() != ""
		}
	}
	return true
}

func main() {

	var regex = regexp.MustCompile(`(?i)e([a-z])o`)
	fmt.Println(regex.MatchString("eko"))
	fmt.Println(regex.MatchString("e2o"))
	fmt.Println(regex.MatchString("edo"))
	fmt.Println(regex.MatchString("Edo"))

	fmt.Println(regex.FindAllString("eko edo egi ego e1o eto", 10))

	// sample := Sample{"MaoMao"}
	// sampleType := reflect.TypeOf(sample)
	// structField := sampleType.Field(0)
	// required := structField.Tag.Get("required")

	// fmt.Println(structField.Name)
	// fmt.Println(required)

	// now := time.Now()
	// fmt.Println(now.Local())

	// utc := time.Date(2009, time.November, 10, 23, 0, 0, 0, time.UTC)
	// fmt.Println(utc.Local())

	// parse, _ := time.Parse(time.RFC3339, "2006-01-02T15:04:05Z")
	// fmt.Println(parse)

	// users := []User{
	// 	{"Eko", 30},
	// 	{"Fey", 12},
	// 	{"MaoMao", 25},
	// 	{"David", 18},
	// }

	// sort.Sort(UserSlice(users)) // convert users to UserSlice type alias
	// fmt.Println(users)

	// helper.SayHello("MaoMao")
	// helper.SayGoodBye("Joko")
	// fmt.Println(database.GetDatabase())
	// fmt.Println(helper.Application)
	// fmt.Println(os.Args)
	// name, error := os.Hostname()

	// if error == nil {
	// 	fmt.Println(name)
	// } else {
	// 	fmt.Println(error)
	// }

	// var host *string = flag.String("host", "localhost", "put your database host")
	// var user *string = flag.String("user", "root", "put your database user")
	// var password *string = flag.String("password", "12345", "put your database password")

	// flag.Parse()

	// fmt.Println("Host: ", *host)
	// fmt.Println("User: ", *user)
	// fmt.Println("Password: ", *password)

	// fmt.Println(strings.Contains(strings.ToLower("Eko Kurniawan"), strings.ToLower("eko")))

	// boolean, err := strconv.ParseBool("true")

	// if err == nil {
	// 	fmt.Println(boolean)
	// } else {
	// 	fmt.Println(err)
	// }

	// fmt.Println(math.Round(1.8))

	// data := list.New()
	// data.PushBack("Eko")
	// data.PushBack("Kurniawan")
	// data.PushBack("Kurniadi")

	// for e := data.Front(); e != nil; e = e.Next() {
	// 	fmt.Println(e.Value)
	// }

	// newRing := ring.New(5)
	// for i := 0; i < newRing.Len(); i++ {
	// 	newRing.Value = "Value " + strconv.FormatInt(int64(i), 10)
	// 	newRing = newRing.Next()
	// }

	// newRing.Do(func(value interface{}) {
	// 	fmt.Println(value)
	// })

}
