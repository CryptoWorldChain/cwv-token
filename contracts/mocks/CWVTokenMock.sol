pragma solidity ^0.4.23;


import "../CWVToken.sol";


contract CWVTokenMock is CWVToken {

  constructor(address initialAccount, uint256 initialBalance) public {
    _balances[initialAccount] = initialBalance;
    _totalSupply = initialBalance;
  }

}
