---
sidebar_position: 3
description: Comments in Iona
---

# Comments

## Non-functional comments

There are two different types of comments in Iona, singleline and multiline comments:

```Iona
// Single line comment
/*
    Multiline comment
    Another line
*/
```

## Documentation

Comments also serve documentation purposes:

```Iona
/**
*   description: Adds a user to the list
*   parameters:
*       - user The user to be added
*   returns: True on success, false on error
*/
fn add(user: User) -> Bool {
    ...
}
```

Documentation blocks are started with `/**` (note the double `*`). They use regular markdown plus some extras to allow documentation for types.
These are the additional features for documentation:

- Keywords:
  - description: Adds a description to the documentation of the type/function/property
  - parameters: A list of parameters defined by `name` `Description`
  - returns: Described the return value if a function
- Syntax:
  - @other Links to another type allowing to jump to it immediately.
