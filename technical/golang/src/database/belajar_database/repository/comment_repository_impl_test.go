package repository

import (
	"belajar-golang/belajar_database"
	"belajar-golang/belajar_database/entity"
	"context"
	"fmt"
	"testing"

	_ "github.com/go-sql-driver/mysql"
)

func TestCommentInsert(t *testing.T) {
	commentRepository := NewCommentRepository(belajar_database.GetConnection())

	ctx := context.Background()
	comment := entity.Comment{
		Email:   "maomao@gmail.com",
		Comment: "Testing repository",
	}

	result, err := commentRepository.Insert(ctx, comment)

	if err != nil {
		panic(err)
	}

	fmt.Println(result)
}

func TestCommentFindById(t *testing.T) {
	commentRepository := NewCommentRepository(belajar_database.GetConnection())

	ctx := context.Background()

	result, err := commentRepository.FindById(ctx, 42)

	if err != nil {
		panic(err)
	}

	fmt.Println(result)
}

func TestCommentFindAll(t *testing.T) {
	commentRepository := NewCommentRepository(belajar_database.GetConnection())

	ctx := context.Background()

	result, err := commentRepository.FindAll(ctx)

	if err != nil {
		panic(err)
	}

	for _, comment := range result {
		fmt.Println(comment)
	}
}
