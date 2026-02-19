# @cheatron/native-bindings

Low-level Win32 FFI bindings for Cheatron. This package provides raw FFI signatures and constants for Windows DLLs like `kernel32.dll` and `msvcrt.dll`.

## Features

- **Raw FFI**: Typed definitions for Bun FFI.
- **Kernel32**: Process, thread, and memory management signatures.
- **MSVCRT**: Standard C runtime function signatures.
- **Win32-ext**: Integrated ergonomic types and constants.

## Installation

```bash
bun add @cheatron/native-bindings
```

## Usage

```typescript
import { Kernel32Impl } from '@cheatron/native-bindings';

const pid = Kernel32Impl.GetCurrentProcessId();
```
