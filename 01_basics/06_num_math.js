const score=400
//console.log(score);//400

let newnum=new Number(100);
//console.log(newnum);//[Number: 100]

// console.log(newnum.toString().length);  //3
// console.log(newnum.toFixed(2)); //100.00 (decimals)

const hundreds=1000000
// console.log(hundreds.toLocaleString()); //1,000,000
// console.log(hundreds.toLocaleString('en-IN')); //10,00,000  for indian standards

//++++++++++++++ MATH ++++++++++++
// console.log(Math);
// console.log(Math.abs(-4));//4
// console.log(Math.abs(4)); //4
// console.log(Math.round(4.6));//5  [.ceil,.floor also available for ceiling and floor value]

console.log(Math.random());//always returns different values between 0 and 1 ie mostly decimal
console.log((Math.random()*10) + 1);//deciaml shifts by one place Therefore we get values between 0-9.

const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min);







