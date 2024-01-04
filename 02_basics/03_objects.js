// singleton 
//object literals
const mySym= Symbol("key")

const JsUser={
 name:"rahul",
"full name":"Rahul dev",
[mySym]:"key1",
age:18,
location:"delhi",
email:"rahul@google.com",
isLoggedIn:false,
lastloginDays:["Monday","Saturday"]

}

//how to access the values of the objects?

console.log(JsUser.name);
console.log(typeof JsUser.name);
// here the typeof keys of the objects acts as a string.
console.log(JsUser["full name"]);
//[] this is the another way accessing the values of keys 
// in this case it is impossible to access the value of key in object.because default keys type are string.
console.log(typeof JsUser[mySym]);
console.log(JsUser);
JsUser.greetings=function(){
console.log(`Hello guys I am coming Back, ${this["full name"]} The legend`)
}
console.log(JsUser.greetings());