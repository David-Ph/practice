defmodule TestProject do
  @moduledoc """
  Generates random password depending on options given
  """

  @allowed_options [:length, :numbers, :uppercase, :symbols]


  @doc """
  Hello world.

  ## Examples

      iex> TestProject.hello()
      :world

  """

  @spec generate(options :: map()) :: {:ok, bitstring()} | {:error, bitstring()}
  def generate(options) do
    length = Map.has_key?(options, "length")
    validate_length(length, options)
  end

  defp validate_length(false, _options), do: {:error, "Please provide a length"}

  defp validate_length(true, options) do
    numbers = Enum.map(0..9, &Integer.to_string(&1))
    length = options["length"]
    length = String.contains?(length, numbers)
    validate_length_is_integer(length, options)
  end

  defp validate_length_is_integer(false, _options), do: {:error, "Only integers allowed for length"}

  defp validate_length_is_integer(true, options) do
    length = options["length"] |> String.trim() |> String.to_integer()
    options_without_length = Map.delete(options, "length")
    options_values = Map.values(options_without_length)
    value =
      options_values
      |> Enum.all?(fn x -> String.to_atom(x) |> is_boolean() end)

      validate_options_values_are_booleans(value, length, options_without_length)
  end

  defp validate_options_values_are_booleans(false, _length, _options) do
    {:error, "Only booleans allowed for options value"}
  end

  defp validate_options_values_are_booleans(true, length, options) do
    options = included_options(options)
    invalid_options? = options |> Enum.any?(&(&1 not in @allowed_options))
  end
end
