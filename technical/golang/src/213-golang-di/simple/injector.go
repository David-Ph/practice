//go:build wireinject
// +build wireinject

package simple

import (
	"io"
	"os"

	"github.com/google/wire"
)

func InitializedService(isError bool) (*SimpleService, error) {
	wire.Build(
		NewSimpleRepository, NewSimpleService,
	)
	return nil, nil
}

func InitializedDatabase() *DatabaseRepository {
	wire.Build(
		NewDatabaseMongoDB,
		NewDatabasePostreSQL,
		NewDatabaseRepository,
	)
	return nil
}

var fooSet = wire.NewSet(NewFooRepository, NewFooService)
var barSet = wire.NewSet(NewBarRepository, NewBarService)

func InitializedFooBarService() *FooBarService {
	wire.Build(fooSet, barSet, NewFooBarService)
	return nil
}

// binding interface
var HelloSet = wire.NewSet(
	NewSayHelloImpl,
	wire.Bind(new(SayHello), new(*SayHelloImpl)),
)

func InitializedSayHello() *HelloService {
	wire.Build(NewSayHelloService, HelloSet)
	return nil
}

var FooBarSet = wire.NewSet(
	NewFoo,
	NewBar,
)

func InitializedFooBar() *FooBar {
	wire.Build(
		FooBarSet,
		wire.Struct(new(FooBar), "Foo", "Bar"),
	)
	return nil
}

var FoobarValueSet = wire.NewSet(
	wire.Value(&Foo{}),
	wire.Value(&Bar{}),
)

func InitializedFooBarValue() *FooBar {
	wire.Build(FoobarValueSet, wire.Struct(new(FooBar), "*"))
	return nil
}

func InitializedIOReader() io.Reader {
	wire.Build(wire.InterfaceValue(new(io.Reader), os.Stdin))
	return nil
}

func InitializedConfiguration() *Configuration {
	wire.Build(
		NewApplication,
		wire.FieldsOf(new(*Application), "Configuration"),
	)
	return nil
}

func InitializedConnection(name string) (*Connection, func()) {
	wire.Build(
		NewFile, NewConnection,
	)
	return nil, nil
}
