const MOD = 1e9 + 7;

function buildMonuments(n, m, from, to) {
  // Build the tree using adjacency list representation
  const tree = new Array(n + 1).fill(null).map(() => []);
  const dp = new Array(n + 1).fill(null).map(() => new Array(m + 1).fill(0));
  const visited = new Array(n + 1).fill(false);

  // Construct the tree from edge list
  for (let i = 0; i < from.length; i++) {
    if (from[i] <= n && to[i] <= n) { // Ensure we don't go out of bounds
      tree[from[i]].push(to[i]);
      tree[to[i]].push(from[i]);
    }
  }

  function dfs(node) {
    visited[node] = true;
    let totalWays = 0;

    // Initialize ways to place monuments for a city
    for (let i = 1; i <= m; i++) {
      dp[node][i] = 1;
    }

    // Recurse on children
    for (let child of tree[node]) {
      if (!visited[child]) {
        dfs(child);
        
        for (let i = 1; i <= m; i++) {
          let ways = 0;
          for (let j = 1; j <= m; j++) {
            if (i !== j) {
              ways = (ways + dp[child][j]) % MOD;
            }
          }
          dp[node][i] = (dp[node][i] * ways) % MOD;
        }
      }
    }

    // Summing up the ways for the current node
    for (let i = 1; i <= m; i++) {
      totalWays = (totalWays + dp[node][i]) % MOD;
    }

    return totalWays;
  }

  // Start DFS from the first node (assuming node numbering starts from 1)
  return dfs(1);
}

// Example usage:
const n = 4; // Number of nodes
const m = 3; // Number of monument types
const from = [1, 2, 1];
const to = [2, 3, 4];

console.log(buildMonuments(n, m, from, to));
 // Output should be 6 for the given example
console.log(buildMonuments(3,4, [1,1,2], [2,3,4]));



