// utility functions
class User{

    static id = 1;

    constructor(name,age){
        this.id = User.id ++;
        this.name = name;
        this.age = age;
    }

    static compareByAge(user1,user2){
        return user1.age - user2.age;
    }

    static {
        console.log('for initialization')
    }
}


const user1 = new User('zetro',30);
const user2 = new User('jhon',40);
const user3 = new User('ali',33);

const users = [user1,user2,user3]

users.sort(User.compareByAge);

console.log(user1,user2,user3)