/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var maxBottlesDrunk = function(numBottles, numExchange) {
    var n=numBottles
    var res=0
    while(numBottles>=numExchange){
        res++, numBottles= ++numBottles -numExchange++
    }
    return n+res;
};