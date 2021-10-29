// SPDX-License-Identifier: MIT
pragma solidity >= 0.5.0;
pragma experimental ABIEncoderV2;

import './ERC721Mintable.sol';
import './SquareVerifier.sol';

// TODO define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>
// TODO define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class
contract SolnSquareVerifier is ERC721Mintable, SquareVerifier {
    uint256 public solutionCount; // for testing
//    SquareVerifier private squareVerifier;

    // TODO define a solutions struct that can hold an index & an address
    struct Solution {
        address tokenOwner;
        uint256 tokenId;      
    }

    // TODO define an array of the above struct
    Solution[] private solutions;
    // TODO define a mapping to store unique solutions submitted
    // Give tokenId => Return array position
    mapping(uint256 => uint) private solutionMappings;

    // TODO Create an event to emit when a solution is added
    event SolutionAdded(Solution solution); 

    constructor(string memory name, string memory symbol, string memory baseTokenURI) 
        ERC721Mintable(name, symbol, baseTokenURI) public {
        solutionCount = 0;
    }
    // TODO Create a function to add the solutions to the array and emit the event
    function AddSolution(   
            address tokenAddress,
            uint256 tokenId,            
            uint[2] memory a,
            uint[2][2] memory b,
            uint[2] memory c,
            uint[2] memory input
            ) public {
        require(tokenAddress != address(0), "Invalid Address");
        if(solutionMappings[tokenId] != 0) // Solution already exists for this token
            return;
        bool validProof = verifyTx( a, 
                                    b, 
                                    c, 
                                    input);
        require(validProof, "SolnSquareVerifier: Invalid Proof");
        Solution memory sol = Solution( {   tokenOwner: tokenAddress,
                                            tokenId: tokenId
                                        });
        solutions.push(sol);
        solutionMappings[tokenId] = solutions.length; //to reference solution in array will need to subtract 1. Not doing it here because checking for existence by checking for zero
        solutionCount++;
        emit SolutionAdded(sol);
    }

    // TODO Create a function to mint new NFT only after the solution has been verified
    //  - make sure the solution is unique (has not been used before)
    //  - make sure you handle metadata as well as tokenSupply
    function mintNewNFT(address tokenAddress, 
                        uint256 tokenId, 
                        uint[2] memory a,
                        uint[2][2] memory b,
                        uint[2] memory c,
                        uint[2] memory input) public {
        AddSolution(tokenAddress, tokenId, a, b, c, input);
        // Don't use the tokenAddress passed in, solution may have been added previously
        // Need to use the token address for the solution
        // solutions[array_position].tokenOwner
        // solutionMappings[tokenId] returns the LENGTH of the array at the time of adding
        // solutionMappings[tokenId]-1 returns the arrat position of the solution
        //          require(tokenAddress == solutions[solutionMappings[tokenId]-1].tokenOwner, "SolnSquareVerifier: You must be the owner to mint this token");
        mint(solutions[solutionMappings[tokenId]-1].tokenOwner, tokenId);    
    }
}
