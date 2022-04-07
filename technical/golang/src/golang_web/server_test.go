package golang_web

import (
	"fmt"
	"io"
	"net/http"
	"net/http/httptest"
	"net/url"
	"strings"
	"testing"
)

func TestServer(t *testing.T) {
	var handler http.HandlerFunc = func(writer http.ResponseWriter, request *http.Request) {
		// Logic Web
		fmt.Fprint(writer, "Hello World!")
	}

	server := http.Server{
		Addr:    "localhost:8080",
		Handler: handler,
	}

	err := server.ListenAndServe()
	if err != nil {
		panic(err)
	}
}

func TestServeMux(t *testing.T) {
	mux := http.NewServeMux()

	mux.HandleFunc("/", func(res http.ResponseWriter, req *http.Request) {
		fmt.Fprint(res, "Hello From Root")
	})
	mux.HandleFunc("/profile", func(res http.ResponseWriter, req *http.Request) {
		fmt.Fprint(res, "Hello From Profile")
	})
	mux.HandleFunc("/profile/settings", func(res http.ResponseWriter, req *http.Request) {
		fmt.Fprint(res, "Hello From Profile Settings")
	})

	server := http.Server{
		Addr:    "localhost:8080",
		Handler: mux,
	}

	err := server.ListenAndServe()
	if err != nil {
		panic(err)
	}
}

func TestRequest(t *testing.T) {
	mux := http.NewServeMux()

	mux.HandleFunc("/", func(res http.ResponseWriter, req *http.Request) {
		fmt.Fprintln(res, req.Method)
		fmt.Fprintln(res, req.Body)
		fmt.Fprintln(res, req.RequestURI)
	})

	server := http.Server{
		Addr:    "localhost:8080",
		Handler: mux,
	}

	err := server.ListenAndServe()
	if err != nil {
		panic(err)
	}
}

func HelloHandler(writer http.ResponseWriter, request *http.Request) {
	fmt.Fprintln(writer, "Hello World")
}

func TestHelloHandler(t *testing.T) {
	request := httptest.NewRequest("GET", "http://localhost:8080/hello", nil)
	recorder := httptest.NewRecorder()

	HelloHandler(recorder, request)

	response := recorder.Result()
	body, _ := io.ReadAll(response.Body)

	fmt.Println(response.StatusCode)
	fmt.Println(response.Status)
	fmt.Println(string(body))
}

func SayHello(writer http.ResponseWriter, request *http.Request) {
	name := request.URL.Query().Get("name")
	if name == "" {
		fmt.Fprint(writer, "Hello")
	} else {
		fmt.Fprintf(writer, "Hello %s", name)
	}
}

func MultipleQueryParameter(writer http.ResponseWriter, request *http.Request) {
	firstName := request.URL.Query().Get("first_name")
	lastName := request.URL.Query().Get("last_name")

	fmt.Fprintf(writer, "Hello, %s %s", firstName, lastName)
}

func MultipleValueParameter(writer http.ResponseWriter, request *http.Request) {
	var query url.Values = request.URL.Query()
	var names []string = query["name"]

	fmt.Fprintln(writer, strings.Join(names, ", "))
}

func TestQueryParameter(t *testing.T) {
	request := httptest.NewRequest("GET", "http://localhost:8080/hello?name=Eko", nil)
	recorder := httptest.NewRecorder()

	SayHello(recorder, request)

	response := recorder.Result()
	body, _ := io.ReadAll(response.Body)

	fmt.Println(string(body))
}

func TestMultipleQueryParameter(t *testing.T) {
	request := httptest.NewRequest("GET", "http://localhost:8080/hello?first_name=Fey&last_name=Syllenae", nil)
	recorder := httptest.NewRecorder()

	MultipleQueryParameter(recorder, request)

	response := recorder.Result()
	body, _ := io.ReadAll(response.Body)

	fmt.Println(string(body))
}

func TestMultipleValueParameter(t *testing.T) {
	request := httptest.NewRequest("GET", "http://localhost:8080/hello?name=Fey&name=Syllenae", nil)
	recorder := httptest.NewRecorder()

	MultipleValueParameter(recorder, request)

	response := recorder.Result()
	body, _ := io.ReadAll(response.Body)

	fmt.Println(string(body))
}
