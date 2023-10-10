class BankAccount{
    customerName;
    accountNumber = Date.now();
    #balance = 0;

    constructor(customerName, balance = 0){
            this.customerName = customerName;
            this.#balance = balance;
    }

    deposit(amount){
        this.#balance +=amount;
    }

    withdraw(amount){
        this.#balance -=amount;
    }

    set balanace(bal){
        this.#balance = bal;

    }

    get balanace(){
        return this.#balance;
    }

}


class CurrentAccount extends BankAccount{
    transactionLimit = 50000;

    constructor(customerName, balance = 0){
        super(customerName,balance)
    }

   #calculateInterest(){
        console.log('taking interest')
    }

    takeBusinessLoan(amount){
        this.#calculateInterest();
        console.log('taking business load '+amount)
    }
}


const zetroCurrent  = new CurrentAccount('zetro',1000);


zetroCurrent.deposit(2);

zetroCurrent.balance = 25

zetroCurrent.takeBusinessLoan(1);

console.log(zetroCurrent.balance);