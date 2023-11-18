function solution(name, yearning, photo) {
    
    let memoryScore = {};
    let scoreArray = [];
    
    for(let i=0; i<name.length; i++){
        memoryScore[name[i]] = yearning[i]
    }
    
    for(let i=0; i<photo.length; i++){
        let person = photo[i]
        let score = 0;
        for(let j=0; j<person.length; j++){
            if(memoryScore[person[j]]){ // memoryScore객체중의 key가 person[j]와 동일한게 있다면
                score += memoryScore[person[j]] // score에 해당 memoryScore객체중의 key가 person[j]인 value를 더하자.
            }
        }
        scoreArray.push(score);
    }
    return scoreArray;
}

// 1. key가 name value가 yearning인 객체를 만들자.
// 2. 그렇게 해서 photo의 값들을 한개씩 대조해보면서 name이 있으면 value값을 더해서 result 배열에 넣으면 어떨까?