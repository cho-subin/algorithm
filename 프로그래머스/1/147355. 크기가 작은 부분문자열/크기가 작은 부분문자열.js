function solution(t, p) {
    var answer = 0;
    
    for(let i=0; i<t.length; i++){
        let sliceT = t.slice(i,i+p.length)
        if(sliceT.length!==p.length) break;
        if(sliceT<=p){
            answer++;
        }
    }
    return answer;
}

// 1. 앞에서부터 3개씩 끊어서 p랑 비교해보자
// 2. p보다 자른 t값이 크면 count 추가