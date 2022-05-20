package simple

type Database struct {
	Name string
}

type DatabaseMongoDB Database
type DatabasePostgreSQL Database

func NewDatabaseMongoDB() *DatabaseMongoDB {
	return (*DatabaseMongoDB)(&Database{
		Name: "MongoDB",
	})
}

func NewDatabasePostgreSQL() *DatabasePostgreSQL {
	return (*DatabasePostgreSQL)(&Database{
		Name: "PostgreSQL",
	})
}

type DatabaseRepository struct {
	DatabaseMongoDB    *DatabaseMongoDB
	DatabasePostgreSQL *DatabasePostgreSQL
}

func NewDatabaseRepository(mongoDB *DatabaseMongoDB, postgreSQL *DatabasePostgreSQL) *DatabaseRepository {
	return &DatabaseRepository{
		DatabaseMongoDB:    mongoDB,
		DatabasePostgreSQL: postgreSQL,
	}
}
