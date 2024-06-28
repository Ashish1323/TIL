function countBoxSets(n, sizes) {
    if (n === 0) return 0;

    // Sort the sizes array
    sizes.sort((a, b) => a - b);

    let sets = 1; // Start with one set

    // Traverse the sorted sizes array to group consecutive numbers
    for (let i = 1; i < n; i++) {
        // If the current box size is not consecutive to the previous one, start a new set
        if (sizes[i] !== sizes[i - 1] + 1) {
            sets++;
        }
    }

    return sets;
}

// Example usage:
const n1 = 6;
const sizes1 = [1, 2, 3, 5, 6, 8];
console.log(countBoxSets(n1, sizes1)); // Output: 3

const n2 = 4;
const sizes2 = [2, 1, 11, 3];
console.log(countBoxSets(n2, sizes2)); // Output: 2
