var SolnSquareVerifier = artifacts.require('SolnSquareVerifier.sol');

var fs = require('fs');

contract('SolnSquareVerifier', accounts => {
    const proofJson = fs.readFileSync("../zokrates/code/square/proof.json").toString().trim();

    const contractOwnerAccount = accounts[0];
    //const testAccount1 = accounts[1];
    const testAccount2 = accounts[2];
    var contract;
    var proof = JSON.parse(proofJson);

    var tokenName = "Flic's Non-fungible tokens";
    var symbol = "FNFT";
    var baseTokenURI = "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/";
    var solutionId = '';

    before('setup contract', async () => {
        contract = await SolnSquareVerifier.new(tokenName, symbol, baseTokenURI, {from: contractOwnerAccount});
    });

    it('should not add a dodgy solution', async function() {
        try {
            var dodgyProof = JSON.parse(proofJson);
            dodgyProof.proof.c[0] = "0x04f12269";
            await contract.AddSolution(dodgyProof.proof.a, dodgyProof.proof.b, dodgyProof.proof.c, dodgyProof.inputs);            
            assert(false, 'Added Solution in error');    
        } catch(err) {
        }        
    })

    it('should add new solution for contract', async function() {
        let result = await contract.AddSolution(proof.proof.a, proof.proof.b, proof.proof.c, proof.inputs);
        solutionId = result.logs[0].args[0];
        assert(solutionId != '', 'Add Solution failed');    
    })

    it('should not add a duplicate solution', async function() {
        try {
            let result = await contract.AddSolution(proof.proof.a, proof.proof.b, proof.proof.c, proof.inputs);
            let newsolutionId = result.logs[0].args[0];
            assert(solutionId != newsolutionId, 'Add Solution failed');    
        } catch(err) {
        }        
    })

    it('should mint ERC721 token', async function () {         
        let result = await contract.mintNewNFT(testAccount2, 2, solutionId);
        assert(result, false, 'Invalid Proof should fail but it passed');        
    })

})