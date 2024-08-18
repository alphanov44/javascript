//Arrays
//Array object, as with arrays in 
//other programming languages, 
//enables storing a collection of multiple items 
//under a single variable name, 
//and has members for performing common array operations.


//js arrays are resizable\

//copy operations create shallow copies
//ie a copy whose properties share the same references as that of source object

const myarr=[0,1,2,3,4,5]
const myheros=["shaktiman","blackman"]

const myarr2=new Array(1,2,3,4,5)
//console.log(myarr[1]);
myarr.push(6)
//console.log(myarr);

//push : insert at back
//unshift : insert at front
//pop : delete from end
//shift: delete from front

console.log(myarr.includes(9));//true or false
console.log(myarr.indexOf(3));
  
//slice aur splice
console.log("A",myarr);

const myn1=myarr.slice(1,3)
//slice returns section of array from index 1 and till 3,,3 excluded
//splice : includes 3 also but deletes above elements from the array
console.log(myn1);

