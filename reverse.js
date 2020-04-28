/*
Create a function that accepts one parameter, an array of elements, and logs every element, 
beginning at the back of the input array and ending at the front of the input array, to the console.
*/

function loopInReverse(array) {
    // for loop that iterates from the back to the front of array
    for(var i = array.length -1; i >= 0; i--){
        // logs current element in the array
        console.log(array[i]);
    }
}

//testing our function by calling it

console.log(loopInReverse([1, 2, 3, 4, 5, 6, 7, 8]));
/* will log:
8
7
6
5
4
3
2
1
*/

console.log(loopInReverse(['karina', 'austin', 'jordan']));
/* will log:
jordan
austin
karina
*/