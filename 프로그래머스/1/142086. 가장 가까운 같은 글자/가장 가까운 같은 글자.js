function solution(s) {
    // 결과를 저장할 배열
    const answer = [];
    
    // 각 문자의 마지막으로 등장한 인덱스를 기록할 객체
    const lastSeenIndex = {};

    for (let i = 0; i < s.length; i++) {
        if (lastSeenIndex[s[i]] === undefined) {
            answer.push(-1);
        } else {
            answer.push(i - lastSeenIndex[s[i]]);
        }

        lastSeenIndex[s[i]] = i;
    }

    return answer;
}

// 이중for문의 무분별한 사용은 피하자...ㅠ