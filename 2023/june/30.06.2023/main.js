// Task find the sum of all multiples of n below m

// What to keep in mind is both n and m are natual numbers (positive integers) and m is excluded from the multiples


// Example


// sumMul(2, 9) ==> 2 + 4 + 6 + 8 = 20
// sumMul(3, 13) ==> 3 + 6 + 9 + 12 = 30
// sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
// sumMul(4, -7) ==> "INVALID"

// function takes n and m as parameters and returns the sum of numbers if neither of them are 0 it will come up with "INVALID"

function sumOfNumbers(n, m) {
    if (n <= 0 || m <= 0) {
        return "INVALID";
    }

    let sum = 0;
    for (let i = n; i < m; i += n) {
        sum += i;
    }
    return sum;
}
