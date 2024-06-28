function convertToBase(n, base) {
    const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    
    while (n > 0) {
        result = digits[n % base] + result;
        n = Math.floor(n / base);
    }

    return result;
}

function findLexicographicallySmallestBase(n) {
    let smallest = convertToBase(n, 2);

    for (let base = 3; base <= 36; base++) {
        let converted = convertToBase(n, base);
        if (converted < smallest) {
            smallest = converted;
        }
    }

    return smallest;
}

// Example usage:
let input1 = 5;
console.log(findLexicographicallySmallestBase(input1));  // Output should be "10"

input1 = 50;
console.log(findLexicographicallySmallestBase(input1));  // Output should be "101"
