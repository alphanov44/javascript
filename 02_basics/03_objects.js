//singelton => Object.create

//object literals
const mysum= Symbol("key1")
const jsuser=
{
    name: "Aditi",
    "fullname":"Aditi Nandapurkar",
    age: 20,
    location: "Jaipur",
    [mysum]: "mykey1",
    email: "hitesh@google.com",
    isloggedin: false,
    lastlogindays: ["Monday","Saturday"]
}
console.log(jsuser.email)
console.log(jsuser["email"])
console.log(jsuser[mysum]);

jsuser.greeting = function()
{
    console.log("Hello js user");
}
console.log(jsuser.greeting());