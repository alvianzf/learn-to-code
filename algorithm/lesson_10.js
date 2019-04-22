// lesson 10

// loopings

/**
 * There is something in the world of programming that is called
 * "DONT REPEAT YOURSELF"
 * 
 * the code must be compact and can be dynamically adjusted to circumstances
 * a loop, as it is called, loops a block of code for us, so we wouldn't have to write the same thing over and over again
 * 
 * We will cover the for loop for now
 */

 /**
  * condition: 
  * we will show this (code ) 25 times
  */

  // regular code

  console.log('code code code code code code code code code code code code code code code code code code code code code code code code code code ')

  //for loop

  var results = ''
  for(var i=0; i<25; i++){
    results += 'code '
  }

  console.log(results)

 /**
  * Task:
  * make a loop with the result:
  * 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  */