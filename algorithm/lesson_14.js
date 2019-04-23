// lesson 14

// functions

/**
 * Functions are a set of code that can be called again if needed
 * the function consists of 3 key components:
 * 
 * the argument, which is variables (or arrays) that would be included in the function
 * the code block, which is the process the function is for
 * the return or the output value that will be returned to the caller
 * 
 */

 function myFunction(firstNumber, secondNumber) {
     var addition = firstNumber + secondNumber

     return addition
 }

 /**
  * here we have myFunction, a function that adds two numbers together, notice that we ask for two arguments
  * firstNumber and secondNumber
  * 
  * the way we call it should be like:
 */

 var results = myFunction(2, 3)

 /**
  * the order of the arguments reflects the variable name on the function
  */


  /**
   * Assignment:
   * make and call a function to multiply two numbers
   */