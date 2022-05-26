package main

import (
	"programmerzamannow/belajar-golang-restful-api/dependency"
	"programmerzamannow/belajar-golang-restful-api/helper"

	_ "github.com/go-sql-driver/mysql"
)

// func NewServer(authMiddleware *middleware.AuthMiddleware) *http.Server {
// 	return &http.Server{
// 		Addr:    "localhost:3000",
// 		Handler: authMiddleware,
// 	}
// }

func main() {
	server := dependency.InitializedServer()

	err := server.ListenAndServe()
	helper.PanicIfError(err)
}
