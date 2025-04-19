# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.js
```
# Sample DeFi App - Lock Contract

This is a decentralized application (DApp) that interacts with a smart contract, allowing users to lock an amount of Ether until a specified unlock time, and later withdraw it if they are the contract owner.

## 🛠 技術堆疊

- **Solidity**: 用於智能合約開發
- **Hardhat**: 用於智能合約開發與部署
- **React**: 用於建立前端
- **ethers.js**: 與智能合約互動
- **MetaMask**: 錢包管理與交易簽名
- **GitHub Pages**: 部署前端

## 🚀 部署至 Sepolia 測試網

1. **安裝 Hardhat 依賴**
    ```bash
    npm install --save-dev hardhat
    npm install @nomicfoundation/hardhat-toolbox
    npm install ethers dotenv
    ```

2. **創建 `.env` 文件**
    在專案根目錄創建 `.env` 文件，並填寫以下內容：
    ```env
    SEPOLIA_URL="https://sepolia.infura.io/v3/YOUR_INFURA_PROJECT_ID"
    SEPOLIA_PRIVATE_KEY="YOUR_WALLET_PRIVATE_KEY"
    SEPOLIA_CONTRACT_ADDRESS="0xYourDeployedContractAddress"
    ```

3. **部署合約**
    - 創建 `scripts/deploy.js` 文件，並使用 Hardhat 部署你的智能合約。
    ```bash
    npx hardhat run scripts/deploy.js --network sepolia
    ```

4. **確認部署**
    - 成功部署後，記下合約地址並確認交易哈希在 [Etherscan Sepolia](https://sepolia.etherscan.io/).

## 💻 前端設置

1. **建立 React 專案**
    ```bash
    npx create-react-app frontend
    cd frontend
    npm install ethers dotenv
    ```

2. **配置合約地址**
    - 在 `.env` 文件中，設定合約地址：
    ```env
    REACT_APP_SEPOLIA_CONTRACT_ADDRESS=0xYourDeployedContractAddress
    ```

3. **編輯 `App.js`**
    - 使用 `ethers.js` 與合約互動，顯示解鎖時間並實現提款功能。
    
    ```javascript
    import React, { useState, useEffect } from "react";
    import { ethers } from "ethers";
    import LockABI from "./contracts/LockABI.json";
    import { CONTRACT_ADDRESS } from "./contracts/contractConfig";
    ```

4. **啟動前端伺服器**
    ```bash
    npm start
    ```

## 🚢 部署前端到 GitHub Pages

1. **安裝 `gh-pages`**
    ```bash
    npm install --save gh-pages
    ```

2. **設定 `package.json`**
    - 在 `package.json` 中，加入部署配置：
    ```json
    "homepage": "https://yourusername.github.io/your-repository-name",
    "scripts": {
      "predeploy": "npm run build",
      "deploy": "gh-pages -d build"
    }
    ```

3. **部署到 GitHub Pages**
    ```bash
    npm run deploy
    ```

4. **訪問 DApp**
    - 部署完成後，你可以在 [GitHub Pages](https://yourusername.github.io/your-repository-name) 上訪問你的 DApp。

## 📝 使用說明

1. 在 MetaMask 中登錄你的錢包。
2. 連接到測試網 Sepolia。
3. 瀏覽 DApp，檢視合約中的解鎖時間。
4. 作為合約擁有者，可以點擊「Withdraw」提取鎖倉的資金。

## 📜 開源協議

本專案遵循 [MIT License](https://opensource.org/licenses/MIT)。

