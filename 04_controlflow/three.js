//for in loop
const myobj=
{
   js:'javascript',
   cpp:'C++',
   rb: "ruby",
   swift: "swift by apple" 
}


for(const key in myobj)
{
   //console.log(`${key} shortcut is for ${myobj[key]}`);                                                                                                                                                
}

//can also work for array
const programming=["js","rb","py","java","cpp"]

// for(const key in programming)
// {
//    //console.log(key);
//    //this prints keys of array that is indices.                                                                                                                                                
// }
//to print array:
for(const key in programming)
{
   console.log(programming[key]);                                                                                                                                                
}

//not applicble for maps ...since maps are not iteratable
//for in only for iteratable loops





