// write a function that will calculate the avarage of the numbers  in a given list

// Important note: Empty arrays should return 0


function avarageOfAllNums(numbers) {
    if (numbers.length === 0) {
        return 0;
    }

    const total = number.reduce((sum, n) => sum + n, 0);
    const avarage = total / numbers.length;
    return avarage;

}
