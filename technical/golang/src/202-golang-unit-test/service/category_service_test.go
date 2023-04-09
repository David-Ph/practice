package service

import (
	"go_unit_test/entity"
	"go_unit_test/repository"
	"testing"

	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/mock"
)

// Create a categoryrepository but from a mock
var categoryRepository = &repository.CategoryRepositoryMock{Mock: mock.Mock{}}
var categoryService = CategoryService{Repository: categoryRepository}

func TestCategoryService_GetNotFound(t *testing.T) {
	// we set up if the FindById method is called, return nil
	categoryRepository.Mock.On("FindById", "1").Return(nil)
	category, err := categoryService.Get("1")
	assert.NotNil(t, err)
	assert.Nil(t, category)
}

func TestCategoryService_GetSuccess(t *testing.T) {
	category := entity.Category{
		Id:   "1",
		Name: "Laptop",
	}
	categoryRepository.Mock.On("FindById", "2").Return(category)
	result, err := categoryService.Get("2")
	assert.NotNil(t, result)
	assert.Nil(t, err)
}
