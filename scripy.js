let arr = [1, 2, 3, 4, [1, 2, 3], [1, [2], 3]]

function flatten(arr) {
    return arr.reduce((acc, cur) => acc.concat(Array.isArray(cur) ? flatten(cur) : cur), []);
};
 
let result = flatten(arr);
console.log(result);
