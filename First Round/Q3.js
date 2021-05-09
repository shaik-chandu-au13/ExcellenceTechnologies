const nums = [0,1,2,3,4,5,6,7,7,8,9,10]

const repeatedNumber = (nums) =>{
    visited = {}
    for(i=0;i<nums.length;i++){
        if (nums[i] in visited){
            visited[nums[i]]+=1
        }else{
            visited[nums[i]] = 1
        }
    }
    Object.keys(visited).forEach(function(key) {
        if (visited[key] === 2) {
            console.log(`${key} number appears more than once`);
        }
    });

}

repeatedNumber(nums)