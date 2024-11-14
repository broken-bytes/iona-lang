---
sidebar_position: 1
description: The three different storage types in Iona
---

# Variables, Mutables, Immutables

Iona provides *variables* that allow developers to store values in a named storage. There are three different types of *variables* in Iona.
Variables (fully mutable), Mutables (partially mutable), and Immutables (immutable).

Every variable has a fixed type that cannot be changed after declaration in Iona.
This way, the best possible type-safety is ensured, leaving no room for type or implicit conversion errors.

## The right level of immutability

Iona has a different approach on variables as seen in other languages. Instead of providing mutable and immutable(not really) storage types, it offers three different levels of immutability.

This way, the meaning and behaviour of each piece of code is clearly readable without having to scim through all the surrounding blocks of code.

### Variables

Variables in Iona are defined via `var`. They behave like variables in every language. Both the reference and the value can be changed. For pointers this means the pointer can be changed, and the memory it points to.

### Mutables

Mutables are defined via `val`. Mutables are one level less mutable than variables. Instead of allowing change to the reference or pointer, they only allow changes to the underlying value or memory.
This is the same behaviour like found in languages like Kotlin (`val`) or Swift (`let`).

### Immutables

Immutables are defined via `let`. Unlike in most other modern languages, Iona offers a third level of immutability. Immutables neither allow changes to the object, nor to the reference. They are truly immutable references.

## Why a third level?

Many languages mitigate the issue of truly immutable objects by using a constant object that itself only has constant properties. While this is a suitable way of doing it, it comes with drawbacks:

- The object is immutable for every part of the code except where its constructor is called.
- It's impossible to change the object's properties at one part of the code and let other parts listen to it.
- True immutability is subject to conventions within the codebase - thus objects can become mutable any time if a developer adds at least one mutable property.

These drawbacks lead to the decision to incorparate a third level of immutability.

:::note
Immutables are only immutable on the `let` reference. There can be other, mutable references to the same object.
Immutables only guarantee that the object cannot get mutated from that very reference.
:::

## Declaring variables

The three different storage types are declared like this:

```Iona
// A variable
var data: Int = 3
// A mutable
val data: Int = 3
// An immutable
let data: Int = 3
```

If there are multiple branches like a `when` or `if/else`, the variable may be declared at top but only defined in each branch:

```Iona
var data: Int
if someValue {
    data = 3
} else {
    data = 2
}
```

:::note
Iona does **not** not allow defining multiple variables in a single line like this: var x = 0, y = 1, z = 2.
:::

## Type-inference

Iona also comes with a powerful feature called *type-inference*.
Type-inference allows developers to omit the type from the variable declaration as long as the variable declaration includes an assignment. This assignment is evaluated at compile time to get the correct type.

If the variable shall not have an assignment immediately, the type must be defined. Every variable needs a value, otherwise the compiler will issue an error. This is to enforce memory safety by default, disallowing empty variables or unassigned memory.

This is what type inference looks like:

```Iona
// Inferred to be Int because `3` is an integer literal
var data = 3
```

## Optionals

If variables should be allowed to be empty or uninitialised, they can be declared *optional*.
Optionals are wrappers over regular variables, just that they allow them to **not** have a value. Optionals are defined by appending `?` to the type.
Optionals are the only types that allow `none`.

:::note
Only variables (`var`) can be declared optionals. This is to ensure that the reference may be changed, so that the variable does hold a value at a later stage.
:::

When an optional has *no* value, it holds a special value called `none`.

This is how to declare optionals:

```Iona
var data: Int? = .none
data = 3
```

### Optional unwrapping

Optionals need unwrapping before their values can be used. Unwrapping an optional is done by either using `?` (safe unwrapping) or `!` (force unwrapping).
Safe unwrapping only executes the code when the optional is not `none`, resuling in safer code. `!` should only be used when it is certain that the optional holds a value. `!` skips runtime checks ensuring increased performance but comes at the cost of possible memory read errors, leading to crashes that aren't catchable.

This is what unwrapping looks like:

```Iona
// Empty value variable
var value: Int? = .none
// Assign to a new variable (value2), use a default value if value is `none`
var value2 = value? ?? 2
// Skip safety checks, unwrap the optional and assign it to the other variable
// In this setup, this would crash as value is `none`
var value3 = value!
```

:::danger
Force-unwrapping should only be done when it can be made 100% sure that the optional is not `none`. Force-unwrapping an empty optional crashes the application as it results in a `panic`.

There is **no** way to prevent such crashes.
:::
