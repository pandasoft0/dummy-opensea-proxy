const fs = require('fs');
const HDWalletProvider = require('truffle-hdwallet-provider');
const maticvigil_key = fs.readFileSync(__dirname + "/.maticvigil.key").toString().trim();
const private_key = fs.readFileSync(__dirname + "/.secret.key").toString().trim();

module.exports = {
  /**
   * Networks define how you connect to your ethereum client and let you set the
   * defaults web3 uses to send transactions. If you don't specify one truffle
   * will spin up a development blockchain for you on port 9545 when you
   * run `develop` or `test`. You can ask a truffle command to use a specific
   * network from the command line, e.g
   *
   * $ truffle test --network <network-name>
   */

  networks: {
    development: {
      host: 'localhost',
      port: 9545,
      network_id: '*',
      gas: 8000000,
      gasPrice: 1000000000, // web3.eth.gasPrice
    },
    matic_mumbai: {
      provider: () => {
        return new HDWalletProvider(private_key, `https://rpc-mumbai.matic.today`);
      },
      gas: 6721975,
      gasPrice: 1000000000, // 1 gwei
      network_id: '80001'
    },
    matic_mainnet: {
      provider: () => {
        return new HDWalletProvider(private_key, `https://rpc-mainnet.maticvigil.com/v1/` + maticvigil_key);
      },
      gas: 6721975,
      gasPrice: 1000000000, // 1 gwei
      network_id: 137
    }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      // version: "0.5.1",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    },
  },
};
