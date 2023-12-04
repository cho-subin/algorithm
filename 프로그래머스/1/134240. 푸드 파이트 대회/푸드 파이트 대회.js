function solution(food) {
    var answer = '';
    
    for(let i=1; i<food.length; i++){
        const quotient = Math.floor(food[i]/2)
        const repeatI = ((i)+'').repeat(quotient)
        answer += repeatI
    }
    
    const revAnswer = answer.split("").reverse().join('');
    return answer += (0+revAnswer);
}

// 1. 홀수면 -1을 해서 2를 나누기
// 2. index 1번째부터 나눈 값만큼 1부터 순차적으로 생성
// 3. 그 뒤에 0과 완료된 2번을 뒤집어서 2번과 문자열 합치기