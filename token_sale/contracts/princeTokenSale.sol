//SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;
import "./princeToken.sol";

contract princeTokenSale {
    address admin;
    princeToken public tokenContract;
    uint256 public tokenPrice;

    constructor(princeToken _tokenContract, uint256 _tokenPrice) {
        admin = msg.sender;
        tokenContract = _tokenContract;
        tokenPrice = _tokenPrice;
    }
}
