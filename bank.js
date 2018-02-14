var Bank = function() {
  this.accounts = [];
}

Bank.prototype.addAccount = function (account) {
  this.accounts.push(account);
}

Bank.prototype.accountByName = function (name){
  const account = this.accounts.find(function(account){
    return account.name === name;
  });
  return account;
}

// Bank.prototype.largestAccount = function(){
//   return this.accounts.reduce(function(largest, account){
//     return largest.value > account.value ? largest : account;
//   })
// }
Bank.prototype.largestAccount = function(){
  let tempAccount = this.accounts[0];

  this.accounts.forEach(function(account){
    if (account.value > tempAccount.value){
      tempAccount = account;
    }
  })
  return tempAccount
}

Bank.prototype.payInterest = function(){
  return this.accounts.map(function(account){
    account.value *= 1.1;
    return account;
  })

}

Bank.prototype.businessAccounts = function(){
  const businessAccounts = this.accounts.filter(function(account){
    return account.type === 'business';
  })
  return businessAccounts;
}

Bank.prototype.totalValue = function(){
  const total = this.accounts.reduce(function(runningTotal, account){
    return runningTotal + account.value;
  }, 0)
  return total;
}

Bank.prototype.averageValue = function(){
  const average = this.totalValue()/this.accounts.length;
  return average;
}

module.exports = Bank;
