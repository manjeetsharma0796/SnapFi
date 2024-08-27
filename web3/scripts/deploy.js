const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  // Check account balance
  const balance = await deployer.getBalance();
  console.log("Account balance:", hre.ethers.utils.formatEther(balance));

  if (balance.lt(hre.ethers.utils.parseEther("0.01"))) {
    throw new Error("===========================Insufficient funds for deployment=============================");
  }

  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const ONE_YEAR_IN_SECS = 20;
  const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;

  const lockedAmount = hre.ethers.utils.parseEther("1");

  const Lock = await hre.ethers.getContractFactory("Lock");

  // Set gas limit manually
  const gasLimit = 3000000; // You can adjust this value as needed

  const lock = await Lock.deploy(unlockTime, { value: lockedAmount, gasLimit: gasLimit });

  await lock.deployed();

  console.log(
    `Lock with 1 ETH and unlock timestamp ${unlockTime} deployed to ${lock.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
