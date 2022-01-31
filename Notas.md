FrontendMasters-JavaScript-From-Fundamentals-to-Functional-JS-v2 Bianca Gandolfo

Class notes and exercises by Juan David Lis Santofimio, Juanuary 2022


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
