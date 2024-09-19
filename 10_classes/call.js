function setusername(username){
    //complex DB calls
    this.username=username
    console.log("Called:D");
    
}

function createuser(username,email,password){
    //setusername(username) -----------doesnt get called
    //setusername.call(username)------//sirf run hoga doesnt print the name,,, reference hold karke nai rakhta
    //so we use
    setusername.call(this,username)
    this.email = email
    this .password = password
}
const chai = new createuser("ADii","chai@fb.com","1234")
console.log(chai);
