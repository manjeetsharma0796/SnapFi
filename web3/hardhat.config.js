require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  paths: {
    artifacts: "./src",
  },
  networks: {
    zkEVM: {
    //   url: `https://rpc-amoy.polygon.technology`,
      url: process.env.ALCY,
      accounts: [process.env.ACCOUNT_PRIVATE_KEY],
    //   chainId: 2442,
    minGasPrice:"auto"
    },
    po: {
      // url: "https://rpc.cardona.zkevm-rpc.com",
      url: "https://polygon-zkevm-testnet.drpc.org",
      accounts: [process.env.ACCOUNT_PRIVATE_KEY],
      //   url: `https://polygon-zkevm-cardona.blockpi.network/v1/rpc/public`,
      allowUnlimitedContractSize: true,
      gas: "auto", //units of gas you are willing to pay, aka gas limit
      gasPrice: "auto",
      // chainId: 1442
    },
    // inf: {
    //   url: `https://polygon-mainnet.infura.io/v3/${process.env.INF_PRIVATE_KEY}`,
    //   accounts: [process.env.ACCOUNT_PRIVATE_KEY],
    // //   chainId: 2442,
    // },
  },
};
