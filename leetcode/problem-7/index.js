var maximumDifference = function(nums) {
    let arr = [];
    for ( i = 0; i < nums.length; i++ ) {
        for ( j = i + 1; j < nums.length; j++ ) {
            arr.push(nums[j] - nums[i]);
        }
    }
    return Math.max(...arr);
};