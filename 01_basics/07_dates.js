let mydate=new Date()
// console.log(mydate);//unreadable format
// console.log(mydate.toString());
// console.log(mydate.toLocaleString());

// console.log(typeof mydate); //object
//let createddate=new Date(2023,0,23)
//console.log(createddate.toDateString()); //MONDAY jan 23 2023

//let createddate=new Date(2023,0,23,5,3)
//console.log(createddate.toLocaleString()); //1/232023 , 5:03:00 AM

let createddate=new Date("2023-01-14");//one more format

let mytimestamp=Date.now()
//console.log(mytimestamp);

//console.log(Math.floor(Date.now()/1000));

let newdate= new Date()
// console.log(newdate);
// console.log(newdate.getMonth());
// console.log(newdate.getDay());

newdate.toLocaleDateString('default',{
    weekday: "long"
})
console.log(newdate);








 




