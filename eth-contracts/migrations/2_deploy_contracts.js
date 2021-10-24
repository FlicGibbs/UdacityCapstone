// migrating the appropriate contracts
const ERC721Mintable = artifacts.require("ERC721Mintable.sol");
var SquareVerifier = artifacts.require("SquareVerifier.sol");
//var SolnSquareVerifier = artifacts.require("SolnSquareVerifier.sol");

module.exports = function(deployer) {
  deployer.deploy(ERC721Mintable);
  deployer.deploy(SquareVerifier);
  //deployer.deploy(SolnSquareVerifier);
};