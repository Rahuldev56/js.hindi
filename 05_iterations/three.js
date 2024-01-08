const coding=["js","ruby","java","c++","python"]
coding.forEach((item)=>{
console.log(item)
}
)
// for each loop for iterate array with function or arrow function
const myCoding=[
    {
        languageName:"javaScript",
        languageFileName:"js"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"Python",
        languageFileName:"py"
    },
    {
        languageName:"java",
        languageFileName:"py"
    }
]
 const arr2=myCoding.filter((data)=>(data.languageName==="java" ))
 console.log(arr2)