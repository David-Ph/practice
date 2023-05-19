package simple

type Database struct {
	Name string
}

type DatabasePostgreSQL Database
type DatabaseMongoDB Database

type DatabaseRepository struct {
	DatabasePostgreSQL *DatabasePostgreSQL
	DatabaseMongoDB    *DatabaseMongoDB
}

func NewDatabasePostreSQL() *DatabasePostgreSQL {
	database := &Database{
		Name: "PostreSQL",
	}
	return (*DatabasePostgreSQL)(database)
}

func NewDatabaseMongoDB() *DatabaseMongoDB {
	database := &Database{
		Name: "MongoDB",
	}
	return (*DatabaseMongoDB)(database)
}

func NewDatabaseRepository(
	databasePostgreSQL *DatabasePostgreSQL,
	databaseMongoDB *DatabaseMongoDB,
) *DatabaseRepository {
	return &DatabaseRepository{
		DatabasePostgreSQL: databasePostgreSQL,
		DatabaseMongoDB:    databaseMongoDB,
	}
}
