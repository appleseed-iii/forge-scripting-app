# Getting started with a Vite App

```sh
yarn create vite@latest app-name --template react-ts
cd app-name
git init

# install deps
yarn add ethers @tanstack/react-query wagmi
yarn add --dev typechain @typechain/ethers-v5 typechain-target-react-query-wagmi

# add the abi
mkdir src/abi
touch src/abi/NFT.json
# paste in the abi
# JUST THE ARRAY

mkdir types
# had to remove the leading / on /types/react-query-hooks
yarn run typechain --target react-query-wagmi --out-dir types/react-query-hooks src/abi/*.json
# had to add src/abi/*.json
yarn run typechain --target ethers-v5 --out-dir types src/abi/*.json
```

## Questions

1. should types directory be committed?
    a. typechain says not to
    b. but the react-query-hooks feel like they should...
2. should I move the types directory inside of src
    a. feels like it would be easier to import from src
3. the mutation hooks require unnecessary args in the hook invocation
    a. see useMintTo
    b. also my contract has two `safeTransferFrom` functions with different args, we need to handle this in the hook codegen
  