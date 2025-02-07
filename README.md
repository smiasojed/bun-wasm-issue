This repo demonstrates how to reproduce the `Bun` issue.
The issue is only visible when using `Bun` on `Linux` (in my case, Ubuntu OS).
I could not reproduce it using `Node`.
Error message: `RuntimeError: Out of bounds memory access (evaluating 'getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6)')`

## How to reprduce the issue

Install `Bun`

`curl -fsSL https://bun.sh/install | bash -s bun-v1.2.2`

Download solidity compiler

`curl -L https://binaries.soliditylang.org/wasm/soljson-latest.js -o soljson.js`

Run test

```bash
./issue.sh
```
