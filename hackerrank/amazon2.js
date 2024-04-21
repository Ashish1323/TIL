function optimalUtilization(deviceCapacity, foregroundAppList, backgroundAppList) {
    let maxMemory = 0;
    let optimalPairs = [];

    for (let i = 0; i < foregroundAppList.length; i++) {
        for (let j = 0; j < backgroundAppList.length; j++) {
            let totalMemory = foregroundAppList[i][1] + backgroundAppList[j][1];
            if (totalMemory <= deviceCapacity) {
                if (totalMemory > maxMemory) {
                    maxMemory = totalMemory;
                    optimalPairs = [[foregroundAppList[i][0], backgroundAppList[j][0]]];
                } else if (totalMemory === maxMemory) {
                    optimalPairs.push([foregroundAppList[i][0], backgroundAppList[j][0]]);
                }
            }
        }
    }

    return optimalPairs;
}

// Example usage:
const deviceCapacityExample = 10;
const foregroundAppListExample = [[1, 3], [2, 5], [3, 7], [4, 10]];
const backgroundAppListExample = [[1, 2], [2, 3], [3, 4], [4, 5]];

console.log(optimalUtilization(deviceCapacityExample, foregroundAppListExample, backgroundAppListExample)); [[2,4],[3,2]]
console.log(optimalUtilization(16, [[2,7],[3,14]],[[2,10],[3,14]])); //[]
console.log(optimalUtilization(7, [[1,2],[2,4],[3,6]],[[1,2]])); // [[2,1]]
console.log(optimalUtilization(20, [[1,8],[2,7],[3,14]],[[1,5],[2,10],[3,14]])); // [[3,1]]
console.log(optimalUtilization(20, [[1,8],[2,15],[3,9]],[[1,8],[2,11],[3,12]])); // [[3,1]]
console.log(optimalUtilization(14, [[2,12],[3,8],[1,11]],[[1,12],[2,13],[3,15]])); // [[3,1]]
console.log(optimalUtilization(20, [[1,20]],[[1,10]])); // [[3,1]]
console.log(optimalUtilization(0, [[1,20]],[[1,10]])); // [[3,1]]





