defmodule Main do
  def repeatSingle(numbers) do
    uniqueNumbers = Enum.reduce(numbers, %{}, fn num, acc ->
      if Map.has_key?(acc, num) do
        Map.delete(acc, num)
      else
        Map.put(acc, num, true)
      end
    end)

    Enum.reduce(Map.keys(uniqueNumbers), 0, &(&1 + &2))
  end
end

IO.inspect(Main.repeatSingle([4, 5, 7, 5, 4, 8]))
