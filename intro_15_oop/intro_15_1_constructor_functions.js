
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




// ============================
const accounts = [];
const accountForm = document.querySelector('#accountForm');
const customerName = document.querySelector('#customerName');
const balance = document.querySelector('#balance');

const depositForm = document.querySelector('#depositForm');
const accountNumber = document.querySelector('#accountNumber');
const amount = document.querySelector('#amount');

accountForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const account = new BankAccount(customerName.value, +balance.value);
    accounts.push(account);
    console.log(accounts);
});

depositForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const account = accounts.find(
        (account) => account.accountNumber === +accountNumber.value
    );
    account.deposit(+amount.value);
    console.log(accounts);
});