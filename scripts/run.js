//const { hexStripZeros } = require("ethers/lib/utils")

const main = async () => {
  const [owner, randomPerson] = await hre.ethers.getSigners();
  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
  //This will actually compile our contract and generate the necessary files we need to work with our contract under the artifacts directory. 

  const waveContract = await waveContractFactory.deploy();
  //Hardhat will create a local Ethereum network for us, but just for this contract. Then, after the script completes it'll destroy that local network

  await waveContract.deployed();
  //constructor runs when we actually deploy.

  console.log("Contract deployed to:", waveContract.address);
  console.log("Contract deployed by:", owner.address);
  //give us the address of the deployed contract. Where it is on the blockchain

  let waveCount;
  waveCount = await waveContract.getTotalWaves();

  let waveTxn = await waveContract.wave();
  await waveTxn.wait();

  waveCount = await waveContract.getTotalWaves();

  waveTxn = await waveContract.connect(randomPerson).wave();
  await waveTxn.wait();

  waveCount = await waveContract.getTotalWaves()
};

const runMain = async () => {
  try {
    await main();
    process.exit(0); // exit Node process without error
  } catch (error) {
    console.log(error);
    process.exit(1); // exit Node process while indicating 'Uncaught Fatal Exception' error
  }
};
runMain();