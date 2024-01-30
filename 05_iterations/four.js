// filter in javaScript.
// filter method return an array of values which satisfy the conditions.
const myNums=[1,2,3,4,5,6,7,8,9,10]
 const nums= myNums.filter((nums)=>{
    if(nums>4){
        return nums
    } 
})
console.log(nums)
// same Example with for each loop.
const arr=[]
 myNums.forEach((nums)=>{
    if(nums>2){
     return   arr.push(nums)
    }
})
console.log(arr)
// map function in javaScript
const myNumbers=[1,2,3,4,5,6,7,8,9,10]
 const ans=myNumbers.map((num)=>{
    return num +2;
})
console.log(ans)
// chaining in javaScript
const ans2=myNumbers.map((nums)=>{
    return nums*10;
}).map((nums)=>(nums+1)).filter((nums)=>nums>50)
console.log(ans2)

// reduce function in javaScript.
//The final result of running the reduce across all elements of the array is a single value.
const newArr=[1,2,3,4,5,6,7,8,9]
const ans1= newArr.reduce((acc,item)=>{
    
        return acc+item
    

},2);
console.log(ans1);