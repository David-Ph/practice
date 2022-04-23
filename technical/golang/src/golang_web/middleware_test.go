package golang_web

import (
	"fmt"
	"net/http"
	"testing"
)

type LoggerMiddleware struct {
	Handler http.Handler
}

func (middleware *LoggerMiddleware) ServeHTTP(writer http.ResponseWriter, request *http.Request) {
	fmt.Println("Before executing handler")
	middleware.Handler.ServeHTTP(writer, request)
	fmt.Println("After executing handler")
}

func TestMiddleware(t *testing.T) {
	mux := http.NewServeMux()
	mux.HandleFunc("/", func(writer http.ResponseWriter, request *http.Request) {
		fmt.Println("Handler Executed")
		fmt.Fprint(writer, "Hello Middleware")
	})

	loggerMiddleware := &LoggerMiddleware{
		Handler: mux,
	}

	server := http.Server{
		Addr:    "localhost:8080",
		Handler: loggerMiddleware,
	}

	err := server.ListenAndServe()
	if err != nil {
		panic(err)
	}
}
