pragma solidity ^0.4.23;


import "../CWVToken.sol";


contract SafeMathMock {

  function mul(uint256 a, uint256 b) public pure returns (uint256) {
    return SafeMath.mul(a, b);
  }

  function div(uint256 a, uint256 b) public pure returns (uint256) {
    return SafeMath.div(a, b);
  }

  function sub(uint256 a, uint256 b) public pure returns (uint256) {
    return SafeMath.sub(a, b);
  }

  function add(uint256 a, uint256 b) public pure returns (uint256) {
    return SafeMath.add(a, b);
  }
}
