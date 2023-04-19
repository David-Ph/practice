package database_golang

import (
	"context"
	"database/sql"
	"fmt"
	"strconv"
	"testing"
	"time"
)

func TestInsertIntoDatabase(t *testing.T) {
	db := GetConnection()
	defer db.Close()

	ctx := context.Background()

	script := "INSERT INTO customer(id, name) VALUES('2', 'MaoMao_2');"
	_, err := db.ExecContext(ctx, script)
	if err != nil {
		panic(err)
	}

	fmt.Println("Successfully insert new customer")
}

func TestQueryIntoDatabase(t *testing.T) {
	db := GetConnection()
	defer db.Close()

	ctx := context.Background()

	script := "SELECT id, name, email, balance, rating, birth_date, married, created_at FROM customer;"
	rows, err := db.QueryContext(ctx, script)
	if err != nil {
		panic(err)
	}

	for rows.Next() {
		var id, name string
		var email sql.NullString
		var balance int32
		var rating float64
		var birthDate sql.NullTime
		var createdAt time.Time
		var married bool
		err := rows.Scan(&id, &name, &email, &balance, &rating, &birthDate, &married, &createdAt) // insert pointer to destination variable
		if err != nil {
			panic(err)
		}
		fmt.Println("----------------")
		fmt.Println("ID: ", id)
		fmt.Println("Name: ", name)
		fmt.Println("Balance: ", balance)
		fmt.Println("Rating: ", rating)
		fmt.Println("married: ", married)
		fmt.Println("Created at: ", createdAt)
		if email.Valid {
			fmt.Println("Email: ", email.String)
		}
		if birthDate.Valid {
			fmt.Println("Birth Date: ", birthDate.Time)
		}
	}
	defer rows.Close()
}

func TestQuerySQLWithParameterWrong(t *testing.T) {
	db := GetConnection()
	defer db.Close()

	// Contoh SQL Injection
	username := "admin'; #"
	password := "salah"

	ctx := context.Background()
	sqlQuery := "SELECT username FROM user WHERE username='" + username + "' AND password = '" + password + "' LIMIT 1"

	rows, err := db.QueryContext(ctx, sqlQuery)
	if err != nil {
		panic(err)
	}

	if rows.Next() {
		var username string
		err := rows.Scan(&username)
		if err != nil {
			panic(err)
		}
		fmt.Println("Sukses Login:", username)
	} else {
		fmt.Println("Gagal login")
	}
}

func TestQuerySQLWithParameterCorrect(t *testing.T) {
	db := GetConnection()
	defer db.Close()

	// Contoh SQL Injection
	username := "admin'; #"
	password := "salah"

	ctx := context.Background()
	sqlQuery := "SELECT username FROM user WHERE username= ? AND password = ? LIMIT 1"

	rows, err := db.QueryContext(ctx, sqlQuery, username, password)
	if err != nil {
		panic(err)
	}

	if rows.Next() {
		var username string
		err := rows.Scan(&username)
		if err != nil {
			panic(err)
		}
		fmt.Println("Sukses Login:", username)
	} else {
		fmt.Println("Gagal login")
	}
}

func TestExecWithParameter(t *testing.T) {
	db := GetConnection()
	defer db.Close()

	username := "MaoMao"
	password := "Phang"

	ctx := context.Background()
	sqlQuery := "INSERT INTO user(username, password) VALUES(?, ?)"
	_, err := db.ExecContext(ctx, sqlQuery, username, password)
	if err != nil {
		panic(err)
	}
	fmt.Println("Success!")
}

func TestLastInsertid(t *testing.T) {
	db := GetConnection()
	defer db.Close()

	email := "phang@gmail.com"
	comment := "Hello!"

	// ctx := context.Background()
	sqlQuery := "INSERT INTO comments(email, comment) VALUES (?, ?)"
	// result, err := db.ExecContext(ctx, sqlQuery, email, comment)
	result, err := db.Exec(sqlQuery, email, comment)

	if err != nil {
		panic(err)
	}

	id, err := result.LastInsertId()
	if err != nil {
		panic(err)
	}

	fmt.Println("Success. ID:", id)
}

func TestPrepareStatement(t *testing.T) {
	db := GetConnection()
	defer db.Close()

	sqlQuery := "INSERT INTO comments(email, comment) VALUES(?, ?)"
	stmt, err := db.Prepare(sqlQuery)
	if err != nil {
		panic(err)
	}
	defer stmt.Close()

	for i := 0; i < 10; i++ {
		email := "maomao" + strconv.Itoa(i) + "@gmail.com"
		comments := "Comment ke " + strconv.Itoa(i)

		result, err := stmt.Exec(email, comments)
		if err != nil {
			panic(err)
		}

		id, err := result.LastInsertId()
		if err != nil {
			panic(err)
		}

		fmt.Println("Comment ID:", id)
	}
}

func TestTransaction(t *testing.T) {
	db := GetConnection()
	defer db.Close()

	tx, err := db.Begin()
	if err != nil {
		panic(err)
	}

	sqlQuery := "INSERT INTO comments(email, comment) VALUES(?, ?)"
	for i := 0; i < 10; i++ {
		email := "maomao" + strconv.Itoa(i) + "@gmail.com"
		comments := "Comment ke " + strconv.Itoa(i)

		result, err := tx.Exec(sqlQuery, email, comments)
		if err != nil {
			panic(err)
		}

		id, err := result.LastInsertId()
		if err != nil {
			panic(err)
		}

		fmt.Println("Comment ID:", id)
	}

	err = tx.Commit()
	if err != nil {
		panic(err)
	}
}
