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

# color = "blue"

# cond do
#   color =="blue" -> IO.puts(color)
#   color =="red" -> IO.puts(color)
#   color =="green" -> IO.puts(color)
#   true -> "This catches everything else"
# end

# This is useful we need more than one match for the code to be executed
result = {:ok, "result"}
error = {:error, "error"}

with {:ok, result} <- result do
  result
end

with {:ok, result} <- result, do: result

with {:ok, result} <- result,
    {:error, result} <- error do
  "this gets executed"
end

with {:ok, "result"} <- result do
  result
else
  {:ok, _result} -> "This gets executed if above does not"
end
