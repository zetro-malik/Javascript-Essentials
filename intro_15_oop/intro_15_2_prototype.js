//functions in this example are performing same for every object but each object is occupying memory for it
//to solve this we use prototype

function BankAccount(name ,balance=0){

    this.customerName = name;
    this.accountNumber = Date.now();
    this.balance =balance;

}


const zetro = new BankAccount('zetro',100)

BankAccount.prototype.deposit = function (amount) {
    this.balance +=amount;
};

BankAccount.prototype.withdraw = function (amount){
    this.balance -=amount;
}

zetro.deposit(2);

console.log(zetro);