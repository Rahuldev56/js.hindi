// logic Flow in javaScript.
const balance=2000
if(balance>800){
    console.log(`you can buy with ${balance}`)
}
else{
    console.log(`you cannot buy`)
}
const userLoggedIn=true
const debitCard=true
const loggedInFromGoogle=false
const loggedInFromEmail=true
if(userLoggedIn && debitCard){
    console.log("Allow to buy course")
}
if(loggedInFromEmail || loggedInFromGoogle){
   console.log("user logged in") ;
}