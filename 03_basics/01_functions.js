// functions in javascript Why function?
//for doing repetable task .
function sumOfTwoNumbers(num1,num2){
    return num1+num2
    // after return statement no statement is reachable.
}
const result=sumOfTwoNumbers(2,9)
console.log(result);
 function loginUserMessage(username){
    if(!username){
        console.log(`please enter a userName`)
        return
    }
    return `${username} just logged  in`

 }
 const output=loginUserMessage()
 console.log(output);


