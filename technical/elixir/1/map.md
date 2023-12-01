1. Maps are key-value pairs like objects in javascript

This is how you declare and call a map

```elixir
employee = %{"name" => "Bob", "last name" => "Barker"}
employee["name"]
"Bob"
```

you can also copy a map and store it into a variable

```elixir
john = %{employee | "name" => "john", "last name" => "Barker"}
john["name"]
"john"
```

This is an alternative way to declare a map and call it

```elixir
test = %{"Hello" => "Nice", test: "Hello", test_2: "World"}
IO.puts(test.test)
"Hello"
```
