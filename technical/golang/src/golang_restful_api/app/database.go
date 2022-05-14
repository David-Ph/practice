package app

import (
	"database/sql"
	"golang_restful_api/helper"
	"time"

	_ "github.com/go-sql-driver/mysql"
)

func NewDB() *sql.DB {
	db, err := sql.Open("mysql", "root@tcp(localhost:3306)/golang_restful_api")
	helper.PanicIfError(err)

	db.SetMaxIdleConns(5)
	db.SetMaxOpenConns(20)
	db.SetConnMaxLifetime(10 * time.Minute)
	db.SetConnMaxIdleTime(60 * time.Minute)

	return db
}
