# Boolean operators

## and, or, not

```elixir
true and false # false
true and "result" # "result"
false and "result" # false

false or true # true
false or false # false
false or "result" # "result"

not false # true
not true # true
```

## &&, ||, !\

These operators can accept any type of arguments, Everything that is not `false` or `nil` gets evaluated to true

```elixir
"test" && 12 # 12
false && "test" # false
11 && 100 # 100
nil && 12 # nil

100 || 11 # 100
11 || nil # 11
nil || 11 # 11
false || "test" # "test"

!nil # true
!12 # false
!"abc" # false
```

## Comparison

```elixir
1 === 1 # true
1 === 1.0 # false
"false" === "False" # false
1 !== 1 # false
1 !== 1.0 # true

1 == 1 # true
1 == 1.0 # true
"false" == "False" # true

11 > 1 # true
11 >= 11 # true
```

## Membership operator

checks if element of the left side is inside the element on the right side

```elixir
1 in [1, 2, 3] # true
4 in [1, 2, 3] # false

1 not in [1, 2, 3] # false
4 not in [1, 2, 3] # true
```
