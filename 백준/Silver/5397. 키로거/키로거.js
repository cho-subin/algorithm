const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file).toString().split("\n");

for (let i = 1; i < input.length; i++) {
    password(input[i].split(""));
}

function password(input) {
    let front = [];
    let back = [];
    for (let i = 0; i < input.length; i++) {
        switch (input[i]) {
            case "<": // 왼쪽으로 이동해야 하니까 front 맨위의 요소를 추출해서 back 맨위에 쌓는다
                if (front.length > 0) {
                    back.push(front.pop());
                }
                break;
            case ">": // 오른쪽으로 이동해야 하니까 back 맨위의 요소를 추출해서 front 맨위에 쌓는다.
                if (back.length > 0) {
                    front.push(back.pop());
                }
                break;
            case "-": // 스페이스바 뒷 부분은 삭제해야해서 front의 맨윗 요소를 삭제한다.
                if (front.length > 0) {
                    front.pop();
                }
                break;
            default: // 커서도 아니고 스페이스바도 아닌 문자열은 프론트 맨위에 차곡차곡 쌓는다.
                front.push(input[i]);
                break;
        }
    }
    let answer = front.join("") + back.reverse().join("");
    console.log(answer);
}

// shift() : 배열의 맨 앞의 값을 제거
// pop() : 배열의 맨 끝의 값을 제거
// push() : 배열의 맨 끝의 값을 추가
// unshift() : 배열의 맨 앞의 값을 추가

//1.push(맨뒤에 새로운 요소 삽입) - O(1)
//2.Pop(맨뒤에 원소 추출) - O(1)
//3.top(맨위의 요소 확인) - O(1)
//4.empty(비어있는지 확인) - O(1)