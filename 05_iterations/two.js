// for of
const arr=[1,2,3,4,5]
for (const num of arr) {
    console.log(num);
}
const greetings="Hello World"
for(const greet of greetings){
    console.log(greet)
}
// Maps in javaScript.
// order map ,Keys in map cannot duplicate.

const map=new Map()
map.set('IN',"India")
map.set('USA',"United State Of America")
map.set('Fr',"France")

console.log(map);
for (const [key,value] of map) {
    console.log(value)
}
// for in loop with array and objects.
const profile={
    name:"Rahul Dev",
    age:21,
    gender:"Male",
    name:"asha"
}
for (const key in  profile) {
    console.log(key)
   
}
const arr1 = [1,2,3,4,5]
for (const i in arr) {
    console.log(arr1[i]);
    
}
// for in loop with arr return key as index value.
// for each loop in javaScript.
const coding=["js","ruby","java","C++"]
 
