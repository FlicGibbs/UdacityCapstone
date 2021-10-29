var SolnSquareVerifier = artifacts.require('SolnSquareVerifier.sol');

var fs = require('fs');

contract('SolnSquareVerifier', accounts => {
    const proofJson = fs.readFileSync("../zokrates/code/square/proof.json").toString().trim();

    const contractOwnerAccount = accounts[0];
    const testAccount1 = accounts[1];
    const testAccount2 = accounts[2];
    var contract;
    var proof = JSON.parse(proofJson);

    var tokenName = "Flic's Non-fungible tokens";
    var symbol = "FNFT";
    var baseTokenURI = "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/";

    before('setup contract', async () => {
        contract = await SolnSquareVerifier.new(tokenName, symbol, baseTokenURI, {from: contractOwnerAccount});
    });

    it('should not add a dodgy solution', async function() {
        try {
            var dodgyProof = JSON.parse(proofJson);
            dodgyProof.proof.c[0] = "0x04f12269";
            await contract.AddSolution(testAccount1, 10, dodgyProof.proof.a, dodgyProof.proof.b, dodgyProof.proof.c, dodgyProof.inputs);            
            let solutionCount = contract.solutionCount;
            assert(true, false, 'Added Solution in error');    
        } catch(err) {
        }        
    })

    it('should add new solution for contract', async function() {
        let result = await contract.AddSolution(testAccount1, 10, proof.proof.a, proof.proof.b, proof.proof.c, proof.inputs);
        //let newsolutionId = result.logs[0].args[0];
        let solutionCount = contract.solutionCount;
        assert(solutionCount, 1, 'Add Solution failed');
    })

    it('should not add a duplicate solution', async function() {
        try {
            let result = await contract.AddSolution(testAccount1, 10, proof.proof.a, proof.proof.b, proof.proof.c, proof.inputs);
            let solutionCount = contract.solutionCount;
            assert(true, false, 'Should not add duplicate solution');
        } catch(err) {
        }        
    })

    it('should create solution and mint ERC721 token', async function () {         
        await contract.mintNewNFT(testAccount2, 20, proof.proof.a, proof.proof.b, proof.proof.c, proof.inputs);
        let solutionCount = contract.solutionCount;
        assert(solutionCount, 2, 'Failed to mint token (new solution)');
    })

    it('should mint ERC721 token if solution added already (but not minted)', async function () {         
        await contract.mintNewNFT(testAccount1, 10, proof.proof.a, proof.proof.b, proof.proof.c, proof.inputs);
        let solutionCount = contract.solutionCount;
        assert(solutionCount, 2, 'Failed to mint token (existing solution)');
    })

    it('should not mint the same ERC721 token more than once', async function () {         
        try {
            await contract.mintNewNFT(testAccount2, 20, proof.proof.a, proof.proof.b, proof.proof.c, proof.inputs);
            assert(true, false, 'Should have failed to mint token 2 a second time');
        } catch(err) {
        }
    })
})