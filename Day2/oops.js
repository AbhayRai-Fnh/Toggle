// new keyword is constructor function which create new and unique instance

function User(username, email) {
    this.username = username;
    this.email = email;
    // return this;
}
const userOne = new User("Abhay", "abhay@gmail.com");
const userTwo = User("Subham", "subham@gmail.com")
console.log(userOne)
