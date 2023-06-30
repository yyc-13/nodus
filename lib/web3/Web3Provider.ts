import { ethers } from "ethers";

// export const Web3Provider = new ethers.providers.Web3Provider(window.ethereum);
// export const InfuraProvider = new ethers.providers.InfuraProvider(
//   "goerli",
//   "https://arbitrum-goerli.infura.io/v3/32281a895fb4426494bc38b92d1ffb1f"
// );

// provider.js

const projectID = process.env.NEXT_PUBLIC_INFURA_PROJECT_ID;
const network = "arbitrum-goerli";
const infuraProvider = new ethers.InfuraProvider(network, projectID);

export default infuraProvider;
