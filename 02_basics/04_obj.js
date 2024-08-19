//const tinderuser = new Object() //singleton object
const tinderUser = {}            //non singleton object
//both output the same thing =>{}

tinderUser.id="123abc"
tinderUser.name="sammy"
tinderUser.isloggedin=false

//console.log(tinderUser);

const regularuser =
{
    email: "some@gmail.com",
    fullname:
    {
        userfullname:
        {
            firstname:"Aditi",
            lastname: "Nands"
        }
    }
}
//console.log(regularuser);
//console.log(regularuser.fullname.userfullname.firstname);
 
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

//const obj3=Object.assign({},obj1,obj2)
//console.log(obj3);

const obj3={...obj1,...obj2}
//console.log(obj3);

//Array of objects
// const users=
// [
//     {
//         id :1,
//         email: "h@gmail.com"
//     },
//     {
//         id:2
//         email:"ddfearf"
//     },
//     {
//         id :3,
//         email: "ail.com"
//     },
//     {
//         id :4,
//         email: "h@.com"
//     }
// ]
//console.log(users[1].email);

//console.log(Objects.keys(tinderUser));

const course =
{
    coursename: "afrherf",
    price: "999",
    courseInstructor : "hitesh"
}

//Typical
//course.courseinstructor

const {courseInstructor}=course
console.log(courseInstructor);
//can write course instructor directly now
//this is known as object destructuring

//json
// {
//     "name":"Aditi",
//     "coursename":"dsa",
//     "price":"free"
// }

