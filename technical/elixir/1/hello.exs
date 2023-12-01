IO.puts("Hello world!")

employee = %{"name" => "Bob", "last name" => "Barker"}
IO.puts(employee["name"])

john = %{employee | "name" => "John"}
IO.puts(john["last name"])

%{employee | "name" => "New Name"}
IO.puts(employee["name"])

test = %{"Hello" => "Nice", test: "Hello", test_2: "World"}
IO.puts(test.test)
