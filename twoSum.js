// const twoSum = (arr, target) => {
//     let result = [];
//     for (var i = 0; i < arr.length; i++) {
//         let start = arr[i];
//         for (var j = arr.length; j > 0; j--) {
//             let end = arr[j];
//             if (start + end === target) {
//                 result = [start, end];
//             }
//             if (start + end >= target && start > end) {

//             }
//         }   
//     }
// }

const twoSum = (numbers, target) => {
    if (numbers.length < 2) return [];
    const seen = {};
    for (let i = 0; i < numbers.length; i++) {
        const currentNum = numbers[i];
        const numToFind = target - currentNum;
        if (seen[numToFind] !== undefined) return [seen[numToFind], i];
        seen[currentNum] = i;
    }
    return [];
}



module.exports = twoSum;