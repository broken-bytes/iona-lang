---
sidebar_position: 8
description: Classes in Iona
---

# Classes

Just like Structs, classes are reusable bits of code that contain data and provide functionality in a scoped and secure way.
Unlike structs, which are value types, classes in Iona are always reference types.

A struct is defined like this:

```Iona
class User {
    ...
}
```

Classes may contain properties (variables) and functions (both reading and mutating):

```Iona
class Ticket {
    let price = 22.99
    let seat = 3
    let row = 23
}

class TicketServer {
    var leftTickets: [Ticket] = [Ticket { price: 22.99, seat: 2, row: 23 }]

    mut fn buyTicket(row: Int, seat: Int) {
        // Find ticket and remove it from the array ...
        self.leftTickets.remove(...)
    }

    fn availableTickets() -> [Ticket]& {
        return self.leftTickets
    }
}
```

:::note
Functions inside classes are called *methods*.

They automatically have access to `self`. `self` always points to the object itself.
:::

## Initialisation

Every class needs at least one init that assigns *all* properties:

```Iona
class Ticket {
    let price: Float

    init(price: Float) {
        self.price = price
    }
}

var ticket = Ticket(price: 23.99)
```

:::note
There is no auto-generated init for classes.
:::

One `init` may call another `init`, but there must be one `default init` that all other `init`s call:

```Iona
class Ticket {
    let price: Float

    default init(price: Float) {
        self.price = price
    }

    init(price: Float, tax: Float) {
        init(price: price - (price * tax))
    }
}

var ticket = Ticket(price: 23.99, tax: 0.1)
```

When using init, every property must be initialised:

```Iona
class Ticket {
    let price: Float
    let seat: Int

    init(price: Float) {
        self.price = price
        // Error: seat was not initialised in init
    }
}

var ticket = Ticket(price: 23.99)
```

## Inheritance

Classes may either conform to a contract (implementing its properties and methods) or inherit from another class (subclassing).

Subclassing:

```Iona
class Device {
    let storage: Float

    init(storage: Float) {
        self.storage = storage
    }

    fn readFrom(index: Int) {
        ...
    }
}

class Phone: Device {
    init {
        super.init(storage: 512)
    }
}


var phone = Phone()
phone.readFrom(index: 0)
```

Conformance:

```Iona
contract Storage {
    var storage: Int { get }

    fn store(index: Int)
}

class SolidStateDrive: Storage {
    var storage: Int

    init(size: Int) {
        self.storage = size
    }

    fn store(index: Int) {
        ...
    }
}
```
