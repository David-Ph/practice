package web

// this is struct for our resposne
type WebResponse struct {
	Code   int
	Status string
	Data   interface{}
}
