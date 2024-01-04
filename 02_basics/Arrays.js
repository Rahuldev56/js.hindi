// Arrays i JavaScript.
const myArr=[1,2,3,4,5,6];
console.log(myArr);
// Array Methods.
myArr.push(6);
// push method add the value at last index+1 position.
console.log(myArr);
console.log(myArr.pop());
// it return the value that present at last index
myArr.unshift(9);
console.log(myArr);
// unshift method add the specific value at 0 index and shift other values to next indexes.
// shift method is reverse i.e delete the value at 0 index and shift other values to left index.
console.log(myArr.shift());
console.log(myArr);
// Questioneer Methods.
console.log(myArr.includes(10));
//includes method helps us to tell the value is present in the list or not.i.e boolean value.
console.log(myArr.indexOf(9));
//index of method tell the index of given value.if not present return -1 value
const newArr=myArr.join()
console.log(newArr);

//by using join method it converts the array object into string.
// slice Method in javascript.
console.log("A",myArr);
const my1=myArr.slice(1,3);
console.log(my1);
console.log(myArr);
// slice method slice the array from begining  provided index to ending-1 index.
// slice method doesn't change the structure of the original Array.
const my2=myArr.splice(1,3);
console.log(my2);
console.log(myArr);
// splice method actually delete the elements that are provided in the range of the array.
// splice method change the structure of the original Array.
