package simple

type BarRepository struct {
}

// Constructor for BarRepository
func NewBarRepository() *BarRepository {
	return &BarRepository{}
}

type BarService struct {
	*BarRepository
}

// Constructor for BarService
func NewBarService(barRepository *BarRepository) *BarService {
	return &BarService{
		BarRepository: barRepository,
	}
}
