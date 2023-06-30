import { useEffect, useState } from "react";
import provider from "@/lib/web3/Web3Provider";

function WalletConnection() {
  const [address, setAddress] = useState(null);

  const connectWallet = async () => {
    await window.ethereum.enable(); // Request user's wallet
    const signer = provider.getSigner();
    const address = await signer.getAddress();
    setAddress(address);
  };

  return (
    <div>
      <button onClick={connectWallet}>Connect Wallet</button>
      {address && <p>Connected: {address}</p>}
    </div>
  );
}

export default WalletConnection;
