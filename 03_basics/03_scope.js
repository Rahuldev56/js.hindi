// Scopes in javaScript
if(true){
    //parent Scope
    const name="Rahul dev"
    if(name){
        // child scope
        const age=23
        console.log(name)
    }
   // error  console.log(age);
   // because iam trying to access child scope identity in parent Scope.
}
// hoisting in javaScript
sum(3,5);
const sum=function(a,b){
    console.log(sum);
}
// this is called  mini hoisting because i am trying to access sum variable which is not initialize yet.
