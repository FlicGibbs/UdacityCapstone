const fs = require('fs');

// For Rinkeby
//const HDWalletProvider = require('truffle-hdwallet-provider');
// From Metamask:
const mnemonic = fs.readFileSync("truffle.secret.rinkeby").toString().trim();
const infuraKey = fs.readFileSync("infurakey.secret.rinkeby").toString().trim(); // From Infura
const HDWalletProvider = require("@truffle/hdwallet-provider");

// For Dev
//const mnemonic = fs.readFileSync("truffle.secret.dev").toString().trim();


module.exports = {

	networks: {
		development: { //Setting for truffle console
			host: "127.0.0.1",     // Localhost (default: none)
			port: 7545,            // Standard Ethereum port (default: none)
			network_id: "*",       // Any network (default: none)

			gas: 6700000,      
			websockets: true,
			//networkCheckTimeout: 999999,
		},

		// rinkeby: {
		// 	provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
		// 	network_id: 4,       // Rinkeby's id
		// 	// gas: 6721975,        
		// 	// gasPrice: 20000000000
		// 	gas: 29970649, // Not enough gas	21000000000			// Too much gas
		// 	//gasLimit: 8000000,
			
		// 	networkCheckTimeout: 200000
		// }
		rinkeby: {
			provider: () =>
			  new HDWalletProvider(
				mnemonic,
				`wss://rinkeby.infura.io/ws/v3/${infuraKey}`,
				0,
				3
			  ),
			network_id: 4,
		  },
	},

	mocha: {
		timeout: 100000
	},

	compilers: {
		solc: {
	//     //version: "^0.6.0",    // Fetch exact version from solc-bin (default: truffle's version)
			version: "^0.5.0",
			docker: false,        // Use "0.5.1" you've installed locally with docker (default: false)
			settings: {
				optimizer: {
				enabled: true, // Default: false
				runs: 1000, // Default: 200
				}
			}
		}
	}
}
