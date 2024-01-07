const userEmail="r@hul.ai"
if(userEmail){
    console.log("Got user email")
}
else{
    console.log("Dont have a user email")
}
// falsey Values in javaScript.
// false,"",0,-0,NaN,BigInt,0n,undefined.
// truthy values
//"0",'false'," ",[],{},function(){}
// how to check the size of empty array.
const array=[]
if(array.length==0){
    console.log("Array is Empty")
}
// how to check object is empty.
const emptyObj={}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is Empty")
}
