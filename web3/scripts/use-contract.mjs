import hre from "hardhat";
import * as dotenv from "dotenv";
// import { MyCustomToken } from "../typechain-types";
import { walletAddress, claimableAmt } from "../receiver.js";
dotenv.config();

async function transfer(
  myCustomToken,
  recipientAddress,
  amount
) {
  console.log(`Transacted ${amount} tokens to ${recipientAddress}TTTTTTTTTTTTTTTTTT`);

  // Transaction
  const tranc = await myCustomToken.transfer(recipientAddress, amount);
  await tranc.wait();
  console.log(`Transacted ${amount} tokens to ${recipientAddress}`);
}

async function main() {
  // Connect to the deployed contract using its address
  const contractAddress = process.env.CONTRACT_ADDRESS || ""; // Replace with your contract's address
  const MyCustomToken = await hre.ethers.getContractFactory("MyCustomToken");
  const myCustomToken = MyCustomToken.attach(contractAddress);

  // Replace with the address to which you want to mint tokens and the amount
  const recipientAddress = "0xB702203B9FD0ee85aeDB9d314C075D480d716635";
  const mintAmount = hre.ethers.utils.parseUnits("90", 18); // Mint 90 tokens


  // Transaction
  //   const tranc = await myCustomToken.mint(recipientAddress, mintAmount);
  //   await tranc.wait();
  //   console.log(`Minted ${mintAmount.toString()} tokens to ${recipientAddress}`);

  // transfer(myCustomToken, "0xfB8ae9808D84BF601f2Ef6178Da51a612bD046D0", 2);
  if (claimableAmt > 0) {
    transfer(myCustomToken, walletAddress, claimableAmt);
  } else {
    console.log("NOT ENOUGH TOKEN");
  }
  // console.log(walletAddress,claimableAmt)
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
