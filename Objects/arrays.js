//Arrays

var x = [];

x["0"] = "hello";

console.log(x[0]);                 //hello

/*********************************/

var person1 = [];                //Declares as an array instead of an object

person1.name = "Mrs. White";

console.log(person1.name);

var who = person1.name;

console.log(who);

console.log(typeof person1);     //We can see that arrays are in fact objects, and work as such.

/*************************************/
//Bracket Notation

var person2 = [];
var plea = "wouldShe";

person2.name = "Mrs. White";

var who = person2.name;

person2[0] = "I was not in the Billiards room";

person2[plea] = "I would never!";

console.log(person2[0]);        //Can't access the position of the array with person2.0;

console.log(person2[plea]);

console.log(person2.wouldShe);  //Same result because the property name is wouldShe, but to access with this position we need the variable name

console.log(person2["wouldShe"]);  //Or use "" around the property name


