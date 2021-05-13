// SPDX-License-Identifier: MIT

pragma solidity >=0.5.10;

contract HelloWorld {
    string myName = "Daniel Hemmati";

    function getMyName() public view returns (string memory) {
        return myName;
    }

    function changeMyName(string memory _myName) public {
        myName = _myName;
    }
}
