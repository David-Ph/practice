package database_golang_test

import (
	"database/sql"
	"testing"

	_ "github.com/go-sql-driver/mysql"
)

func TestOpenConnection(t *testing.T) {
	db, err := sql.Open("mysql", "root:@tcp(localhost:3306)/belajar_golang")
	if err != nil {
		t.Error(err)
	}
	defer db.Close()

	// Use DB
}
