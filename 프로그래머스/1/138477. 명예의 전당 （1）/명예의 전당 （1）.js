function solution(k, score) {
    var answer = [];
    let arr = [];
    
    for(s of score){
        if(arr.length < k){
            arr.push(s);
            arr.sort((a,b)=>a-b);
        }
        else if(s>=Math.min(...arr)){
            arr.push(s);
            arr.sort((a,b)=>a-b);
            arr.shift();
        }
        else if(s<Math.min(...arr)){
            arr.sort((a,b)=>a-b);
        }
        answer.push(arr[0])
    }
    return answer;
}