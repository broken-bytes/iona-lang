---
sidebar_position: 4
description: Control flow in Iona
---

# Control flow

Iona provides a number of control flow structures that make it easy to write understandable and concise code.
From `if else` over `when` to `guard` statements and ultimately `for` and `while` loops.

## Conditional Statements

### If else

Iona allows the traditional if/else if/else branches like most other c-based languages:

```Iona
if value == 1 {
    ...
} else if value == 2 {
    ...
} else {
    ...
}
```

Unlike some other languages, they can be expressions and not just statements as well:

```Iona
var data = if value == 1 {
    1
} else if value == 2 {
    2
} else {
    3
}
```

:::warning
If else can only be used as an expression if every branch only has a single expression.

This doesn't work:

```Iona
var data = if value == 1 {
    var user = 3
    user
} else if value == 2 {
    2
} else {
    3
}
```

:::

### When

Iona comes with a keyword different to most other languages. When behaves like `switch` but comes with a few extras.
Instead of having multiple `case`, and sometimes a `default`, cases, it provides are more intuitive approach. Cases can be ranges or values, not just values:

```Iona
when value {
    0...3 -> ...
    4 -> ...
} else {
    ...
}
```

Note how the first case is a range from 0-3 and the second case is just 4.

Additionally, Instead of a `default` case, Iona introduces the `else` branch for `when`, making code more intuitive to read and write.

`when` also works with conditions:

```Iona
var str = String("Foo")

when str {
    str == "Foo" -> ...
    str != "Foo" -> ...
}
```

:::note
There is no implicit fallthrough in Iona for `when`. If multiple cases are supposed to do the same, they can be written like this:

```Iona
when str {
    "Foo", "foo" -> ...
} else {
    ...
}
```

Alternatively the `next` keyword indicates that the current case should be ended and the next one shall be executed:

```Iona
when str {
    "Foo" -> next
    "foo" -> ...
} else {
    ...
}
```

:::

## Loops

### For loops

Unlike other languages, Iona only has a single `for` loop. There is no separate for, for-in, and for-each loop. `for` is used for all of these scenarios.

Iterating over a range:

```Iona
for x in 0...3 {
    ...
}
```

if the index in range-based loop is not needed, it can be discarded by using `_`:

```Iona
for _ in 0...3 {
    ...
}
```

Iterating over the elements of an array:

```Iona
var items: [Int] = [1, 2, 3]

for item in items {
    ...
}
```

### While loops

While loops repeat their body until the condition of the loop's head is no longer fulfilled:

```Iona
var isLoggedIn = true

while isLoggedIn {
    ...
}
```

While loops also come with their cousin, `do-while`. Do-while behaves exactly the same, just that the condition is evaluated **after** each run, which means a `do-while` loop **always** runs at least once:

```Iona
var isLoggedIn = true

do {
    ...
} while isLoggedIn
```

:::tip
You can end the current iteration of every loop with the keyword `continue`:

```Iona
while foo {
    if bar {
        continue
    }
}
```

:::
