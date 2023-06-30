import prisma, {
  createComment,
  deleteComment,
  getCommentsByContentId,
  getRegisteredWalletByUserId,
  getUser,
  updateComment,
  updateWalletAddressByUserID,
} from "@/lib/prismaClient";
import userAuth from "@/lib/userAuth";
import { ethers } from "ethers";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import infuraProvider from "@/lib/web3/Web3Provider";
import nodusContract from "@/lib/web3/Contract";
import { NodusContractABI } from "@/lib/web3/ContractABI";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const userId = await userAuth(req);
        const result = await getRegisteredWalletByUserId(userId);
        res.status(200).json(result);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
      break;
    case "PUT":
      try {
        console.log(0);
        const userId = await userAuth(req);
        const { walletAddress } = req.query;
        const existingWallet = await getRegisteredWalletByUserId(userId);
        if (existingWallet && existingWallet.walletAddress) {
          throw new Error(`User already has a registered wallet.`);
        }
        console.log(1);
        const mnemonic = process.env.MNEMONIC!;
        const ownerWallet = ethers.Wallet.fromPhrase(mnemonic);
        const ownerWalletConnected = ownerWallet.connect(infuraProvider);

        const contractAddress = process.env.NEXT_PUBLIC_NODUS_ADDRESS!;
        const contractABI = NodusContractABI.abi;
        const nodusContract = new ethers.Contract(
          contractAddress,
          contractABI,
          ownerWalletConnected
        );
        console.log(2);
        const registerUser = async (userAddress) => {
          const transaction = await nodusContract.registerUser(userAddress);
          console.log("Transaction: ", transaction);

          const receipt = await transaction.wait();
          console.log("receipt", receipt);
          console.log("Transaction confirmed in block: ", receipt.blockNumber);
        };
        console.log(3);
        await registerUser(walletAddress);

        const result = await updateWalletAddressByUserID(userId, walletAddress);
        res.status(200).json(result);
      } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
      }
      break;

    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
