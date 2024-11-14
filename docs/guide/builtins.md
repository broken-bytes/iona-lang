---
sidebar_position: 2
description: Builtin Types
---

# Builtin Types

Iona comes with a number of builtin types. They are zero cost abstractions over the underlying raw types.
This means even though they provide additional features and syntax, they do not add to the runtime cost of applications.

## Integer Types

Iona comes with different integer types, all with different bit-sizes, either signed or unsigned. An integer can only hold real numbers, no fractionals.

These are the integer types available:

- NInt:    Platform-dependent signed integer, either 32 or 64 bit.
- NUInt:   Platform-dependent unsigned integer, either 32 or 64 bit.
- Int8:   8-bit signed integer
- Int16:  16-bit signed integer
- Int32:  32-bit signed integer
- Int64:  64-bit signed integer
- UInt8:  8-bit unsigned integer
- UInt16: 16-bit unsigned integer
- UInt32: 32-bit unsigned integer
- UInt64: 64-bit unsigned integer

Every integer comnes with bounds checking, resulting in an error when an overflow occurs.
Additionally, integers cannot be used in expressions together, unless converted to the right-sized integer.
There is no implicit integer promotion in Iona. Each integer is treated like a different type to ensure safety.

## Boolean

Iona has a boolean type, holding `true` or `false`. A boolean is represented as a single byte in memory. While this wastes a few bits, it results in faster access times and less cache misses.

## Floating Point Numbers

Iona provides floating-point (or fractional) numbers that enable the storage of any rational number.

There are two different types of floating point numbers in Iona:

- Float: 32-bit fractional
- Double: 64-bit fractional

Both types are signed and differ only in their precision (i.e., the number of bits used to represent the number).

## Char

Char is an alias for an `Int8` used to represent that a value shall be used as a character and not a number. It has no functional difference.

:::note
Iona includes many more types in its standard library. The corresponding modules aren't imported by default, though.
:::
