//Immediately Invoked Function Expressions(IIFE)

//functions needed to be executed immediately
//syntax:
// ()()
//First ():function block.
//Second ():function call.


(function chai()
{
    console.log(`DB connected`);
    
})();


//used to get prevented from pollution of global scope
//need ; at its end

((name)=>
{
    console.log(`DB connected two ${name}`);
})('Aditi');



