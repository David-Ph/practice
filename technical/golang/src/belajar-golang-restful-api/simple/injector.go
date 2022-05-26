//go:build wireinject
// +build wireinject

package simple

import (
	"io"
	"os"

	"github.com/google/wire"
)

func CreateService(isError bool) (*SimpleService, error) {
	wire.Build(NewSimpleRepository, NewSimpleService)
	return nil, nil
}

func InitializeDatabase() *DatabaseRepository {
	wire.Build(
		NewDatabaseMongoDB,
		NewDatabasePostgreSQL,
		NewDatabaseRepository,
	)
	return nil
}

var fooSet = wire.NewSet(NewFooRepository, NewFooService)

var barSet = wire.NewSet(NewBarRepository, NewBarService)

func InitializedFooBarService() *FooBarService {
	wire.Build(
		fooSet,
		barSet,
		NewFooBarService,
	)
	return nil
}

var HelloSet = wire.NewSet(NewSayHelloImpl, wire.Bind(new(SayHello), new(*SayHelloImpl)))

func InitializeHelloService() *HelloService {
	wire.Build(HelloSet, NewSayHelloService)
	return nil
}

var FooBarSet = wire.NewSet(
	NewFoo,
	NewBar,
)

func InitializeFooBar() *FooBar {
	wire.Build(
		FooBarSet,
		wire.Struct(new(FooBar), "Foo", "Bar"),
	)

	return nil
}

var fooValue = &Foo{}
var barValue = &Bar{}

func InitalizeFooBarWithValue() *FooBar {
	wire.Build(wire.Value(fooValue), wire.Value(barValue), wire.Struct(new(FooBar), "*"))
	return nil
}

func InitializeReader() io.Reader {
	wire.Build(wire.InterfaceValue(new(io.Reader), os.Stdin))
	return nil
}
