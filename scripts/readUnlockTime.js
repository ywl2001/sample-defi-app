const { ethers } = require("hardhat");

async function main() {
  const contractAddress = "0x4938c21847702DE9eCd4a39df96a66D82EA5A5aC"; // 替換成你部署的地址
  const Lock = await ethers.getContractFactory("Lock");
  const lock = await Lock.attach(contractAddress);

  const unlockTime = await lock.unlockTime();
  const unlockTimestamp = Number(unlockTime);
  const deployedAt = unlockTimestamp - 3600;

  console.log("🔐 unlockTime (timestamp):", unlockTimestamp);
  console.log("🕒 deployedAt:", new Date(deployedAt * 1000).toLocaleString());
  console.log("⏰ unlocksAt:", new Date(unlockTimestamp * 1000).toLocaleString());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
