import { ethers } from "ethers";
import infuraProvider from "@/lib/web3/Web3Provider";
import { NodusContractABI } from "./ContractABI";
const contractAddress = process.env.NEXT_PUBLIC_NODUS_ADDRESS!;
const contractABI = NodusContractABI.abi;

const nodusContract = new ethers.Contract(
  contractAddress,
  contractABI,
  infuraProvider
);

export default nodusContract;
