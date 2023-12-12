function solution(k, score) {
    var answer = [];
    let arr = [];
    
    for(s of score){
        if(arr.length < k){
            arr.push(s);
        }
        else if(s>=Math.min(...arr)){
            arr.push(s);
            arr.sort((a,b)=>a-b);
            arr.shift();
        }
        answer.push(Math.min(...arr))
    }
    return answer;
}