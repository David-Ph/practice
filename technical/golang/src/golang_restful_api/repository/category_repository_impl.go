package repository

import (
	"context"
	"database/sql"
	"golang_restful_api/helper"
	"golang_restful_api/model/domain"
)

type CategoryRepositoryImpl struct {
}

func (repository *CategoryRepositoryImpl) Save(ctx context.Context, tx *sql.Tx, category domain.Category) domain.Category {
	SQL := "insert into customer(name) values(?)"
	result, err := tx.ExecContext(ctx, SQL, category.Name)
	helper.PanicIfError(err)

	id, err := result.LastInsertId()
	helper.PanicIfError(err)

	category.Id = int(id)
	return category
}

func (repository *CategoryRepositoryImpl) Update(ctx context.Context, tx *sql.Tx, category domain.Category) domain.Category {
	panic("implement me!")
}

func (repository *CategoryRepositoryImpl) Delete(ctx context.Context, tx *sql.Tx, category domain.Category) domain.Category {
	panic("implement me!")
}

func (repository *CategoryRepositoryImpl) FindById(ctx context.Context, tx *sql.Tx, category domain.Category) domain.Category {
	panic("implement me!")
}

func (repository *CategoryRepositoryImpl) FindAll(ctx context.Context, tx *sql.Tx, category domain.Category) domain.Category {
	panic("implement me!")
}
