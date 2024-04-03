/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    var n=numBottles
    var res=0
    while(numBottles>=numExchange){
        var bottleDrank=Math.floor(numBottles/numExchange)
        res+=bottleDrank
        numBottles=numBottles+bottleDrank-(bottleDrank*numExchange)
    }
    return n+res;
};