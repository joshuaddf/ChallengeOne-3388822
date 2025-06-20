// var searchRange = function(nums, target) {
//     let firstPos = 0;
//     let lastPos = nums.length - 1;
//     if ( firstPos > lastPos ) return;
//     if ( nums.length === 0 ) {
//         return [-1, -1];
//     }
//     let mid = Math.floor((firstPos + lastPos) / 2 );
//     if ( nums[mid] === target ) {
//         return nums
//     }
// };

function searchRange(nums, target) {
    function binarySearch(nums, target, left, right, leftBias, result = -1) {
        if (left > right) return result;
        
        const mid = Math.floor((left + right) / 2);
        
        if (target < nums[mid]) {
            return binarySearch(nums, target, left, mid - 1, leftBias, result);
        } else if (target > nums[mid]) {
            return binarySearch(nums, target, mid + 1, right, leftBias, result);
        } else {
            result = mid;
            if (leftBias) {
                return binarySearch(nums, target, left, mid - 1, leftBias, result);
            } else {
                return binarySearch(nums, target, mid + 1, right, leftBias, result);
            }
        }
    }
    
    const left = binarySearch(nums, target, 0, nums.length - 1, true);
    const right = binarySearch(nums, target, 0, nums.length - 1, false);
    
    return [left, right];
}