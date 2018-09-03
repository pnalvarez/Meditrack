pragma solidity ^0.4.17;

contract Export {
  address public owner;
  uint public last_completed_export;

  modifier restricted() {
    if (msg.sender == owner) _;
  }

  function Exports() public {
    owner = msg.sender;
  }

  function setCompleted(uint completed) public restricted {
    last_completed_export = completed;
  }

  function upgrade(address new_address) public restricted {
    Exports upgraded = Exports(new_address);
    upgraded.setCompleted(last_completed_export);
  }
}
