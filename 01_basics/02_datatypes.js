let name="Aditi"
let age=20
let isloggedin=false

//number=> 2 to power 53
//bigint
//string=" "

//null = standalone value
//undefined 
//symbol = unique

// console.log(typeof age);

// console.log(typeof null) //object
// console.log(typeof undefined)//undefined

/*
Primitive Type
7 Types: string,Number,Boolean,null,undefined,Symbol,BigInt
Reference Type (Non primitive)
eg : arrays,objects,funstions
const heros=["sakti","naag","jaat"]
let myobj={
name:"Aditi"
age: 20
   }
*/
const myfunction=function()
{
    //console.log("Hello world");
}


//---------------------------------------------------------------------
let myyoutubename="aditinandapurkardotcom"
let anothername=myyoutubename
anothername="chaipecharcha"

console.log(myyoutubename);
console.log(anothername);
//primitive datatypes mdhe copy detat mhnun no changein original myyoutubename
//IN STACK


//nonprimitive
let user1=
{
    email: "user@google.com",
    upi: "user@ybl"
}
let user2=user1
user2.email="parthdukkarr"
console.log(user1.email);//parthdukkar
console.log(user2.email);//parthdukkar
//in nonprimitive they refer to same object and no copy is created 
//in HEAP  

//---summary---
//stack mein copy
//heap mein reference



