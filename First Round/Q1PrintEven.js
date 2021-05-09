const nums = [1,3,2,9,5,7,4,12,23,683,674,9010]

const printEven = (nums)=>{
  for(i = 0 ; i<nums.length; i++){
    if(nums[i]%2 === 0){
      console.log(nums[i])
    }
  }
}

printEven(nums)