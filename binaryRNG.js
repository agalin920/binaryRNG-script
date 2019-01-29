function flip() {
    return Math.random() >= 0.5;
  }
  
  
function randomNumber(n) {
  if(!n || n <= 0 || n > 1000000 ) throw new Error("Error");

  if(n === 1) return 0;

  let binString = ''

  /*This loop generates random binary digits limited by the max binary length of n.
 During each addition of a new binary digit the subroutine checks if the current random number produced
 is greater than n. If it is then the last binary digit is discarded, iteration ceases, and the random number is returned. 
 This elminates the need to rerandomize and avoids processing a random number that will be ultimately be rejected */
  for(let x in n.toString(2)){
    if(parseInt((flip() ? '1' : '0') + binString , 2) > n){
      break;
    }
    else{
      binString = (flip() ? '1' : '0') + binString;
    } 

  }
  return parseInt(binString, 2);
}
  

//Test Cases
console.log(  
  randomNumber(500), // returns 123
  randomNumber(1), // returns 0
  randomNumber(500), // returns 466
  //randomNumber(1000001) // throw error
); 


