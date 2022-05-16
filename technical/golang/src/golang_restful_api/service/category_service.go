package service

import (
	"context"
	"golang_restful_api/model/web"
)

// this is where we do the business logic such as validation etc
// this is like the Model in MVC
type CategoryService interface {
	Save(ctx context.Context, request web.CategoryRequest) web.CategoryResponse
	Update(ctx context.Context, request web.CategoryUpdateRequest) web.CategoryResponse
	Delete(ctx context.Context, id int)
	FindById(ctx context.Context, id int) web.CategoryResponse
	FindAll(ctx context.Context) []web.CategoryResponse
}
