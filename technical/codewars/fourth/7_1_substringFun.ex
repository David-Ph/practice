

defmodule Main do
  def substring_fun(words) do
    Enum.reduce(Enum.with_index(words), "", fn {string, index}, acc ->
       acc <> String.at(string, index)
      end)
  end
end

IO.inspect(Main.substring_fun(["Yoda", "Best", "Has"]))
