package repository

import "unit-test/entity"

// create an interface
type CategoryRepository interface {
	FindById(id string) *entity.Category
}
