//... rest Operator is used in function  to convert argument values int o array.
function calculateCartPrice(...num1){
    return num1
    }
    console.log(calculateCartPrice(200,400,500))
    // use of object with function.
    function objectUnderstanding(object1){
return object1.age;
    }
   console.log( objectUnderstanding({
    name:"Rahul Dev",
    age:22    
    }))
    // this is one way to pass object.
    const newObject={
        fullName:"Kritika Sharma",
        age:21,
        height:6.5
    }
    function objectUnderstanding2(newUser){
        console.log(`${newUser["fullName"]} is my classmate and now her age is ${newUser.age}`)
    }
    objectUnderstanding2(newObject);
    // functions with ArraysUnderstanding.
    const array=[1,2,3,4,5]
    function workWithArray(newArray){
        return newArray[0];
    }
    console.log(workWithArray(array))