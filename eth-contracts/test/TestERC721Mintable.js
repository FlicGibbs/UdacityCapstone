var ERC721Mintable = artifacts.require('ERC721Mintable');

contract('TestERC721Mintable', accounts => {

    const contractOwnerAccount = accounts[0];
    const testAccount1 = accounts[1];
    const testAccount2 = accounts[2];

    const tokensToMint = 4;
    var tokenNames = [tokensToMint];
    var contract;

    var tokenName = "Flic's Non-fungible tokens";
    var symbol = "FNFT";
    var baseTokenURI = "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/";

    before('setup contract', async () => {
        contract = await ERC721Mintable.new(tokenName, symbol, baseTokenURI, {from: contractOwnerAccount});
    });

    it('should return symbol', async function () { 

        let _symbol = await contract.symbol();
        console.log("Symbol:", _symbol);  
        assert.equal(symbol, _symbol, "Symbol should return what was sent");
    })

    it('should mint multiple tokens', async function() {
        // mint multiple tokens            
        for (var i=0; i<tokensToMint; i++) {
            let result = false;                
            tokenNames[i] = i+1;
            if (i < 2)
                result = await contract.mint(testAccount1, tokenNames[i], {from: contractOwnerAccount})
            else 
                result = await contract.mint(testAccount2, tokenNames[i], {from: contractOwnerAccount})
            console.log("Minted", tokenNames[i]);
        }
    })

    it('should return total supply', async function () { 
        let result = await contract.totalSupply.call({from: contractOwnerAccount});
        //console.log("Total Supply", parseInt(result));
        assert.equal(parseInt(result), tokensToMint, "Total supply should be " + tokensToMint + " but it's " + parseInt(result));              
    })

    it('should get token balance', async function () { 
        let result1 = await contract.balanceOf.call(testAccount1, {from: contractOwnerAccount});
        let result2 = await contract.balanceOf.call(testAccount2, {from: contractOwnerAccount});
        //console.log("Token Balance", parseInt(result1), parseInt(result2));  
        assert.equal(parseInt(result1), tokensToMint/2, "Total balance should be " + tokensToMint/2 + " but it's " + parseInt(result1));              

    })

    // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
    it('should return token uri', async function () {             
        for (var i=0; i<tokensToMint; i++) {
            let result = await contract.tokenURI.call(tokenNames[i], {from: contractOwnerAccount});
            console.log('Token URI', tokenNames[i], result);
        }
    })

    it('should transfer token from one owner to another', async function () { 

        let bal1a = await contract.balanceOf(testAccount1, {from: contractOwnerAccount});
        let bal2a = await contract.balanceOf(testAccount2, {from: contractOwnerAccount});
        console.log("Balances before transfer:", parseInt(bal1a), parseInt(bal2a));  
        
        //await contract.approve(testAccount2, tokenNames[0], { from: testAccount1 });

        let result = await contract.ownerOf(tokenNames[0], {from: contractOwnerAccount});
        console.log('Owner before:', result);
        // console.log('Transferring token:', tokenNames[0]);
        await contract.transferFrom(testAccount1, testAccount2, tokenNames[0], {from: testAccount1});
        // console.log('Transferred token:', tokenNames[0], result.Result);
        result = await contract.ownerOf(tokenNames[0], {from: contractOwnerAccount});
        console.log('Owner after:', result);

        let bal1b = await contract.balanceOf(testAccount1, {from: contractOwnerAccount});
        let bal2b = await contract.balanceOf(testAccount2, {from: contractOwnerAccount});
        console.log('Balances  after transfer:', parseInt(bal1b), parseInt(bal2b));  

        assert.notEqual(bal2a, bal2b, "Token balance should have changed");
        assert.equal(result, testAccount2, "Token should now belong to " + testAccount2 + " but it returned " + result);
    })

    describe('have ownership properties', async () => {
        beforeEach(async function () { 
            contract = await ERC721Mintable.new(tokenName, symbol, baseTokenURI, {from: contractOwnerAccount});
        })

        it('should fail when minting when address is not contract owner', async function () { 
            try {
                let result = await contract.mint(testAccount1, 10, {from: testAccount2})
                assert(1, 0, 'Should fail when minting address not the contract owner');
            } catch(error) {
                //console.log(error);
                assert(1, 1, 'Failed as expected');
            }
        })

        it('should return contract owner', async function () { 
            let contractOwnerReturned = await contract.Owner();
            assert.equal(contractOwnerAccount, contractOwnerReturned, 'Contract Owner ' + contractOwnerReturned + ' should be ' + contractOwnerAccount);
        })

    });

})