import { ethers } from "ethers";
import { useState } from "react";
import contract from "@/lib/web3/Contract";

export default function ConnectButton() {
  const [selectedAddress, setSelectedAddress] = useState();

  async function createContent(id, price) {
    const signer = contract.provider.getSigner();
    const contractWithSigner = contract.connect(signer);

    const tx = await contractWithSigner.createContent(id, price);
    const receipt = await tx.wait();

    console.log(`Transaction was mined in block ${receipt.blockNumber}`);
  }

  async function connectWallet() {
    if (window.ethereum) {
      // If Metamask is installed
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setSelectedAddress(accounts[0]);
        console.log("Connected with account: " + accounts[0]);
      } catch (error) {
        console.error("User rejected request to connect with your dApp.");
      }
    } else {
      alert("Please install Metamask.");
    }
  }

  return (
    <button onClick={connectWallet}>
      {selectedAddress ? `Connected: ${selectedAddress}` : "Connect Wallet"}
    </button>
  );
}
