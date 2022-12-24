import pFundingABI from "../contracts/abi/pFunding.json";
import { pFundingAddress } from "../contracts/contract";

const Web3 = require("web3");

const web3 = new Web3(
  "https://goerli.infura.io/v3/e7e63350a02446cd83ab4073d9c266d4"
);
export const getPfundingContract = () => {
  const contract = new web3.eth.Contract(pFundingABI, pFundingAddress);
  return contract;
};
