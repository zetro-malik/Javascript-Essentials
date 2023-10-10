class BankAccount{
    customerName;
    accountNumber = Date.now();
    balance = 0;

    constructor(customerName, balance = 0){
            this.customerName = customerName;
            this.balance = balance;
    }

    deposit(amount){
        this.balance +=amount;
    }

    withdraw(amount){
        this.balance -=amount;
    }

}


class CurrentAccount extends BankAccount{
    transactionLimit = 50000;

    constructor(customerName, balance = 0){
        super(customerName,balance)
    }

    takeBusinessLoan(amount){
        console.log('taking business load '+amount)
    }
}

class SavingAccount extends BankAccount{
    transactionLimit = 1000;

    constructor(customerName, balance = 0){
        super(customerName,balance)
    }

    takePersonalLoan(amount){
        console.log('taking personal load '+amount)
    }
}



const zetroCurrent  = new CurrentAccount('zetro',1000);
const zetroSaving  = new SavingAccount('zetro',2000);

zetroCurrent.deposit(2);

zetroCurrent.takeBusinessLoan(1);

zetroSaving.takePersonalLoan(2);

console.log(zetroCurrent);
console.log(zetroSaving);