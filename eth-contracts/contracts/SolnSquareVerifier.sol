// SPDX-License-Identifier: MIT
pragma solidity >= 0.5.0;
//pragma experimental ABIEncoderV2;

import './ERC721Mintable.sol';
import './SquareVerifier.sol';

// TODO define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>
// TODO define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class
contract SolnSquareVerifier is ERC721Mintable, SquareVerifier {
    uint256 private solutionCount;
//    SquareVerifier private squareVerifier;

    // TODO define a solutions struct that can hold an index & an address
    struct Solution {
        //uint256 tokenId;
        //address solutionAddress;
        uint[2] a;
        uint[2][2] b;
        uint[2] c;
        uint[2] input;
        bool exists;
        uint256 tokenId;
    }
    // TODO define an array of the above struct
    // TODO define a mapping to store unique solutions submitted
    mapping(bytes32 => Solution) private solutions;

    // TODO Create an event to emit when a solution is added
    event SolutionAdded(bytes32 SolutionId); 

    constructor(string memory name, string memory symbol, string memory baseTokenURI) 
        ERC721Mintable(name, symbol, baseTokenURI) public {
        solutionCount = 0;
        //squareVerifier = SquareVerifier(msg.sender);
    }
    // TODO Create a function to add the solutions to the array and emit the event
    function AddSolution(            
            uint[2] memory a,
            uint[2][2] memory b,
            uint[2] memory c,
            uint[2] memory input
            ) public {
        bytes32 key = keccak256(abi.encodePacked(a, b, c, input));
        require(!solutions[key].exists, "SolnSquareVerifier: Solution already exists");        
        bool validProof = verifyTx( a, 
                                    b, 
                                    c, 
                                    input);
        require(validProof, "SolnSquareVerifier: Invalid Proof");
        Solution memory sol = Solution({    //tokenId: tokenId,
                                            //solutionAddress: msg.sender,
                                            a: a,
                                            b: b,
                                            c: c,
                                            input: input,
                                            exists: true,
                                            tokenId: 0 });
        solutions[key] = sol;
        solutionCount++;
        emit SolutionAdded(key);
    }

    // TODO Create a function to mint new NFT only after the solution has been verified
    //  - make sure the solution is unique (has not been used before)
    //  - make sure you handle metadata as well as tokenSupply
    function mintNewNFT(address to, uint256 tokenId, bytes32 solutionId) public {
        require(solutions[solutionId].exists, "SolnSquareVerifier: Solution must be added before it can be used"); 
        require(solutions[solutionId].tokenId == 0, "SolnSquareVerifier: Token already minted"); 
        mint(to, tokenId);    
        solutions[solutionId].tokenId = tokenId;
    }
}
