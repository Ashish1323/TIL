/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {
    var res=0
    var num=x
    while(num>0){
        res+=num%10;
        num=Math.floor(num/10);
    }
    return x%res==0 ? res : -1
};