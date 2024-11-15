---
sidebar_position: 1
title: Welcome
description: A Modern Language for a Secure, Concurrent World
---

# Iona Programming Language

## Overview
Iona is a modern, highly asynchronous programming language designed for building scalable and efficient software. Iona focuses on modern practices like immutability, asynchronous computing and composition.

## Features
- 🔮 **Powered by .NET**: Iona runs on .NET, allowing it to consume any CLR compatible language.
- 🧊 **Immutability**: Immutable data structures and functions by default to increase robustness and predictability. 
- 🧵 **Asynchronous by Nature**: Iona features sophasticated programming paradigms to make asynchronous programming enjoyable.
- 🔮 **Modern Syntax**: Clean and expressive syntax, enabling developers to achieve more with fewer lines and clear readability.
- 🎚️ **Scalability**: Iona is by nature scalable. Go small or run big.
- 🔗 **Strong Typing with Inference**: Strong typing capabilities with intelligent type inference.
- 🔋 **Batteries included**: Sophisticated standard library and first-class frameworks for various of tasks.
- 🔒 **Secure by design**: Highest standards on security, ensuring your apps are safe by default.

## Installation
```bash
# Replace <version> with the desired version
curl -sSL https://ionalang.org/install.sh | sh -s -- <version>
```

## Quick Start
A simple "Hello, World!" in Iona:

```iona
class World {
  let name: String

  init(name: String) {
    self.name = name
  }

  fn hello() -> String {
    "Hello World"
  }
}

fn main() {
    let world = World()
    print(world.hello())
}
```

## Community
- **GitHub**: [github.com/Iona-lang](https://github.com/broken-bytes/Iona)
- **Discord**: Join our [Iona Discord Community](https://discord.gg/iona-lang)

## Contributing
We love contributions! If you're interested in contributing, please read our [Contributing Guide](https://github.com/broken-bytes/Iona/CONTRIBUTING.md).

