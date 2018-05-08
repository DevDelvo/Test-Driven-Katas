// const wrap = (string, columnNumber) => {
//     if (string.length <= columnNumber) return string;

//     let nums = [];
//     for (let i = 0; i < string.length && i < string.lastIndexOf(" "); i++) {
//       let index = string.indexOf(" ", i);
//       nums.push(index);
//       i = index
//     }

//     let reducedNums = nums.map((num) => {
//         if (num > columnNumber) {
//           return num % columnNumber
//         } else {
//           return num
//         }
//     })

//     let indices = [];
//     reducedNums.forEach((nums, index) => {
//     if (nums > reducedNums[index+1]) {
//         indices.push(index)
//     }
//     })

//     let cutIndex = []
//     indices.forEach((index) => {
//         cutIndex.push(nums[index])
//     })

//     let finalString = [string.substring(0, cutIndex[0])]

//     for (let j = 0; j < cutIndex.length; j++) {
//         finalString.push(string.substring(cutIndex[j]+1, cutIndex[j+1]))
//       }

//     finalString = finalString.join("\n")
//     return finalString
//     console.log(finalString)
// }

//OFFICIAL SOLUTION
function wrap(line, maxLen) {
    if (line.length <= maxLen) {
        return line;
    }

    const indexOfBlank = line.lastIndexOf(' ', maxLen);
    let split,
        offset;
    if (indexOfBlank > -1) {
        split = indexOfBlank;
        offset = 1;
    } else {
        split = maxLen;
        offset = 0;
    }

    return line.substring(0, split) +"\n" + wrap(line.substring(split + offset), maxLen);
}


module.exports = wrap