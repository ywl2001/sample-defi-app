require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.28",
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_RPC_URL,
      accounts: [`0x${process.env.PRIVATE_KEY}`]
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  sourcify:{
    enabled: true,
  }
};


// 這段代碼是 Hardhat 的配置文件，主要用於設置 Solidity 編譯器版本和網絡配置。
// 在這裡，我們使用了 `dotenv` 來加載環境變量，這樣我們可以安全地存儲和使用敏感信息，例如私鑰和 RPC URL。