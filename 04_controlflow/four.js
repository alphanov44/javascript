const coding=["js","ruby","java","python","cpp"]
// coding.forEach(function (val)
// {
//     console.log(val);
// })
coding.forEach((item)=>
{
    console.log(item);
})

//item ke sath aur baki bohot chije bhi hai jaiseki index
coding.forEach((item,index,arr)=>
{
    console.log(item,index,arr);
})

