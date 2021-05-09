const nums =[0,0,1,1,0,0,0,1,0,0,1,1,1,0]

var totalCount = [];

var count = 0;

for(i=0;i<nums.length;i++){
  if (nums[i]===0){
    if (count === 0){
      continue
    }else{
    totalCount.push(count)
    count = 0}
  }else{
    count+=1
    
  }
}
totalCount.sort()

console.log(totalCount[totalCount.length-1])