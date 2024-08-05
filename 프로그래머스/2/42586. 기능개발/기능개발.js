function solution(progresses, speeds) {
    let answer = [];
    
    let elapsedDays = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));
    
    let front = elapsedDays[0]; // 큐(elapsedDays)의 앞부분 (그 뒤의 elapsedDays[i]와 비교할 기준)
    let count = 1;
    
    for(let i=1; i<elapsedDays.length; i++){ // 1부터 시작하는 이유는 front 뒤부터 가져오기 위해.
        if(front >= elapsedDays[i]){
            count++;
        }
        else{
            answer.push(count);
            count = 1;
            front = elapsedDays[i];
        }
    }
    
    answer.push(count);
    
    return answer;
}

// 큐..?
// 1. 반복문으로 (100-progresses[i])/speeds[i] 계산. (각 몇일 걸리는지) - v
// 2. 계산한걸 elapsedDays 배열에 추가
// 3. 배열 맨 앞을 기준(front)으로 그 뒷번째가 front보다 작으면 count++
// 4. 그 외는 다음 front의 기준을 잡기 위해 이전 count를 answer 배열에 추가, count 1로 리셋, front도 앞의 조건을 벗어난 elapsedDays[i]로 리셋.
// 5. 반복문 빠져나온후 마지막 count answer에 추가
