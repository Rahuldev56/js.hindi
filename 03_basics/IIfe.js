// Immediately Invoked Function Expressions (IIFE)
// Sometime there is pollution occurs due global Scope Varaiable.
// compulsary to terminate context ; symbol in IIfe
// How to Declare and use IIfe functions.
(function chai(){
    // named IIfi
    console.log("executed")
})();
((age)=>{
    // IIfi
    console.log(`executed and age is ${age}`)
})(34)