pragma solidity ^0.4.23;
import './Request.sol';

contract TransferRequest is Request{
    
    string public productId;
    address public approver;
    address public sender;
    
    event TransferRequestCreated(string  productId, address sender, address approver);
    event Approved();
    
    modifier onlyApprover{
        require(msg.sender == approver, "he is not the approver");
        _;
    }
    
    constructor(uint _id, address _approver, string _productId, address _sender)public{
        
        productId = _productId;
        id = _id;
        approver = _approver;
        sender = _sender;
        approved = false;
        
        emit TransferRequestCreated( _productId, _sender, _approver);
    }
    
    function approve() onlyApprover public returns(bool){
        require(!voted[msg.sender], "has already approved");
        
        approved = true;
        voted[msg.sender] = true;
        
        emit Approved();
        
        return approved;
    }
}