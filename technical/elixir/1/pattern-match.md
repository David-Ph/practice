# Pattern Match

The match operator is not only used to match against simple values, but it is also useful for destructuring more complex data types. For example, we can pattern match on tuples:

```elixir
{a, b, c} = {:hello, "world", 42}
{:hello, "world", 42}
> a
:hello
> b
"world"
```

A pattern match error will occur if the sides can't be matched, for example if the tuples have different sizes:

```elixir
{a, b, c} = {:hello, "world"}
** (MatchError) no match of right hand side value: {:hello, "world"}
```

More interestingly, we can match on specific values. The example below asserts that the left side will only match the right side when the right side is a tuple that starts with the atom :ok:

```elixir
> {:ok, result} = {:ok, 13}
{:ok, 13}
> result
13

> {:ok, result} = {:error, :oops}
** (MatchError) no match of right hand side value: {:error, :oops}
```

```elixir

result = {:ok, "Success"}

case result do
  {:ok, "Asd"} -> IO.puts("This matches")
  {:error, "Error"} -> IO.puts("This won't matches")
  _ -> IO.puts("This matches against anything else")
end

```