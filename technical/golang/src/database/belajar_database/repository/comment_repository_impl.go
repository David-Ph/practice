package repository

import (
	"belajar-golang/belajar_database/entity"
	"context"
	"database/sql"
	"errors"
	"strconv"
)

type commentRepositoryImpl struct {
	DB *sql.DB
}

// ini function untuk membuat repository baru
func NewCommentRepository(db *sql.DB) CommentRepository {
	return &commentRepositoryImpl{DB: db}
}

func (repository *commentRepositoryImpl) Insert(ctx context.Context, comment entity.Comment) (entity.Comment, error) {
	script := "INSERT INTO comments(email, comment) VALUES(?, ?)"
	result, err := repository.DB.ExecContext(ctx, script, comment.Email, comment.Comment)
	if err != nil {
		return comment, err
	}

	id, err := result.LastInsertId()
	if err != nil {
		return comment, err
	}

	comment.Id = int32(id)
	return comment, nil
}

func (repository *commentRepositoryImpl) FindById(ctx context.Context, id int32) (entity.Comment, error) {
	script := "SELECT id, email, comment FROM comments WHERE id = ? LIMIT 1"
	result, err := repository.DB.QueryContext(ctx, script, id)
	comment := entity.Comment{} // create a enw comment entity
	if err != nil {
		return comment, err
	}
	defer result.Close()
	if result.Next() {
		// berarti ada
		result.Scan(&comment.Id, &comment.Email, &comment.Comment) // insert the data into comment variable
		return comment, nil
	} else {
		// berarti tidak ada
		return comment, errors.New("ID " + strconv.Itoa(int(id)) + " Not Found")
	}
}

func (repository *commentRepositoryImpl) FindAll(ctx context.Context) ([]entity.Comment, error) {
	script := "SELECT id, email, comment FROM comments"
	result, err := repository.DB.QueryContext(ctx, script)
	if err != nil {
		return nil, err
	}
	defer result.Close()
	var comments []entity.Comment
	for result.Next() {
		comment := entity.Comment{} // create a enw comment entity
		result.Scan(&comment.Id, &comment.Email, &comment.Comment)
		comments = append(comments, comment)
	}

	return comments, nil
}
