var maxAdjacentDistance = function(nums) {
    if (nums.length < 2) return 0;
    const n = nums.length;
    const diff = nums.map((num, idx) => Math.abs(num - nums[(idx + 1) % n]));
    return Math.max(...diff);
};

