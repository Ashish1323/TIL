/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function(nums) {
    if(nums.length<2) return 1

    var maxIncreasing=0
    var currentIncreasing=1
    var currentDecreasing=1
    var maxDecreasing=0

    for(let i=1;i<nums.length;i++){
        if(nums[i-1]<nums[i]) {
            currentDecreasing=1
            ++currentIncreasing
        }
        else if(nums[i-1]>nums[i]){
            currentIncreasing=1;
            ++currentDecreasing
        }
        else {
            currentIncreasing=1;
            currentDecreasing=1;
        }
        maxIncreasing=Math.max(maxIncreasing,currentIncreasing)
        maxDecreasing=Math.max(currentDecreasing,maxDecreasing)
    }

    return Math.max(maxIncreasing,maxDecreasing)
};