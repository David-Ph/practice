# Pipe operator

The `|>` symbol in elixir passes the result of the expression into the first argument of the next expression

```elixir
string = " my string "

processed = string |> String.downcase()
  |> String.trim()
  |> String.split()
  |> Enum.join("-")

IO.puts(processed) # "my-string"
```
