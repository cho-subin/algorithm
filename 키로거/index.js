const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file).toString().split("\n");

const inputSplit = [];
for (let i = 0; i < input.length; i++) {
    inputSplit.push(input[i].split(" "));
}

function Deque(input){
    let que = [];

    for(let i=0; i<input.length; i++){

        if (input[i]?.includes('push_front')){
            que.unshift(input[i][1]);
        }
        else if (input[i]?.includes('push_back')){
            que.push(input[i][1]);
        }
        else if (input[i]?.includes('front')){
            const front = que.length < 1 ? -1 : que[0]
            console.log(front);
        }
        else if (input[i]?.includes('back')){
            const back = que.length < 1 ? -1 : que[que.length - 1]
            console.log(back);
        }
        else if (input[i]?.includes('size')){
            console.log(que.length);
        }
        else if (input[i]?.includes('empty')){
            const empty = que.length<1? 1:0
            console.log(empty);
        }
        else if (input[i]?.includes('pop_front')){
            const shift = que.length<1? -1:que.shift();
            console.log(shift);
        }
        else if (input[i]?.includes('pop_back')){
            const pop = que.length < 1 ? -1 : que.pop()
            console.log(pop);
        }
    }
}

Deque(inputSplit);


// 필요한거
// 1. front index, back index(연결리스트 꼬리)
// 2. 명령을 담을 배열
// 3. 8가지의 명령

// 큐 : first in first out 구조로 꼬리쪽으로 삽입, 헤드쪽에서 삭제

// push_front X: 정수 X를 덱의 앞에 넣는다.
// push_back X: 정수 X를 덱의 뒤에 넣는다.
// pop_front: 덱의 가장 앞에 있는 수를 빼고, 그 수를 출력한다. 만약, 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// pop_back: 덱의 가장 뒤에 있는 수를 빼고, 그 수를 출력한다. 만약, 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// size: 덱에 들어있는 정수의 개수를 출력한다.
// empty: 덱이 비어있으면 1을, 아니면 0을 출력한다.
// front: 덱의 가장 앞에 있는 정수를 출력한다. 만약 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// back: 덱의 가장 뒤에 있는 정수를 출력한다. 만약 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.