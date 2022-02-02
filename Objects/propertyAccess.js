var person1 = {};

person1.name = "Mrs. White";    //Object dot assignment

console.log(person1.name);      //Mrs. White

var person2 = {
    name : "Mrs. White"         //Object literal notation
};

console.log(person2.name);      //Mrs. White

/**********************************/

var person3 = {};

person3.name = "Mrs. White";

console.log(person3.name);      //Mrs. White

var who = person3.name;

console.log(who);               //Mrs. White

person3.name = "Mr. White";

console.log(who);               //Mrs. White

console.log(person3.name);      //Mr. White