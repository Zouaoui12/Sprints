// ESSENTIAL
// 1.Write a function called arrayFor that takes an array as a parameter, loops through all the elements using For Loop 
// and prints all elements of the array in the console using console.log.
function arrayFor(array) {
   for (let i=0;i<array.length;i++){
   console.log(array[i]);
}
 }  
//  2.Write a function called arrayWhile that takes an array as a parameter, loops through all the elements using While 
// Loop and prints all elements of the array in the console using console.log.
function arrayForw(array) {
 let i=0
 while (i<array.length) {
    console.log(array[i]);
    i++
 }   
 }
//  3.Write a function called sum that takes an array of numbers
//  as a parameter and returns the sum of the numbers in the array.
function sum(array) {
    let result=0
    for (let i=0;i<array.length;i++){
 result+=array.at(i)
    }
 return result  
}  
// 4.Write a function called sumEveryOther that takes an array of numbers as a parameter and returns the summation of every other number starting from the beginning of the array.
function sumEveryOther(array) {
    let result=0
    for (let i=0;i<array.length;i+=2){
 result+=array.at(i)
    }
 return result  
}  
let sumEveryOthera= function(array){
    let result=0
        for (let i=0;i<array.length;i++){
            if (i%2===0){
        result+=array.at(i)} 
    }
    
    return result
}
// 5.Write a function called sumStartAt that takes an array of numbers, 
// and an index as parameters and returns the summation of every number starting 
// from the inputted index, until the end of the array.
function sumStartAt(array, index) {
    let result = 0
//    for( let i=index ; i<array.length; i++){
//     result+=array[i]
        
//     }
for (index ; index < array.length; index++) {
     result+= array[index];
    
}
    return result 
    
 }  
//  6.Write a function called sumUntil that takes an array of numbers, 
// and an index as parameters and returns the summation of every number
//  starting from the index 0, until the index parameter.
function sumUntil(array, index) {

    let result=0
    if (index>array.length) { return "this index is out of bound"
        
    }
    for (let i =0 ; i <= index; i++) { 
        
    
        result += array[i];

        console.log( array[i]);
        
            
        

    }
    
    return result
    
  }  
//   7.Write a function called subtractReverse that takes an array of numbers as a parameter and
//    returns the subtraction of every number beginning at the last element of the input array and
    // ending at the first element of the input array (in reverse).
    function subtractReverse(array) {
       let result =0
       for (let i = array.length-1; i <=0; i--) {
        result -= array[i];
        
       }
       return result
     }  
    //  8.Write a function called product that takes an array as a parameter and 
    //  returns the product of all the elements in the array.

    function sumUntil2(array, index) {
        let result = 0
        result = index > (array.length - 1) ? "the index is not a defined" : (() => {
            for (let i = 0; i <= index; i++) {
                result += (array[i]);
                
            }
            return result
        })()
    
    
        return result
    
    }