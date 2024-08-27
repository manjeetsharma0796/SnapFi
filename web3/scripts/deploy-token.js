const  hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  // Check account balance
  const balance = await deployer.getBalance();
  console.log("Account balance:", hre.ethers.utils.formatEther(balance));

  if (balance.lt(hre.ethers.utils.parseEther("0.01"))) {
    throw new Error("===========================Insufficient funds for deployment=============================");
  }

  
  // Compile and deploy the contract
  const MyCustomToken = await hre.ethers.getContractFactory("MyCustomToken");
  const myCustomToken = await MyCustomToken.deploy();
  await myCustomToken.deployed();

  console.log("MyCustomToken deployed to:", myCustomToken.address);
  console.log(
    // `Lock with 1 ETH and unlock timestamp ${unlockTime} deployed to ${lock.address}`
  );

  // // Replace with the address to which you want to mint tokens and the amount
  // const recipientAddress = "0xB702203B9FD0ee85aeDB9d314C075D480d716635";
  // const mintAmount = hre.ethers.utils.parseUnits("100", 18); // Mint 90 tokens

  // // Mint new tokens
  // const tx = await myCustomToken.mint(recipientAddress, mintAmount);
  // await tx.wait();

  // console.log(`Minted ${mintAmount.toString()} tokens to ${recipientAddress}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});