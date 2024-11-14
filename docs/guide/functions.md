---
sidebar_position: 5
description: Functions in Iona
---

# Functions

In Iona, there are two different types of functions, *mutating* functions and *reading* functions. By default, every functions is reading, disallowing mutation to its object.

## Reading functions

Reading functions are only used to calculate values, return properties etc. They cannot alter the state of their object but only *read* it.

A reading function is defined like this:

```Iona
fn foo() -> String {
    return ""
}

print(foo())
```

:::tip
Always use reading functions when you don't need to alter state. It makes code more concise and allows understanding side effects more easily.
:::

Functions may have parameters as well, like this:

```Iona
fn foo(bar: String) -> String {
    return "Foo" + bar
}

print(foo(bar: "Bar"))
```

## Mutating functions

If the function has a side effect, e.g. it alters the state of its object, the function must be declared at mutating, otherwise the compiler disallows such mutations:

```Iona
var value = 0

mut fn foo() -> Int {
    value += 1
    return value
}

// Prints 1
print(foo())
```

Just like reading functions, mutating functions can have parameters:

```Iona
var value = 0

mut fn foo(newValue: Int) -> Int {
    value = newValue
    return value
}

// Prints 23
print(foo(newValue: 23))
```

## Parameters

Parameters have some specialities in Iona as well. There are three different ways of passing parameters. By value (value types only), and by reference. Additionally, the mutability of these parameters is also defined in the function signature.

For this, there are two keywords in Iona. `out` and `mut`.

- `out` Allows mutation of an object and the reference, which means that the reference *and* the object it points to may be changed.
- `mut` Allows only mutation of the object, not the pointer

If no modifier is applied, the object may neither change nor the reference to it, resulting in a truly immutable parameter.

An example of a function having a `mut` pointer parameter:

```Iona
fn foo(result: mut SomeReferenceType, value1: Int, value2: Int) {
    // Changes the underlying value of result, not the reference
    result.value = value1 + value2
}
```

An example of a function having a `out` pointer parameter:

```Iona
fn foo(result: mut SomeReferenceType, value1: Int, value2: Int) {
    // Creates a new SomeReferenceType on the heap and assigns its reference to result
    result = SomeReferenceType()
    // Assigns the result of value1 + value2 to the underlying memory of result
    result.value = value1 + value2
}
```

:::note
In Iona, everything is immutable by default. This prevents unexpected side effects.
:::
