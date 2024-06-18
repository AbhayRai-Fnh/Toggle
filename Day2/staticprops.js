class User {
    constructor(username)
    {
        this.username=username;
    }
    logMe()
    {
        console.log(`${this.username}`);
    }
     static CreatId(){
        return `123`
     }
}
const chai=new User("Chai")
chai.logMe();
//chai.CreatId(); // Not able to access the method with instance

class masalaChai extends User {
    constructor (username,email)
    {
        super(username);
        this.email=email;
    }
}
const instanceOfmasalaChai=new masalaChai("MasalaChai","MasalaChai@gmail.com");
instanceOfmasalaChai.logMe();
instanceOfmasalaChai.CreatId();

