function solution(array, commands) {
    var answer = [];
    
    commands.map((e) => {
        const sliceArray = array.slice(e[0]-1,e[1]).sort((a,b) => a-b);
        answer.push(sliceArray[e[2]-1])
    })
    
    return answer;
}

// i = 앞에서 끊을 위치 , j = 뒤에서 끊을 위치, k = 끊긴 배열에서 가져올 위치