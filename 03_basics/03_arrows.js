const user = 
{
    username:"Aditi",
    price:999,
    WelcomeMsg: function()
    {
        console.log(`${this.username} ,welcome to website`);

    }
}
user.WelcomeMsg() //USES Aditi
user.username="Sona"
user.WelcomeMsg() //prints sona

console.log(this) //empty object

//basic arrow function
// () => {}

// const addtwo = (num1,num2) =>
// {
//     return num1+num2
// }

//this is implicit return 
//therefore we can remove { }

const addtwo = (num1,num2) => (num1+num2);














