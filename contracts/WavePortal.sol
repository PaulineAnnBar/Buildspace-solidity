// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract WavePortal {
  uint256 totalWaves;

  constructor() {
    console.log("Here is the smart contract");
  }

// public keyword = allows you to call this function to the Bchain(similar to a public API endpoint)
  function wave() public {
    totalWaves +=1;
    //"state variable", stored permanently in the contract
    console.log("%s has waved!", msg.sender); //wallet address, like build in auth
  }

  function getTotalWaves() public view returns (uint256){
    console.log("We have %d total waves!", totalWaves);
    return totalWaves;
  }
} 