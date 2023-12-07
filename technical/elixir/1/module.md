# Modules

```elixir

defmodule Math do
  def sum(num1, num2) do
    num1 + num2
  end
end

defmodule Greet do
  def hello(name) do
    greeting(name)
  end

  defp greeting(name) do
    "Hello, #{name}"
  end
end

IO.puts(Math.sum(1, 2)) # 3
IO.puts(Greet.hello("Bob")) # Hello, Bob

```

## Module Attributes

They can be used as constants

```elixir
defmodule Greetings do
  @name "George"

  def hello(), do: "Hello #{@name}"
  def morning(), do: "Good morning, #{@name}"
  def night(), do: "Good night, #{@name}"
end

IO.puts(Greetings.hello())

```

## defstruct

Structs are special maps with a defined set of keys and default values. A struct must be defined within a module. It is common for struct to be the only thing defined within a module

```elixir
defmodule User do
  defstruct [:name, :age]
end

defmodule Main do
  def createUser(name, age) do
    %User{name: name, age: age}
  end
end

u = Main.createUser("Boy", 20)
IO.puts(u.name)
t = Main.createUser("Hello", 25)
IO.puts(t.name)
IO.puts(u.name)


```

## Alias

```elixir
defmodule Display.Result do
  def math(result) do
    "Your result is #{result}"
  end
end

defmodule Math do
  alias Display.Result, as: Show

  def sum(num1, num2) do
    num1 + num2
  end

  def display_result() do
    result = sum(1, 2)
    # Result.math(result)
    Show.math(result)
  end
end
```

## Import

```elixir

defmodule Math do
  def sum(num1, num2) do
    num1 + num2
  end
end

defmodule ImportExample do
  import Math, only: [sum: 2] # the 2 is the number of arguments
  import Math, except: [display: 0] # the 2 is the number of arguments

  def import_sum(num1, num2) do
    sum(num1, num2)
  end
end

IO.puts(ImportExample.import_sum(1, 2))

```
