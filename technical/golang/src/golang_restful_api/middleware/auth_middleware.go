package middleware

import (
	"golang_restful_api/helper"
	"golang_restful_api/model/web"
	"net/http"
)

type AuthMiddleware struct {
	Handler http.Handler
}

func NewAuthMiddleware(handler http.Handler) *AuthMiddleware {
	return &AuthMiddleware{Handler: handler}
}

func (middleware *AuthMiddleware) ServeHTTP(writer http.ResponseWriter, request *http.Request) {
	if request.Header.Get("X-API-KEY") == "RAHASIA" {
		// if ok, then continue to next request
		middleware.Handler.ServeHTTP(writer, request)
	} else {
		// if not ok, then return error
		writer.Header().Set("Content-Type", "application/json")
		writer.WriteHeader(http.StatusUnauthorized)

		webResponse := web.WebResponse{
			Code:   http.StatusUnauthorized,
			Status: "FORBIDDEN",
		}
		helper.WriteToResponseBody(writer, webResponse)
	}
}
