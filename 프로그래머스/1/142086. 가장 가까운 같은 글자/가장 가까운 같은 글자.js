function solution(s) {
    var answer = [];
    const sArray = s.split('');
    
    for(let i=0; i<sArray.length; i++){
        if(i === 0 ) answer.push(-1);
        for(let j=i-1; j>=0; j--){
            if(sArray[i]===sArray[j]){
                answer.push(i-j);
                break;
            }
            else if(j===0 && sArray[j]!==sArray[i]) answer.push(-1);
        }
    }
    
    return answer;
}