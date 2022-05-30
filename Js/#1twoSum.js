const nums = [3, 2, 4]
const target = 6;

var twoSum = function (nums, targert) {
    const indices = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if(indices.has(complement)) 
            return [indices.get(complement),i]

        indices.set(nums[i],i)
    }
}

console.log(twoSum(nums,target))  // [1,2]
