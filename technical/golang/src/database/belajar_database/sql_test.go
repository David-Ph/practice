package belajar_database

import (
	"context"
	"database/sql"
	"fmt"
	"strconv"
	"testing"
	"time"

	_ "github.com/go-sql-driver/mysql"
)

func TestExecSQL(t *testing.T) {
	db := GetConnection()
	defer db.Close()

	ctx := context.Background()

	script := "INSERT INTO customer(id, name) VALUES('MAO128', 'Fey Syllenae')"

	_, err := db.ExecContext(ctx, script)
	if err != nil {
		panic(err)
	}

	fmt.Println("Successfully inserted new customer")
}

func TestQuerySQL(t *testing.T) {
	db := GetConnection()
	defer db.Close()

	ctx := context.Background()

	script := "SELECT id, name, email, balance, rating, birth_date, married, created_at FROM customer"

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
		err := rows.Scan(&id, &name, &email, &balance, &rating, &birthDate, &married, &createdAt)
		if err != nil {
			panic(err)
		}

		fmt.Println("ID: ", id)
		fmt.Println("Name: ", name)

		if email.Valid {
			fmt.Println("email: ", email)
		}
		fmt.Println("balance: ", balance)
		fmt.Println("rating: ", rating)

		if birthDate.Valid {
			fmt.Println("birthDate: ", birthDate)
		}
		fmt.Println("married: ", married)
		fmt.Println("createdAt: ", createdAt)

	}
	defer rows.Close()
}

func TestSelectCustomer(t *testing.T) {
	db := GetConnection()
	defer db.Close()

	ctx := context.Background()

	inputName := "Fey"
	inputRating := 5

	script := "SELECT name, rating FROM customer WHERE name = ? AND rating = ? LIMIT 1"

	rows, err := db.QueryContext(ctx, script, inputName, inputRating)
	if err != nil {
		panic(err)
	}

	if rows.Next() {
		var name string
		var rating float64
		err := rows.Scan(&name, &rating)
		if err != nil {
			panic(err)
		}

		fmt.Println("Name: ", name)
		fmt.Println("rating: ", rating)
	}
	defer rows.Close()
}

func TestLastInsert(t *testing.T) {
	db := GetConnection()
	defer db.Close()

	ctx := context.Background()

	inputEmail := "myemail@gmail.com"
	inputComment := "hello there"

	script := "INSERT INTO comments(email, comment) VALUES(?, ?)"

	result, err := db.ExecContext(ctx, script, inputEmail, inputComment)
	if err != nil {
		panic(err)
	}

	insertId, err := result.LastInsertId()
	if err != nil {
		panic(err)
	}
	fmt.Println("Inserted ID:", insertId)
}

func TestPreparedStatement(t *testing.T) {
	db := GetConnection()
	defer db.Close()

	ctx := context.Background()

	stmt, err := db.PrepareContext(ctx, "INSERT INTO comments(email, comment) VALUES(?, ?)")
	if err != nil {
		panic(err)
	}
	defer stmt.Close()

	for i := 0; i < 10; i++ {
		email := "Eko" + strconv.Itoa(i) + "@gmail.com"
		comment := "Ini comment ke " + strconv.Itoa(i)
		result, err := stmt.ExecContext(ctx, email, comment)
		if err != nil {
			panic(err)
		}

		insertId, _ := result.LastInsertId()
		fmt.Println("Inserted ID:", insertId)
	}

}
