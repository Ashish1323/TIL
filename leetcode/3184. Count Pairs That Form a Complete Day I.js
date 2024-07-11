/**
 * @param {number[]} hours
 * @return {number}
 */
var countCompleteDayPairs = function(hours) {
    var map=new Map()
    var res=0
    for(let i=0;i<hours.length;i++){
        var rem=hours[i]%24;
        if(rem==0) {
            res+=(map.get(0) || 0)
        }
        else{
            res+=(map.get(24-rem) || 0)
        } 
        map.set(rem,((map.get(rem) || 0)+1))
    }
    return res
};