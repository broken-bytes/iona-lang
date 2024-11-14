---
sidebar_position: 2
description: Get Iona up and running
---

# Installation

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Installation is done by downloading and executing the script for your development platform. The script automatically downloads the compiler, standard library and runtime.

*Replace `<version>` with the desired version*

<Tabs>

<TabItem value="Windows" label="Windows" default>

```powershell
curl -LJO https://ionalang.org/install.bat && call install.bat <version>
```

</TabItem>

<TabItem value="macOS" label="macOS">

```bash
curl -sSL https://ionalang.org/install.sh | sh -s --<version>
```

</TabItem>

<TabItem value="Linux" label="Linux">

```bash
curl -sSL https://ionalang.org/install.sh | sh -s --<version>
```

</TabItem>

</Tabs>

## Quick Start

After installation, run `iona init`. Cove is Iona's package manager. It allows to create and build projects without all the hassle.
To build the application, run `cove build`. To run it, run `cove run`.