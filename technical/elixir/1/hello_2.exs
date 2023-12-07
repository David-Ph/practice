# sum = fn a, b -> a + b end

# IO.puts(sum.(2, 3)) # 5

# sumShortHand = &(&1 + &2)
# IO.puts(sumShortHand.(2, 3)) # 5

# say_hello = fn name -> "Hello, #{name}" end
# IO.puts(say_hello.("John"))

# say_hello_short = &("Hello, #{&1}. Greetings from #{&2}")
# IO.puts(say_hello_short.("John", "Bob"))

# handle_result = fn
#   {:ok, result} -> result
#   {:error, error} -> error
# end

# IO.puts(handle_result.({:ok, "success"}))

# defmodule Math do
#   def sum(num1, num2) do
#     num1 + num2
#   end
# end

# defmodule Greet do
#   def hello(name) do
#     greeting(name)
#   end

#   defp greeting(name) do
#     "Hello, #{name}"
#   end
# end

# IO.puts(Math.sum(1, 2)) # 3
# IO.puts(Greet.hello("Bob")) # Hello, Bob

# defmodule Greetings do
#   @name "George"

#   def hello(), do: "Hello #{@name}"
#   def morning(), do: "Good morning, #{@name}"
#   def night(), do: "Good night, #{@name}"
# end

# IO.puts(Greetings.hello())

# defmodule User do
#   defstruct [:name, :age]
# end

# defmodule Main do
#   def createUser(name, age) do
#     %User{name: name, age: age}
#   end
# end

# u = Main.createUser("Boy", 20)
# IO.puts(u.name)
# t = Main.createUser("Hello", 25)
# IO.puts(t.name)
# IO.puts(u.name)


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

defmodule ImportExample do
  # import Math, only: [sum: 2] # the 2 is the number of arguments
  import Math, except: [display_result: 0] # the 0 is the number of arguments


  def import_sum(num1, num2) do
    sum(num1, num2)
  end
end

IO.puts(ImportExample.import_sum(1, 2))
