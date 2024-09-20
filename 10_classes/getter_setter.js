//getter setter always go in pair
class User{
    constructor(email,password){
        this.email=email;
        this.password=password
    }

    // get password(){
    //     return this.password.toUpperCase()
    // }
    // set password(value){
    //     this.password = value.toUpperCase()
    // }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email=value
    }
    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password=value
    }
}
let aditi=new User("Aditi","abcdefgh")
console.log(aditi.email
    
); //RANGE ERROR: maximum call stack size exceeded
//kyu?? competition gets started  between set and constructor to set the password
//Therefore goes into unlimited loop


