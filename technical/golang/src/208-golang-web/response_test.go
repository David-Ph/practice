package golang_web

import (
	"fmt"
	"io"
	"net/http"
	"net/http/httptest"
	"testing"
)

func ResponseCode(w http.ResponseWriter, r *http.Request) {
	name := r.URL.Query().Get("name")
	if name == "" {
		w.WriteHeader(400) // Bad Request
		fmt.Fprint(w, "Name is empty")
	} else {
		w.WriteHeader(200)
		fmt.Fprintf(w, "Name is %s", name)
	}
}

func TestResponseCode(t *testing.T) {
	request := httptest.NewRequest("GET", "http://localhost:8080?name=Phang", nil)
	recorder := httptest.NewRecorder()

	ResponseCode(recorder, request)

	response := recorder.Result()
	body, _ := io.ReadAll(response.Body)
	fmt.Println(response.StatusCode)
	fmt.Println(response.Status)
	fmt.Println(string(body))
}
