function solution(arr){
    let stack = [];
    
    arr.forEach((n,i) => {
        if(n !== stack[stack.length-1]){
            stack.push(n);
        }
    })
    
    return stack;
}

// 스택을 초기화합니다.
// 주어진 배열을 순회하면서, 현재 숫자가 스택의 최상단 숫자와 다르면 스택에 추가합니다.
// 현재 숫자가 스택의 최상단 숫자와 같다면 스택에 추가하지 않습니다.
// 배열 순회를 완료한 후, 스택에 남아 있는 숫자들이 연속으로 같은 숫자가 제거된 결과가 됩니다.