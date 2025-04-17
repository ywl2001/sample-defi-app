const { ethers } = require("hardhat");

async function main() {
  // Fetch deployer's account using getSigners()
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  // Set unlock time (current time + 1 hour)
  const unlockTime = Math.floor(Date.now() / 1000) + 3600; // Current time + 3600 seconds
  const lockedAmount = ethers.parseUnits("0.01", 18); // Use parseUnits for ethers@6.x

  // Deploy contract and wait for confirmation
  const Lock = await ethers.getContractFactory("Lock");
  const lock = await Lock.deploy(unlockTime, { value: lockedAmount });

  // Log contract address after deployment
  await lock.waitForDeployment(); // use this for Hardhat v6+ with ethers v6
  console.log("Lock contract deployed to:", await lock.getAddress());
  
}

// Run the main function
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });


// This script deploys a smart contract to the Ethereum blockchain using Hardhat.
// run this script using the command `npx hardhat run scripts/deploy.js --network sepolia`,
/*Verify the contract on Etherscan using the command:
npx hardhat verify --network sepolia 0x4938c21847702DE9eCd4a39df96a66D82EA5A5aC 1744827569
The contract 0x4938c21847702DE9eCd4a39df96a66D82EA5A5aC has already been verified on the block explorer. If you're trying to verify a partially verified contract, please use the --force flag.
https://sepolia.etherscan.io/address/0x4938c21847702DE9eCd4a39df96a66D82EA5A5aC#code

The contract 0x4938c21847702DE9eCd4a39df96a66D82EA5A5aC has already been verified on Sourcify.
https://repo.sourcify.dev/contracts/full_match/11155111/0x4938c21847702DE9eCd4a39df96a66D82EA5A5aC/
*/