function countMinimumOperations(prices, queries) {
    return queries.map(query => {
        let totalOperations = 0;
        prices.forEach(price => {
            totalOperations += Math.abs(price - query);
        });
        return totalOperations;
    });
}

// Example usage:
const prices = [2];
const queries = [8,4,3,10,6];
const result = countMinimumOperations(prices, queries);
console.log(result); // Should output the minimum operations for each query