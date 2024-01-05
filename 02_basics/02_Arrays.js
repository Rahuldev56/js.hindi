const marvelHeros=["thor","ironman","spiderMan"]
const dcHeros=["superman","flash","batman"]
//marvelHeros.push(dcHeros);
console.log(marvelHeros);
const allHeroes=marvelHeros.concat(dcHeros);
console.log(allHeroes)
// concat method add/combine  two or more Arrays or values  and return the new Array.
// we can use spread operator instead of concat .
const newHeroes=[...marvelHeros,...dcHeros]
console.log( newHeroes);
// is Array Method
const myString="Rahul dev"
console.log(Array.isArray(myString));
//isArray() Method is used to  verify the data type is an array or not.
//from Mehod
console.log(Array.from(myString));
//from method is used to convert the data type into a Array  .
let a=100
let b=1200
console.log( Array.of(a,b));
//of method is used to add a set of elements in the new Array object.


