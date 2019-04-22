// lesson 13

// JSON

/**
 * JavaScript has a unique object data type which is currently the standard format of data transfer in the world
 * it consists of a key and a value,
 * it is written like:
 * { key: value, key_2: value_2, key_3: {key_4: value_4}}
 * 
 * to access the value, we can use dot notation
 */

 var Person = {name: 'John', age: 21, occupation: 'programmer'}

//  to access the name, we can simply use:

Person.name

console.log(Person.name)


/**
 * Assignment: create an object consisting of people around you!
 */

 /**
  * Multiple objects
  * we can put objects inside an array
  */

  var className = [{name: 'John', subject: 'Math', major: 'informatics' },{name: 'Mary', subject: 'history', major: 'arts'}, {name: 'Joe', subject: 'karate', major: 'sports'}]

  /**
   * We can access an element using the combination of array and dot notation
   */

   className[1].subject

   console.log(className[1].subject)

   /**
    * Assignment:
    * Create an array of objects of people in your class!
    */