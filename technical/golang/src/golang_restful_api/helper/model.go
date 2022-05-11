package helper

import (
	"golang_restful_api/model/domain"
	"golang_restful_api/model/web"
)

func ToCategoryResponse(category domain.Category) web.CategoryResponse {
	return web.CategoryResponse{
		Id:   category.Id,
		Name: category.Name,
	}
}

func ToCategoriesResponses(categories []domain.Category) []web.CategoryResponse {
	var categoryReponses []web.CategoryResponse

	for _, category := range categories {
		categoryReponses = append(categoryReponses, ToCategoryResponse(category))
	}

	return categoryReponses
}
