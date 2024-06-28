function solution(N, M, K, prices) {
    let dp = new Set([0]);

    for (let i = 0; i < N; i++) {
        let nextDp = new Set();
        for (let price of prices[i]) {
            for (let sum of dp) {
                nextDp.add(sum + price);
            }
        }
        dp = nextDp;
    }

    let minDifference = Infinity;
    for (let sum of dp) {
        minDifference = Math.min(minDifference, Math.abs(sum - K));
    }

    return minDifference;
}

// Example usage
const N = 3; // Number of categories
const M = 3; // Number of items in each category
const K = 100; // Target price
const prices = [
    [1, 2, 3], // Prices in category 1
    [4, 5, 6], // Prices in category 2
    [7, 8, 9]  // Prices in category 3
];

console.log(solution(N, M, K, prices)); // Expected output: 1
