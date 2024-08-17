let score="33abc"
//console.log(typeof score);//string

let getnum=Number(score) 
// console.log(typeof getnum)//number
// console.log(getnum)  //NaN
//--------------------------------------------------------------------------------------------------

let num=undefined
//console.log(typeof num);//undefined

let numvalue=Number(num) 
// console.log(typeof num)//undefined
// console.log(num)  //NaN

//33=>33
//33abc=>NaN
//true=>1 false=>0

let isloggedin=1
let boolans=Boolean(isloggedin)
console.log(boolans);
//1=>true  0=>false
//""=>false
//"aditi"=>true
