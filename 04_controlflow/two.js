//for of loop
const arr=[1,2,3,4,5]

for(const num of arr)
{
    //console.log(num);
    
}
const greetings= "Hello world!"
for(const greet of greetings)
{
    //console.log(`Each char is ${greet}`)
} 

const map=new Map()
map.set('IN',"India")
map.set('USA',"United states of America")
map.set('UK',"United Kingdoms")
map.set('Fr',"France")

//console.log(map);

for(const [key,value] of map)
{
    console.log(key,":- ",value); 
}

//This for of loop doesnt work for objects
//for objects we can use for in loop



