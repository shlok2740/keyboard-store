import { ethers } from "ethers";

import abi from "../utils/Keyboards.json"

const contractAddress = '0x7f9e5264Fd119f2A97Ef83D804564BA2DD4379Cb';
const contractABI = abi.abi;

export default function getKeyboardsContract(ethereum) {
  if(ethereum) {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, contractABI, signer);
  } else {
    return undefined;
  }
}