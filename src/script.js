'use strict';

function BankAccount() {
  let _balance = 0;

  this.deposit = function (x) {
    _balance += x;
  };

  this.withdraw = function (x) {
    _balance -= x;
  };

  this.getBalance = function () {
    if (_balance > 0) {
      return `Your balance: ${_balance}$`;
    }
    return `Your balance is empty `;
  };
}

const newUser = new BankAccount();
console.log(newUser.getBalance());

newUser.deposit(1591);
console.log(newUser.getBalance());

newUser.withdraw(38);
console.log(newUser.getBalance());

console.log(newUser.balance);
