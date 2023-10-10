//modern syntax for contructor_functions in ES6

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


const zetro  = new BankAccount('zetro',1000);

zetro.deposit(2);

console.log(zetro);