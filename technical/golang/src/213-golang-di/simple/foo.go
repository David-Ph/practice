package simple

type FooRepository struct {
}

// Constructor for FooRepository
func NewFooRepository() *FooRepository {
	return &FooRepository{}
}

type FooService struct {
	*FooRepository
}

// Constructor for FooService
func NewFooService(fooRepository *FooRepository) *FooService {
	return &FooService{
		FooRepository: fooRepository,
	}
}
