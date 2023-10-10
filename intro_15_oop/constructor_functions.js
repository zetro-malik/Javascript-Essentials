
function BankAccount(name ,balance=0){
    this.customerName = name;
    this.accountNumber = Date.now();
    this.balance =balance;

    this.deposit = (amount)=>{
        this.balance +=amount;
    }

    this.withdraw = function (amount){
        this.balance -=amount;
    }
}



//every object will get a specific memory slot
//zetro and jhon are instance variable
//encapsulate the propertise in class, make them private and use setter:getter

const zetro = new BankAccount('zetro',1000);
const jhon = new BankAccount('JHON');
console.log(zetro.customerName,"\n\n\n",jhon);

zetro.deposit(5000);
console.log(zetro)

const copying_instance =  zetro;

//giving memory instance to another variable will change objects value
copying_instance.deposit(3);
console.log(zetro.balance);
copying_instance.withdraw(3);

console.log(zetro.balance);

