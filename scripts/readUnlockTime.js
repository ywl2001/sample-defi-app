const { ethers } = require("hardhat");

async function main() {
  const contractAddress = "0x83d46Db62AD3670E76B6a4690f61A738e288775A"; // 替換成你部署的地址
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
//npx hardhat run scripts/readUnlockTime.js --network sepolia

/*const contractAddress = "0x4938c21847702DE9eCd4a39df96a66D82EA5A5aC";
🔐 unlockTime (timestamp): 1744827569
🕒 deployedAt: 2025/4/17 上午1:19:29
⏰ unlocksAt: 2025/4/17 上午2:19:29
*/
/*const contractAddress = "0x83d46Db62AD3670E76B6a4690f61A738e288775A";
🔐 unlockTime (timestamp): 1744884572
🕒 deployedAt: 2025/4/17 下午5:09:32
⏰ unlocksAt: 2025/4/17 下午6:09:32
*/
