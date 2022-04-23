package golang_web

import (
	"fmt"
	"net/http"
	"testing"
)

type LoggerMiddleware struct {
	Handler http.Handler
}

type ErrorHandler struct {
	Handler http.Handler
}

func (middleware *LoggerMiddleware) ServeHTTP(writer http.ResponseWriter, request *http.Request) {
	fmt.Println("Before executing handler")
	middleware.Handler.ServeHTTP(writer, request)
	fmt.Println("After executing handler")
}

func (handler *ErrorHandler) ServeHTTP(writer http.ResponseWriter, request *http.Request) {
	defer func() {
		err := recover()
		fmt.Println("RECOVER: ", err)

		if err != nil {
			writer.WriteHeader(http.StatusInternalServerError)
			fmt.Fprintf(writer, "Error: %s", err)
		}
	}()
	handler.Handler.ServeHTTP(writer, request)
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

	errorHandler := &ErrorHandler{
		Handler: loggerMiddleware,
	}

	server := http.Server{
		Addr:    "localhost:8080",
		Handler: errorHandler, // the flow is this: server will send the data to errorhandler, error handler will send the data to loggermiddleware, loggermiddleware will send the data to mux
	}

	err := server.ListenAndServe()
	if err != nil {
		panic(err)
	}
}
