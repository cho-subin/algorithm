function solution(d, budget) {
    const dArr = d.sort((a, b) => a - b);
    let count = 0;
    let sum = 0;
    
    for(let i=0; i<dArr.length; i++){
        let test = sum+=dArr[i]
        if(test>budget) break;
        count++;
    }
    
    return count;
}

// 1. 최대한 많은 부서의 물품을 구매해줘야 하니까 배열을 순서대로 나열하자.
// 2. 앞에서부터 budget 수에 맞게 더한 갯수를 리턴하면 되지않을까?