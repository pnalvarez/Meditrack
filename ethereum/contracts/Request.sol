pragma solidity ^0.4.23;

contract Request{
    
    uint public id;
    bool public approved;
    mapping(address => bool) voted;
    
    constructor(uint _id)public{
        id = _id;
        approved = false;
    }
    
    function approve()public returns(bool);
}