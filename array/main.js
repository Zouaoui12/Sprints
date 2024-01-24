//7.Write a function called 
//subtractReverse that takes 
//an array of numbers as a parameter and returns the subtraction of every number beginning at the last element of the input array and ending at the first element 
//of the input array (in reverse).



// let subtractReverse = (array) => {
//     let output = array.at(-1)
//     for( let i = array.length-2;i>=0;i-- ) {
//         output -= array[i]
//     }
//     return output
// }
let subtractReverse = (array) => {
    let result = 0
for (let i = 0; i < array.length; i++) {
    if (i === array.length - 1) {
            result += array[i]
        }
    else result -= array[i]
    }
    return result
}


//11.Write a function called isArray that takes one parameter and returns 
//true if the input is array otherwise returns false.

function isArray(array) {
    return Array.isArray(array)
 } 

 //
//  EXTENTED
// 1.Write a function called min that takes an array as a parameter 
//and returns the smallest number from the array.

let min = (array) => {
    let smallest = array[0]
    for(let i =1;i<array.length;i++){
        if(array[i] < smallest) {
            smallest = array[i]
        }
    }
    return smallest

}


// 7.Write a function called multiplyBy that takes an array and number as parameters and returns a new array with each of the elements from the 
// array multiplied by the given number.
let multiplyBy = (array,number) => {
    let output = []
for(let i =0;i<array.length;i++) {
    output.push(array[i]*number)
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