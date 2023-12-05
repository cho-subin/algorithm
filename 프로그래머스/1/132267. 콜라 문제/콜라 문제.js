function solution(a, b, n) {
    let total = 0;
    let remain = n;
    
    while(remain>=a){
        let quotient = Math.floor(remain/a)*b;
        
        total += quotient;
        remain = remain-((a*quotient)/b)+quotient;
    }
    return total;
}