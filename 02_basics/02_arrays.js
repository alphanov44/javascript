const marvel_heros=["thor","ironman","spiderman"]
const dc_heros=["superman","flash","batman"]

//marvel_heros.push(dc_heros);
//console.log(marvel_heros);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);
//merged two arrays

// const all_new_heros = [...marvel_heros,...dc_heros]
// console.log(all_new_heros);
//spread operator(...) = also concates,, difference is we can add more than 2 arrays simultaneously

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)//instead of infinity we should mention
//console.log(real_another_array);

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh")) //['H','i','t','e','s','h']
console.log(Array.from({name:"Hitesh"}))//returns empty array
//interesting

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));