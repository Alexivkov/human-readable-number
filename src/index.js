module.exports = function toReadable(number) {
    let digit = [
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    let fromTenToNineteen = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    let tens = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    let hundreds = "";
    if (number === 0) return "zero";
    if (number > 99) {
        hundreds = digit[Math.floor(number / 100) - 1] + " hundred ";
        if (number % 100 === 0) return hundreds.slice(0, -1);
        else number = number % 100;
    }
    if (number < 10) {
        return hundreds + digit[number - 1];
    } else if (number < 20) {
        return hundreds + fromTenToNineteen[number % 10];
    } else if (number < 100) {
        let digit = "";
        if (number % 10 === 0) digit = "";
        else digit = " " + toReadable(number % 10);
        return hundreds + tens[Math.floor(number / 10) - 2] + digit;
    }
};
