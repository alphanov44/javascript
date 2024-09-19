// let myname="Aditi     "

// console.log(myname.length);// includes spaces also in length
// console.log(myname.truelength);

let myheroes=["thor","hulk"]

let heropower = {
    thor:"hammer",
    spiderman:"sling",
    getspiderPower : function(){
    console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.Aditi=function(){
    console.log(`Aditi is present`);
}
myheroes.Aditi();

//can give this power to array specifically
Array.prototype.heyAda=function(){
    console.log(`Aditi is tha best`);
}
myheroes.heyAda(); //ARRAYS LA BHETLI so no error
//heropower.heyAda(); //FUNCTIONS la nai bhetliye so gives error

//INHERITENCE

// const user={
//     name:"chai",
//     email:"chai@google.com"
// }
// const Teacher={
//     makeVideo: true
// }
// const Teachingsupport={
//     makeVideo:true
// }
// const TAsupport={
//     makeAssignment:'JS assignment',
//     fulltime:true,
//     __proto__:Teachingsupport
// }
// Teacher.__proto__=User

//modern syntax
//Object.setPrototypeOf(Teachingsupport,Teacher)


let another="chaiaurcode    "
String.prototype.truelength = function(){
    console.log(`${this}`); //this ke andar = chaiaurcode
    console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}

another.truelength();

