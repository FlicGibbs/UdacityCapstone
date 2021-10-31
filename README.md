# Udacity Capstone Project
## Test Results
> **To Test:** Run **truffle test** from the eth-contracts folder
> 
### Test Results:

TestERC721Mintable

![TestErc721Mintable](/assets/TestErc721Mintable.png)

TestSquareVerifier

![TestSquareVerifier](/assets/TestSquareVerifier.png)

TestSolnSquareVerifier

![TestSolnSquareVerifier](/assets/TestSolnSquareVerifier.png)

## Deployment:
> **To Migrate:** Run **truffle migrate --network rinkeby** (with optional **--reset**)

**ERC721Mintable contract address**: *0x1a1BdE7D96bf13d07dB92BB5C594C19e64449Ce1*

**SquareVerifier contract address**: *0x9302d307299f2daD228B24EF3eac9Fb6b8A3F11C*

**SolnSquareVerifier contract address**: *0xD096f8D4579265454673a0cAaf13f54BE2d083C9*

<details>
  <summary>Click to see migration results</summary>
  
```
Starting migrations...
======================
> Network name:    'rinkeby'
> Network id:      4
> Block gas limit: 30000000 (0x1c9c380)
...

2_deploy_contracts.js
=====================

   Replacing 'ERC721Mintable'
   --------------------------
   > transaction hash:    0x35dbcdc88d40b895b0f1ad86863949e248d6b12267346f93c1280d405aedeef9
   > Blocks: 0            Seconds: 8
   > contract address:    0x1a1BdE7D96bf13d07dB92BB5C594C19e64449Ce1
   > block number:        9549008
   > block timestamp:     1635495391
   > account:             0xF669A32fD2ac2eD1a6AE311796Ac86458f646A7a
   > balance:             7.369598989711353262
   > gas used:            2025193 (0x1ee6e9)
   > gas price:           1.000000021 gwei
   > value sent:          0 ETH
   > total cost:          0.002025193042529053 ETH

   Replacing 'SquareVerifier'
   --------------------------
   > transaction hash:    0xdb60e2c9657a3bf679dc145339f3f013c3970efbb0d08805fd6835262705b352
   > Blocks: 0            Seconds: 12
   > contract address:    0x9302d307299f2daD228B24EF3eac9Fb6b8A3F11C
   > block number:        9549009
   > block timestamp:     1635495406
   > account:             0xF669A32fD2ac2eD1a6AE311796Ac86458f646A7a
   > balance:             7.36872779769305823
   > gas used:            871192 (0xd4b18)
   > gas price:           1.000000021 gwei
   > value sent:          0 ETH
   > total cost:          0.000871192018295032 ETH

   Replacing 'SolnSquareVerifier'
   ------------------------------
   > transaction hash:    0xb3f48d0152a91ac03641254b9f1b4c71633399c1bffd74dc85e2766a432ade33
   > Blocks: 1            Seconds: 12
   > contract address:    0xD096f8D4579265454673a0cAaf13f54BE2d083C9
   > block number:        9549010
   > block timestamp:     1635495421
   > account:             0xF669A32fD2ac2eD1a6AE311796Ac86458f646A7a
   > balance:             7.36574017563330579
   > gas used:            2987622 (0x2d9666)
   > gas price:           1.00000002 gwei
   > value sent:          0 ETH
   > total cost:          0.00298762205975244 ETH
```
</details>

## Interact with Contract

 ### SolnSquareVerifier abi:
 ![Mint Token](/assets/Mint%20Token%202.png)
  <details>
  <summary>Click to view abi</summary>

 ```
 [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "symbol",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "baseTokenURI",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "approved",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "pausedBy",
          "type": "address"
        }
      ],
      "name": "Paused",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "tokenOwner",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "indexed": false,
          "internalType": "struct SolnSquareVerifier.Solution",
          "name": "solution",
          "type": "tuple"
        }
      ],
      "name": "SolutionAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "unPausedBy",
          "type": "address"
        }
      ],
      "name": "Unpaused",
      "type": "event"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "Owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "bool",
          "name": "paused",
          "type": "bool"
        }
      ],
      "name": "Pause",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "_myid",
          "type": "bytes32"
        },
        {
          "internalType": "string",
          "name": "_result",
          "type": "string"
        }
      ],
      "name": "__callback",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "_myid",
          "type": "bytes32"
        },
        {
          "internalType": "string",
          "name": "_result",
          "type": "string"
        },
        {
          "internalType": "bytes",
          "name": "_proof",
          "type": "bytes"
        }
      ],
      "name": "__callback",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "baseTokenURI",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "mint",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "solutionCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenByIndex",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenOfOwnerByIndex",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "tokenURI",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256[2]",
          "name": "a",
          "type": "uint256[2]"
        },
        {
          "internalType": "uint256[2][2]",
          "name": "b",
          "type": "uint256[2][2]"
        },
        {
          "internalType": "uint256[2]",
          "name": "c",
          "type": "uint256[2]"
        },
        {
          "internalType": "uint256[2]",
          "name": "input",
          "type": "uint256[2]"
        }
      ],
      "name": "verifyTx",
      "outputs": [
        {
          "internalType": "bool",
          "name": "r",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "tokenAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "uint256[2]",
          "name": "a",
          "type": "uint256[2]"
        },
        {
          "internalType": "uint256[2][2]",
          "name": "b",
          "type": "uint256[2][2]"
        },
        {
          "internalType": "uint256[2]",
          "name": "c",
          "type": "uint256[2]"
        },
        {
          "internalType": "uint256[2]",
          "name": "input",
          "type": "uint256[2]"
        }
      ],
      "name": "AddSolution",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "tokenAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "uint256[2]",
          "name": "a",
          "type": "uint256[2]"
        },
        {
          "internalType": "uint256[2][2]",
          "name": "b",
          "type": "uint256[2][2]"
        },
        {
          "internalType": "uint256[2]",
          "name": "c",
          "type": "uint256[2]"
        },
        {
          "internalType": "uint256[2]",
          "name": "input",
          "type": "uint256[2]"
        }
      ],
      "name": "mintNewNFT",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]
```
</details>

## Minted Tokens

SolnSquareVerifier Address: 0xDbeD88340D236bCEb36a1BBACeD452209F51Fa88
|# | Token ID | Transaction Detail
|--|--|--|
|1.|16| https://rinkeby.etherscan.io/tx/0xb2806dd1c1e6b07c813d4f06baa08ec9611a2daea4fbe660355fb6bf8e3bafd6
|2.|12|https://rinkeby.etherscan.io/tx/0x9f43f5340c1b8e9aa9093bcf686065b23b81d1b270a418324ef04789a28975c5
|3.|50|https://rinkeby.etherscan.io/tx/0xbf2dc03541e4b03bfc5e9fb91cae44737d83d7a1d6995d53a666ec3f6e516b36
|4.|34|https://rinkeby.etherscan.io/tx/0x1e60dd46adedd6bcac9b745c2b307a0ec71520d541906b8ed7495970e6e1b198
|5.|37|https://rinkeby.etherscan.io/tx/0x11d539d9b5914aa27faa11ceda7e940944a45bcf3491fa4d0f19179037dcf84d
|6.|6|https://rinkeby.etherscan.io/tx/0x2bd75279776930df0cf0139368ac2177c7a075fd5c1c4e9eb6b1f1c8781efab7
|7.|41|https://rinkeby.etherscan.io/tx/0x72d123dca1643e97cb6797dcfcb5ba1cbb768b7428b7a2fa050436b63aff05bb
|8.|44|https://rinkeby.etherscan.io/tx/0xa4e61d5fc9e62305b464af4b8f2e78718bc92570766595b1bddb062c29929d01
|9.|25|https://rinkeby.etherscan.io/tx/0x6270ee617b3bf9b7e3aec21ffaaf7c0726cb21388422030c1a708315d1fab695
|10.|2|https://rinkeby.etherscan.io/tx/0xaf054ffed7ac55f6adbfbae221487a27b0e3ecc44b169ba909df63cc90c26cf2

## OpenSea Collection
> **Hamlet Homes:** https://testnets.opensea.io/collection/hamlet-homes

![Hamlet Homes](/assets/OpenSea%20for%20sale.png)

|Token ID | Listing | Buy back transaction|
|--|--|--|
|2|[Listing Token 2](https://testnets.opensea.io/assets/0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656/111455605967243695293934523947761696929447409048739639960537316435969433403393/)|[Transaction Token 2](https://rinkeby.etherscan.io/tx/0xb35dd9e6842238441c68ffb235ccbcb73564fb1c7268abea25e6dab182a4945b)|
|37|[Listing Token 37](https://testnets.opensea.io/assets/0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656/111455605967243695293934523947761696929447409048739639960537316437068945031169/)|[Transaction Token 37](https://rinkeby.etherscan.io/tx/0xa56f3d5a3f63d4f09b184767f07a9f16f254f2bd46ba256398c1cf751e2f95d1)|
|6|[Listing Token 6](https://testnets.opensea.io/assets/0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656/111455605967243695293934523947761696929447409048739639960537316438168456658945/)|[Transaction Token 6](https://rinkeby.etherscan.io/tx/0xe11873f65750e77f96b2108b119e20a3768ab27dd2c814f1e715e09aac126816)|
|25|[Listing Token 25](https://testnets.opensea.io/assets/0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656/111455605967243695293934523947761696929447409048739639960537316439267968286721/)|[Transaction Token 25](https://rinkeby.etherscan.io/tx/0xdbeb65d480b5ea4672f64f5c830840d1abf1f8de68bb274706c81a18e79345ad)|
|44|[Listing Token 44](https://testnets.opensea.io/assets/0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656/111455605967243695293934523947761696929447409048739639960537316440367479914497/)|[Transaction Token 44](https://rinkeby.etherscan.io/tx/0xe4bcaa9d6363ae77231faf0eee7ad7b11726bd912e07bf3673ad2543b13ef0bf)|

  
  

