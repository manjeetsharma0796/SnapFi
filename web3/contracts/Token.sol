// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyCustomToken is ERC20, Ownable {
    // Constructor that initializes the ERC20 token with a name and symbol and sets the owner
    constructor(address _owner) ERC20("Kundiya", "KUN") Ownable(msg.sender) {
        // Mint initial supply of tokens to the contract deployer's address
        // _mint(msg.sender, 1000000 * 10 ** decimals());
    }

    // Function to mint new tokens, restricted to the contract owner
    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    // Custom function that uses _transfer internally
    function transfer(address to, uint256 amount) public override returns (bool){
        _transfer(_msgSender(), to, amount);
        return true;
    }

    function tip(address sender, address receiver, uint256 amount) public returns (bool) {
        _transfer(sender, receiver, amount);
        return true;
    }
}