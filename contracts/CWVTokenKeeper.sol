pragma solidity ^0.4.23;


import "./CWVToken.sol";


library SafeERC20 {

  function safeTransfer(ERC20Basic token, address to, uint256 value) internal {
    require(token.transfer(to, value));
  }

  function safeTransferFrom(
    ERC20 token,
    address from,
    address to,
    uint256 value
  )
    internal
  {
    require(token.transferFrom(from, to, value));
  }

  function safeApprove(ERC20 token, address spender, uint256 value) internal {
    require(token.approve(spender, value));
  }
}


contract Ownable {

  // public variables
  address public owner;

  // internal variables

  // events
  event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

  // public functions
  constructor() public {
    owner = msg.sender;
  }

  modifier onlyOwner() {
    require(msg.sender == owner);
    _;
  }

  function transferOwnership(address newOwner) public onlyOwner {
    require(newOwner != address(0));
    emit OwnershipTransferred(owner, newOwner);
    owner = newOwner;
  }

  // internal functions
}


contract CWVTokenKeeper is Ownable {
  using SafeERC20 for ERC20Basic;
  using SafeMath for uint256;

  // public variables
  ERC20Basic public cwvToken;

  // internal variables

  // events

  // public functions
  constructor (
    ERC20Basic token
  )
    public
  {
    cwvToken = token;
  }

  function batchTransfer(address[] funders, uint256[] amounts) public onlyOwner returns (bool) {
    require(funders.length > 0 && funders.length == amounts.length);

    uint256 total = cwvToken.balanceOf(this);
    require(total > 0);

    uint256 fundersTotal = 0;
    for (uint i = 0; i < amounts.length; i++) {
      fundersTotal = fundersTotal.add(amounts[i]);
    }
    require(total >= fundersTotal);

    for (uint j = 0; j < funders.length; j++) {
      cwvToken.safeTransfer(funders[j], amounts[j]);
    }
  }
}
