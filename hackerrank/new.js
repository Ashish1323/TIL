function findMaxContiguousLength(arr) {
    if (arr.length === 0) {
        return 0;
    }

    let maxLength = 1;
    let incLength = 1;
    let decLength = 1;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) {
            incLength += 1;
            decLength = 1;
        } else if (arr[i] < arr[i - 1]) {
            decLength += 1;
            incLength = 1;
        } else {
            incLength = 1;
            decLength = 1;
        }

        maxLength = Math.max(maxLength, incLength, decLength);
    }

    return maxLength;
}

// Example usage:
let N = 6;
let A = [25, 46, 15, 96, 24, 10];

let B=[2,2,2]
console.log(findMaxContiguousLength(B));  // Output should be 3
