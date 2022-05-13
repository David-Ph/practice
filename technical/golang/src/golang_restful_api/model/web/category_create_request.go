package web

// this is the interface of payload body request
// what kind of interface should payload body contain?
type CategoryRequest struct {
	Name string `validate:"required,max=200,min=1"`
}
