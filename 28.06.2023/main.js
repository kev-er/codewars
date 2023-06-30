// TASK

// I've written five functions. Each function receives a parameter arr which is an array. Complete the functions using arr inside the function bodies.

//     1. getLength(arr)    should return length of arr
function getLength(arr) {
    return arr.length;
}

//     2. getFirst(arr)     should return the first element of arr
function getFirst(arr) {
    return arr[0];
}

//     3. getLast(arr)      should return the last element of arr
function getLast(arr) {
    return arr[arr.length - 1];
}

//     4. pushElement(arr)  should push an element to arr, and then return arr
function pushElement(arr, element) {
    arr.push(element);
    return arr;
}

//     5. popElement(arr)   should pop an element from arr, and then return arr
function popElement(arr) {
    arr.pop();
    return arr;
}
