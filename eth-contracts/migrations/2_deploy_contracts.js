// migrating the appropriate contracts
const ERC721Mintable = artifacts.require("ERC721Mintable.sol");
var SquareVerifier = artifacts.require("SquareVerifier.sol");
var SolnSquareVerifier = artifacts.require("SolnSquareVerifier.sol");

module.exports = function(deployer) {

  var tokenName = "Flic's Non-fungible tokens";
  var symbol = "FNFT";
  var baseTokenURI = "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/";

  deployer.deploy(ERC721Mintable, tokenName, symbol, baseTokenURI);
  deployer.deploy(SquareVerifier);
  deployer.deploy(SolnSquareVerifier, tokenName, symbol, baseTokenURI);
};
