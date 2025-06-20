const pairElements = (arr) => {
    let pairs = [];
    for (let i = 0; i < arr.length; i += 2) {
        pairs.push([arr[i], arr[i + 1]]);
    }
    return pairs;
}