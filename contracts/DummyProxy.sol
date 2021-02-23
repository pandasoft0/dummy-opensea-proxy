// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.0;

contract DummyProxy {
  function proxies(address) public returns (address) {
     return address(0x58807baD0B376efc12F5AD86aAc70E78ed67deaE);
  }
}
