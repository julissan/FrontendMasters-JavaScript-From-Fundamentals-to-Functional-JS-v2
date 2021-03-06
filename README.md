# FrontendMasters-JavaScript-From-Fundamentals-to-Functional-JS-v2

FrontendMasters-JavaScript-From-Fundamentals-to-Functional-JS-v2 Bianca Gandolfo (Thumbtack)

Class notes and exercises by Juan David Lis Santofimio, Juanuary - February 2022


INTRODUCTION

    The course in NOT about functional programming, but it will prepare you well if you decide to take the next step in that journey and most importantly, it will make you a more confident and capable JavaScript programmer.

    The course will strengthen your understanding of tricky JavaScript concepts by:

        - Understanding how to use functional utility methods.
        - Understanding how to implement those methods.
        - Applying JS fundamentals throughout the process.
        - Adding some related ES6features.

    Sucess Tips for Learning

        - Difficulty ramps up considerably, but if you stick with it you will reap the rewards.
        - Take responsibility for your learning.
        - Consider the questions I ask you.

    What is functional programming?

        Unlike object oriented programming that is about objects("things"), funcitonal programming is all about functions("actions") and doing things with those functions(returning them form other functions or passing them as parameters to other functions).

OBJECTS & ARRAYS

    Property Access:

        Everything in JS that uses the dot notation is an object.
        You can use the structure Object.property to access the property of an object (f.e. person.name).
        
        When making an assignment, primitive types will get passed a value, but non-primitive values get passed by reference (changing a property of an object will change other references in functions, objects, etc. to that property).

        To avoid errors, is recommended that instead of modifying a data structure, just create a copy and then pass it so when you update the original data structure, your code won't change in unexpected ways.

    Arrays:

        Array is a subtype of object, that means they are objects and as such it have its own propertys and methods.
        (Array.length, Array.push(), etc).

        Bracket Notation: The "[]" that you use with an array what it really makes is turn the number of the position in the array(f.e. array[0]) and turning it and making it a property, just that the notation you usually use is different(easier to read). However, besides beaing propertys, you can access the positions of an array using the dot notation, you have to use the bracket notation you usually use.

        if you assign a value to a position grater than 0 in an empty array, the length will be modified to the position you assigned something to +1 (zero indexed), and the lower postions will be "declared" but empty.

    Objects:

        The Rules for Notation:
            Dots:                   Brackets:
            ??? strings              ??? strings
            X numbers               ??? numbers
            X quotations            ??? quotations
            X weird characters      ??? weird characters
            X expressions           ??? expressions

        Why dots are used so much compared to brackets then?
            
            Because you'll have to type less and if you have to code all day that can save a lot of time.
            Dot notation is a very powerful tool as long as you're aware of the rules to avoid getting errors.

    ES6 Destructuring

        Destructuring: A simplified way of defining variables and taking them outside outside of an object or an array. It's a tool that can help to have to type less code in some situations.

        Array Destructuring:

            Variable Declarations:

            The Target(left side of the equals) The Source(right side of the equals)

            const [first, second] = [true, false];
            let [first, second] = [true, false];
            var [first, second] = [true, false];

            Assignment:

            [first, second] = [true, false];

        This is array destructuring to variable declaration, using arrays this wya we can declare a lot of variables naming them, and then assign values to them in the order they're in the array.

        Object Destructuring: min 10
