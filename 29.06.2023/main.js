// make a functions that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error"


// I will need to return a string

// my return will need to have the value multiplied by 50 and than increased by 6.

function valueMultiplied(x) {
    if (typeof x === "string") {
        return "Error";
    }
    return(value * 50) + 6;
}

// Arrow function

const multiplyAndIncrease = value => {
    if (typeof x === "string") {

        return "Error";
    }

    return(value * 50) + 6;
};


// shortest arrow function with use of ternary operator instead

const multiplyAndIncreasee = value => typeof x === "string" ? "Error" : value * 50 + 6;
