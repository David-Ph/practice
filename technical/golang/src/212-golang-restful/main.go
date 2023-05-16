package main

import (
	"golangrestful/app"
	"golangrestful/controllers"
	"golangrestful/helper"
	"golangrestful/middleware"
	"golangrestful/repository"
	"golangrestful/service"
	"net/http"

	"github.com/go-playground/validator"
)

func main() {
	validate := validator.New()
	db := app.NewDB()
	categoryRepository := repository.NewCategoryRepository()
	categoryService := service.NewCategoryService(categoryRepository, db, validate)
	categoryController := controllers.NewCategoryController(categoryService)

	router := app.NewRouter(categoryController)

	server := http.Server{
		Addr:    "localhost:8080",
		Handler: middleware.NewAuthMiddleware(router),
	}

	err := server.ListenAndServe()
	helper.PanicIfError(err)
}
