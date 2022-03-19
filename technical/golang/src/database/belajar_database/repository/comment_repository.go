package repository

import (
	"belajar-golang/belajar_database/entity"
	"context"
)

// interface repository
type CommentRepository interface {
	// accepts context as first argument, and comment as second argument
	// and returns comment and error
	Insert(ctx context.Context, comment entity.Comment) (entity.Comment, error)
	FindById(ctx context.Context, id int32) (entity.Comment, error)
	FindAll(ctx context.Context) ([]entity.Comment, error)
}
