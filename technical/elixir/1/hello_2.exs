sum = fn a, b -> a + b end

IO.puts(sum.(2, 3)) # 5

sumShortHand = &(&1 + &2)
IO.puts(sumShortHand.(2, 3)) # 5

say_hello = fn name -> "Hello, #{name}" end
IO.puts(say_hello.("John"))

say_hello_short = &("Hello, #{&1}. Greetings from #{&2}")
IO.puts(say_hello_short.("John", "Bob"))

handle_result = fn
  {:ok, result} -> result
  {:error, error} -> error
end

IO.puts(handle_result.({:ok, "success"}))
