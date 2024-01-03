const balance=new Number(10000)
console.log(balance);
console.log(balance.toString().length);
console.log(typeof balance);
console.log(balance.toFixed(2));

console.log(balance.toLocaleString('en-IN'));
// ++++++++++++++++++++ Maths +++++++++++++++++++++++++
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.random());
// Math.random gives us the value between 0 and 1  in decimals.
console.log(Math.floor((Math.random()*10))+1);
const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+10);
// this expression Math.random()*6 gives us the value 0 to 6 in decimals.