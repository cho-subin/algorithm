function solution(nums) {
    let numA = new Set(nums);
    let newNums = new Set();
    
    for(let elem of nums){
        newNums.add(elem)
    }
    
    let length = Array.from(newNums).length;
    let halfOfNums = nums.length/2;
    
    if(length>halfOfNums){
        return halfOfNums;
    }
    else return length;
    
    console.log(length)
    console.log(Array.from(length).length)
    console.log(nums.length/2)
}