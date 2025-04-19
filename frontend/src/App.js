import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import LockABI from "./contracts/LockABI.json";
import { CONTRACT_ADDRESS } from "./contracts/contractConfig";

function App() {
  const [contract, setContract] = useState(null);
  const [account, setAccount] = useState(null);
  const [unlockTime, setUnlockTime] = useState(null);
  const [isOwner, setIsOwner] = useState(false);

  useEffect(() => {
    const init = async () => {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const accountAddress = await signer.getAddress();

        const contractInstance = new ethers.Contract(CONTRACT_ADDRESS, LockABI, signer);
        const unlock = await contractInstance.unlockTime();
        const ownerAddress = await contractInstance.owner();

        setContract(contractInstance);
        setAccount(accountAddress);
        setUnlockTime(unlock.toNumber());
        setIsOwner(ownerAddress.toLowerCase() === accountAddress.toLowerCase());

        console.log("✅ Connected account:", accountAddress);
        console.log("✅ Deployed contract address:", CONTRACT_ADDRESS);
        console.log("✅ Contract owner:", ownerAddress);
      } else {
        alert("Please install MetaMask!");
      }
    };

    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleWithdraw = async () => {
    try {
      const tx = await contract.withdraw();
      await tx.wait();
      alert("Withdraw successful!");
    } catch (err) {
      alert("Withdraw failed: " + err.message);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Learn React</h1>
      <h2><span role="img" aria-label="lock">🔐</span> Lock Contract</h2>
      <p><strong>Connected Wallet:</strong> {account}</p>
      {unlockTime && (
        <p>
          <strong>Unlock Time:</strong>{" "}
          {new Date(unlockTime * 1000).toLocaleString()}
        </p>
      )}
      {isOwner ? (
        <button onClick={handleWithdraw}>Withdraw</button>
      ) : (
        <p>You're not the owner, withdraw not allowed</p>
      )}
    </div>
  );
}

export default App;

// This code is a simple React application that connects to an Ethereum smart contract using ethers.js.
// It allows the connected wallet to view the unlock time of the contract and withdraw funds if the wallet is the owner of the contract.
/*目前完成了這些：
建好 React 前端專案 ✅
跟智能合約建立連線 ✅
顯示連線錢包、合約地址、解鎖時間 ✅
檢查是否是合約擁有者 ✅
實作 withdraw() 功能 ✅
網頁可以正常跑起來 ✅
*/