const coding = ["js","ruby","java","python","cpp"]

//for each loop returns nothing
const values= coding.forEach((item)=>
{
    //console.log(item);
    return item
})
console.log(values);
//values always is undefined

const mynums=[1,2,3,4,5,6,7,8,9,10]
const newnums=mynums.filter((num)=>
{
    return num>4;
})
//idhar we have started a scope { } lagake
//toh we need to write return keyword
//otherwise no need of return keyword
console.log(newnums);