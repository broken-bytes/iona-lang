---
sidebar_position: 9
description: Contracts in Iona
---

# Contracts

Contracts are something that a struct or class must adhere to. They are like like contracts in the real world. One party defines the contract and the other one agrees on the terms.

This is exactly how contracts work in Iona. A type has to fulfill a contract if it wants to use it.

This is how a contract is defined:

```Iona
contract Buyable {
    mut fn buy()
}
```

The code can be read as "define a contract that ensures all signing parties need to implement a mutating buy function".

Accordingly, a type may use a contract like this:

```Iona
struct Ticket: Buyable {
    var isSold = false

    mut fn buy() {
        isSold = true
    }
}
```

Contracts may also require the type to implement some properties:

```Iona
contract Countable {
    var count: Int { get; set; }
}

struct Counter: Countable {
    var count: Int = 0
}
```

:::tip
When properties in a contract only require a `get` block, the conforming type can use `let` instead of `var`:

```Iona
contract Countable {
    var count: Int { get }
}

struct Counter: Countable {
    let count: Int = 0
}
```

:::

Additionally, contracts can force to specifiy a generic:

```Iona
contract Container<T> {
    var items: [T]

    mut fn append(item: T) {
        // Add to the items
    }
}

struct List: Container<Int> {
    var items: [Int]

    mut fn append(item: Int) {
        ...
    }
}
```

Generics can also have constraints:

```Iona
contract Container<T: where T is Numeric> {
    var items: [T]

    mut fn append(item: T) {
        // Add to the items
    }
}

// Error: User is not a numeric type
struct List: Container<User> {
    var items: [User]

    mut fn append(item: User) {
        ...
    }
}
```

:::tip
Note how structs are used throughout most examples.

In fact, Iona favours immutable data structures and therefore structs are in most cases the proposed way.
:::
