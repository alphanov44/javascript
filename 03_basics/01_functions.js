function saymyname()
{
    //console.log("Aditi");
}
saymyname()

function addnum(number1,number2)
{
    //console.log(number1+number2);
}
addnum(2,3)  //5
addnum(1,"2")  //12

function loginuser(username)
{
    if(username===undefined)
    {
        //console.log("Please enter a username");
        return        
    }
    return `${username} just logged in`
}
// console.log(loginuser("Aditi"))
// console.log(loginuser());

function calculat(...num)
{
    return num
}
console.log(calculat(200,300,400))

const user=
{
    username :"Aditi",
    price:199
}




