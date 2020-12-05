// dynamic programming
function decode(target, wordBank, memo = {}) {
    if (target in memo) return memo[target];
    if (target == '') return [[]];
    let result = [];

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            const suffixWays = decode(suffix, wordBank, memo);
            result.push(...suffixWays.map(w => [word, ...w]));
        }
    }
    memo[target] = result;

    return result;
}

const wordBank = [...Array(26).keys()].map(item => (item + 1).toString());

// should display 3
let count = decode('111', wordBank).length;
console.log(count);
// should display 5
count = decode('1111', wordBank).length;
console.log(count);
// should display 1
count = decode('555', wordBank).length;
console.log(count);