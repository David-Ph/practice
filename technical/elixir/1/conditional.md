# Condtional

## if and unless

```elixir
color = "blue"

if color == "blue" do
  "yes"
end
```

```elixir
if color == "blue", do: "yes"
```

```elixir
unless color == "blue", do: "yes"
```

```elixir
color = "blue"

if color == "blue" do
  "yes"
else
  "no"
end
```

```elixir
if color == "blue", do: "yes", else: "no"
```

## Case

```elixir
result = {:ok, "Success"}

case result do
  {:ok, result} -> "This matches"
  {:error, error} -> "This won't matches"
  _ -> "This matches against anything else"
end
```

## Cond

```elixir
color = "blue"

cond do
  color =="blue" -> IO.puts(color)
  color =="red" -> IO.puts(color)
  color =="green" -> IO.puts(color)
end
```
