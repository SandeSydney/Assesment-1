/**
 * Question 2 * 
 * Given a string S of length N, write a JavaScript function that transforms the
 * string by reversing characters in groups of four and returns the transformed string.
 * e.g., when S = 'Lorem at' the output should be 'eroLta m' When S = ' Tempor ip' the output 
 * should be 'meT roppi'
 */

function reverseTransformer(userString){

    // var to value of transformed string
    let modString = '';

    // loop through the inputed string until the lenth is zero, adding in ranges of 4
    for (let i = 0; i < userString.length; i+4) {
        
        modString += userString.split('').slice(0,4).reverse().join('')
        userString = userString.slice(4);
     }
 
    return modString;
}

// testing function
console.log(reverseTransformer(' Tempor ip'));