package repository

import (
	"context"
	"fmt"
	database_golang "golang_mysql"
	"golang_mysql/entity"
	"testing"

	_ "github.com/go-sql-driver/mysql"
)

func TestCommentInsert(t *testing.T) {
	commentRepository := NewCommentRepository(database_golang.GetConnection())

	ctx := context.Background()
	comment := entity.Comment{
		Email:   "Phang@maomao.com",
		Comment: "Hello there!!!",
	}

	result, err := commentRepository.Insert(ctx, comment)
	if err != nil {
		panic(err)
	}

	fmt.Println(result)
}

func TestFindById(t *testing.T) {
	commentRepository := NewCommentRepository(database_golang.GetConnection())

	ctx := context.Background()

	comment, err := commentRepository.FindById(ctx, 5)
	if err != nil {
		panic(err)
	}

	fmt.Println(comment)
}

func TestFindAll(t *testing.T) {
	commentRepository := NewCommentRepository(database_golang.GetConnection())

	ctx := context.Background()

	comments, err := commentRepository.FindAll(ctx)
	if err != nil {
		panic(err)
	}

	for _, comment := range comments {
		fmt.Println(comment)
	}
}
