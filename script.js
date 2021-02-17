console.log("Functions: three ways to write them: exercise");

/*Functions: three ways to write them: exercise
In this exercise we're going to write a single function in three styles.

The function we're going to create will do the following.

-take two numbers
-each number will be squared (multiplied with itself)
-the squared numbers will be added together
-this sum will be squared again
-the resulting value is returned

After you're done, check that all three functions give the same result if you give them the same arguments.
*/
console.log("Function declarations");

function square(number1, number2) {
    return (((number1 * number1) + (number2 * number2)) * ((number1 * number1) + (number2 * number2)));
}

console.log(square(5, 5));

console.log("Function expressions");

const square1 = function (number1, number2) {
    return (((number1 * number1) + (number2 * number2)) * ((number1 * number1) + (number2 * number2)));
};

console.log(square1(5, 5));

console.log("Arrow functions");

const square2 = (number1, number2) => {
    return (((number1 * number1) + (number2 * number2)) * ((number1 * number1) + (number2 * number2)));
};

console.log(square2(5, 5));
