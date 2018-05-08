const wrap = (string, columnNumber) => {
    if (string.length <= columnNumber) return string;

    let nums = [];
    for (let i = 0; i < string.length && i < string.lastIndexOf(" "); i++) {
      let index = string.indexOf(" ", i);
      nums.push(index);
      i = index
    }

    let reducedNums = nums.map((num) => {
        if (num > columnNumber) {
          return num % columnNumber
        } else {
          return num
        }
    })

    let indices = [];
    reducedNums.forEach((nums, index) => {
    if (nums > reducedNums[index+1]) {
        indices.push(index)
    }
    })

    let cutIndex = []
    indices.forEach((index) => {
        cutIndex.push(nums[index])
    })

    let finalString = [string.substring(0, cutIndex[0])]

    for (let j = 0; j < cutIndex.length; j++) {
        finalString.push(string.substring(cutIndex[j]+1, cutIndex[j+1]))
      }

    finalString = finalString.join("\n")
    return finalString
    console.log(finalString)
}

module.exports = wrap