var combinationSum = function(candidates, target) {
    let result = [];
    function backtrack(initial, currentComb, remaining) {
        if (remaining === 0) {
            result.push([...currentComb]);
            return;
        }
        if (remaining < 0) {
            return;
        }
        for (let i = initial; i < candidates.length; i++) {
            currentComb.push(candidates[i]);
            backtrack(i, currentComb, remaining - candidates[i]);
            currentComb.pop();
        }
    }
    backtrack(0, [], target);
    return result;
};