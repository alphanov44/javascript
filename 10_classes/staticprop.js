class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }
     static createId(){
        return `123`
    }
}

const aditi = new User("Aditi")
console.log(aditi.createId());