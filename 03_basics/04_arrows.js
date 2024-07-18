const user={
    username:"Rahul",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`)
    }

}
// this refers to current context of objects  i.e variables etc.
user.welcomeMessage();
user.username="sam"
user.welcomeMessage()
// arrow function in javaScript
const ans= () => {
    let username="hitesh"
    console.log(this.username)

}
ans();
// inside the function using this keyword gives us undefined value.
//const addTwo = (num1,num2) => {
//return num1+num2
// we have to use return keyword with curly braces.
//}
//another way of definning arrow function hint: useful in objects
const addTwo=(num1,num2)=>(num1+num2)
console.log(addTwo(3,8))
