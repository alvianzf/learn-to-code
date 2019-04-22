// lesson 12

// manipulating the array

/**
 * We can manipulate the data inside the array by utilizing some functions
 * .push() is used to put elements to the end of the array
 * .pop() is used to take out an element at the end of the array
 * .shift() is used to take out an element at the beginning of the array
 * .unshift() is used to put an element on the beginning of an array
 */

 let exampleArray = ['first element', 'second element', 'third element', 'fourth element']
 console.log('base array: ', exampleArray)

// .push()

exampleArray.push('fifth element')
console.log(exampleArray)

// .pop()

exampleArray.pop()
console.log(exampleArray)

// .shift
exampleArray.shift()
console.log(exampleArray)

// .unshift()
exampleArray.unshift('first new array')
console.log(exampleArray)

/**
 * If you want to put an element at a specific position inside the array
 * it can be done using the index of the array
 * 
 */

 exampleArray[1] = 'a new element'
 console.log(exampleArray)

 /**
  * Assignment:
  * Manipulate this array:
  */

  let newArray = ['john', 'barry', 'joe', 'clive', 'james', 'drake']