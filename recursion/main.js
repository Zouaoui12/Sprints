

// while loop iteration 
let factorielleWithwile = (n) => {
    let output = 1
    while (n >= 1) {
        output *= n
        n--
    }
    return output
}
// for loop iteration 
let factorielleWithFor = (n) => {
    let output = 1
    for (let i = 1; i <= n; i++) {
        output *= i
    }
    return output
}
// recursion ( iteration with function) 
let facto = (n) => {
//?? stoping condition || base case 
    if(n===0) {
        return 1
    }
//?? recursive case 
    return n*facto(n-1)
}
// Write a JavaScript function that will iterate from n to 0. 
// For each iteration,
//  it will check if the current number is odd or even,
//  and display a message to the screen.

function iterateAndLog(n) {

    if (n%2===0) {
        
    }
  
  }

