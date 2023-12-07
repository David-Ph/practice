string = " my string "

processed = string |> String.downcase()
  |> String.trim()
  |> String.split()
  |> Enum.join("-")

IO.puts(processed) # "my-string"
