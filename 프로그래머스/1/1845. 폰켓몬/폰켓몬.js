function solution(nums) {
    let numsMap = new Map();
    
    for(let i=0; i<nums.length; i++){
        numsMap.set(nums[i],nums[i]);
    }

    if(numsMap.size === nums.length/2 || numsMap.size > nums.length/2){
        return nums.length/2;
    }
    else if(numsMap.size < nums.length/2){
        return numsMap.size;
    }  
    
}

// 해시로 풀기
// 1. 배열의 갯수의 반을 선택해야함.
// 2. nums를 map 객체로 만듬.
// 3. 만약에 map객체의 숫자와 배열의 반 갯수가 같으면 그 갯수 리턴
// 4. 만약에 map객체의 길이가 배열의 반 갯수보다 크면 배열의 반 갯수 리턴
// 5. 만약에 map객체의 길이가 배열의 반 갯수보다 작으면 map객체 길이 리턴