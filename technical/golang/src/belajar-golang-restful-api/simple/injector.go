//go:build wireinject
// +build wireinject

package simple

import "github.com/google/wire"

func CreateService() *SimpleService {
	wire.Build(NewSimpleRepository, NewSimpleService)
	return nil
}
