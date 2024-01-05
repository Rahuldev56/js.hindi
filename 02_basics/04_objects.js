//const tinderUser= new Object()
//singleton Object.

const newUser={}
newUser.id="123abc"
newUser.name="sammy"
newUser.isLoggedIn=false
//console.log(newUser);

const regularuse={
    email:"rahul@gamil.com",
    fullname:{
        userfullname:{
            firstName:"Rahul",
            lastName:"dev"
        }
    }

}
//Nesting of Objects.
//console.log(regularuse.fullname.userfullname);
//accessing of nested objects.
const obj1={
    1:"a",2:"b"
}
const obj2={
    3:"c",4:"d"
}
const obj3={...obj1,...obj2}
console.log(obj3);
// for merging different object we use ... spread operator.
console.log(newUser);
console.log(Object.keys(newUser));
//Object.keys method returns  the keys of the object  as a array.
console.log(Object.values(newUser));
//Object.values  method returns  the keys of an object  as an  array.
//destrucutre of javaScript Object.
const{name:full_Name}=newUser
console.log(full_Name);