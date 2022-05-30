const nums = [1]

let getMissedNumber = (nums) =>{
    nums.sort((a,b)=> a-b);
    if(nums[0] !== 0) return 0;
    for(let i=0; i<nums.length ; i++){
        if(nums[i+1] !== i+1 ){
            return i+1
        }
    }
}

console.log(getMissedNumber(nums))
