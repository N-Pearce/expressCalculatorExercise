function findMean(nums){
    let sum = 0;
    for (let i in nums) {
        sum += nums[i]
    }
    return sum / nums.length
}

function findMedian(nums){
    let midPoint = nums.length/2;

    if (midPoint % 1 === 0){
        midPoint = (nums[midPoint] + nums[midPoint-1])/2
    } else {
        midPoint = nums[Math.floor(midPoint)]
    }
    return midPoint
}

function findMode(nums){
    // create obj with frequency of each num
    let obj = {};
    for (let numIdx in nums) {
        let num = nums[numIdx]
        obj[num] = obj[num] + 1 || 1
    }

    // find max frequency
    max = 0;
    for (let val of Object.keys(obj)){
        if (obj[val] > max) max = obj[val]
    }

    // find all vals with max frequency
    let modeArr = []
    for (let val of Object.keys(obj)){
        if (obj[val] === max){
            modeArr.push(Number(val))
        }
    }
    return modeArr;
}

module.exports = {
    findMean,
    findMedian,
    findMode
  };