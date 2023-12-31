let name="Rahul"
let age=18

//number=>2 to power 53
//bigint
//string=>""
//boolean=> true/false
// null=>standalone value
//undefined=>
//symbol=>unique
const arr=[1,2,3];
console.log(typeof arr);//object
// Stack(Primmitive ), Heap(Non-Primmitive)
let myName="Rahul Dev"
let newName=myName;
newName="Rahul Garg";
console.log(myName);
console.log(newName);
 // All primittives data types follow call by value rule i.e when you assign the
 // value of one variable to another variable then only vopy of value occurs.


let obj={
    age:20,
Name:"Rahul"
}
let obj2=obj;
obj.age=23;
console.log(obj.age);
console.log(obj2.age);

// All non-primittive data type follow the call by reference rule that means they share there
//actual reference.