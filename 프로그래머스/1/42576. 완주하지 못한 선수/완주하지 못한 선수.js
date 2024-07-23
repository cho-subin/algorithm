function solution(participant, completion) {
    let hashMap = new Map();

    // 참가자 이름으로 해시맵 생성
    participant.forEach(name => {
        if (hashMap.has(name)) {
            hashMap.set(name, hashMap.get(name) + 1);
        } else {
            hashMap.set(name, 1);
        }
    });

    // 완주자 목록을 사용하여 해시맵 업데이트
    completion.forEach(name => {
        if (hashMap.has(name)) {
            let count = hashMap.get(name);
            if (count === 1) {
                hashMap.delete(name);
            } else {
                hashMap.set(name, count - 1);
            }
        }
    });

    // 해시맵에 남아있는 키가 완주하지 못한 선수
    for (let [name, count] of hashMap) {
        if (count > 0) {
            return name;
        }
    }
}