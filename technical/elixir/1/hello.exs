# IO.puts("Hello world!")

# employee = %{"name" => "Bob", "last name" => "Barker"}
# IO.puts(employee["name"])

# john = %{employee | "name" => "John"}
# IO.puts(john["last name"])

# %{employee | "name" => "New Name"}
# IO.puts(employee["name"])

# test = %{"Hello" => "Nice", test: "Hello", test_2: "World"}
# IO.puts(test.test)

# result = {:ok, "Success"}

# case result do
#   {:ok, "Asd"} -> IO.puts("This matches")
#   {:error, error} -> IO.puts("This won't matches")
#   _ -> IO.puts("This matches against anything else")
# end

color = "blue"

cond do
  color =="blue" -> IO.puts(color)
  color =="red" -> IO.puts(color)
  color =="green" -> IO.puts(color)
end
