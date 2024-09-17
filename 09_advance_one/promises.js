const promiseOne=new Promise(function(resolve,reject){
    //do as async
    //DB calls,cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve();
    },1000)
})
promiseOne.then(function(){
    console.log("Promise consumed");
})

//-----------------------------------------------------------------

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async 2 ");
        resolve();
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})

//---------------------------------------------------------------------------------------------------------------

const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai",  email:"chai@example"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})
//---------------------------------------------------------------------------------------------------

const promisefour= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error)
        {
            resolve({username: "Aditi", password: "123"})
        }
        else{
            reject('ERROR: something is wrong')
        }
    },1000)
})

promisefour
.then((user)=>{
    console.log(user);
    return user.username;
})
.then((username)=>{
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(()=>console.log("The Promise is either resolved or rejected"));

//-------------------------------------------------------------------------------------------------------------------

const promiseFive= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error)
        {
            resolve({username: "Aditi", password: "123"})
        }
        else{
            reject('ERROR: something is wrong')
        }
    },1000)
})

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response);
    } catch(error){
        console.log(error);
    }
}
consumePromiseFive()



