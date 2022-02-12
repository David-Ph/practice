package main

import "fmt"

func logging() {
	fmt.Println("Selesai memanggil logging")
}

func runApplication() {
	defer logging()
	fmt.Print("Menjalankan aplikasi")
}

func endApp() {
	fmt.Println("Ending app...")
	message := recover()
	fmt.Println("Terjadi error", message)
}

func runApp(error bool) {
	defer endApp()
	if error {
		panic("Error")
	}
}

func main() {
	// runApplication()
	runApp(true)
}
