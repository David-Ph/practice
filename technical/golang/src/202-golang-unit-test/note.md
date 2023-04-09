# What is sofware testing for?

To ensure quality of code and applications

# Different types of test

There are 3 types of test. UI/End to end testing, integration testing, and unit testing

- UI test is the biggest test and the slowest test
- With UI test, we're testing the whole system as if we're creating a robot that tests the UI from end to end
- For example, we have the test open a web page, press the login button, insert login information, and receive the user token.

- Integration testing is similar to ui test, but we're only testing a smaller part of it
- for example if we have 2 backends, then integration testing will be only focused on 1 backend

- Unit test tests the smallest component of the code
- it's usually small and fast
- we test only one function or method per test

# Testing packages in Golang

there are 3 structs provided by golang to help us in testing

- Testing.t
  this struct is used to do unit test

- testing.M
  this struct is used to set life cycle testing

- testing.B
  this struct is used for benchmarking

# creating a test

to test this function

```
func HelloWorld(name string) string {
	return "Hello, " + name
}

func TestHelloWorld(t *testing.T) {
	result := HelloWorld("MaoMao")

	if result != "Hello, MaoMao" {
		panic("Result should be 'Hello, MaoMao. Instead, received: " + result)
	}
}
```

run with `go test -v` or `go test -v -run=testname` or `go test -v ./...`

# Failing a test

you can use `Fail()` `FailNow()` `Error()` and `Fatal()`

most like you'll be using `Error()` because you can also put error message and it will call `Fail()` as well

# Assertion

we can use testify library for assertion in golang testing instead of if else

```
go get https://github.com/stretchr/testify
```

```
result := HelloWorld("MaoMao")

assert.Equal(t, "Hello, MaoMao", result)
fmt.Println("finished!")
```

# Skip

We can skip a test if you want

```
if runtime.GOOS == "darwin" {
	t.Skip("Unit test can't run in darwin")
}
```

# Before and After test

we can use `testing.M` to run code before and after unit tests
it will only be executed once

```
func TestMain(m *testing.M) {
	fmt.Println("Before Unit test")

	m.Run()

	fmt.Println("After Unit test")
}
```

# Sub Test

Golang supports running a unit test inside a unit test

```
func TestSubTest(t *testing.T) {
	t.Run("MaoMao", func(t *testing.T) {
		result := HelloWorld("MaoMao")
		assert.Equal(t, "Hello, MaoMao", result)
	})

	t.Run("Phang", func(t *testing.T) {
		result := HelloWorld("Phang")
		assert.Equal(t, "Hello, Phang", result)
	})
}
```

# Table Test

Table test is where we provide a slice of data that contains parameters and results expectations from said unit test

# Mock

Mock is a technique in unt test where we're creating a mock object of somethign that is hard to test

For example, let's say we must test a part of our code that calls a third party API. This is not very easy to test because our unit test must always make a third party

in this case, we can make a mock object for it.

Golang don't have mock object, but we can use testify package.

Let's make an example where we create a mock object to do a query to a database.

# Benchmark

Benchmark is used to check how fast our application is

```
func BenchmarkHelloWorld(b *testing.B) {
	for i := 0; i < b.N; i++ {
		HelloWorld("MaoMao")
	}
}
```

run the benchmark with `go test -v -bench=.`