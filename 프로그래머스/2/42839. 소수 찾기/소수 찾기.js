function solution(numbers) {
    var answer = [];
    let nums = numbers.split('');
    
    // 소수 판별
    const isPrimeNum = (num) => {
        if(num<=1) return false;
        for (let i = 2; i<=Math.sqrt(num); i++) { // Math.sqrt(num) : num의 제곱근 반환
            if (num % i === 0) return false;
        }
        return true;
    }
    
    const getPermutation = (arr, fixed) => {
        if(arr.length >= 1) {
            for (let i=0; i<arr.length; i++) {
                const newNum = fixed + arr[i];
                const copyArr = [...arr];
                copyArr.splice(i, 1);
                if (!answer.includes(+newNum) && isPrimeNum(+newNum)){
                    answer.push(+newNum) 
                }
                getPermutation(copyArr, newNum); 
            }
        }
    }
    
    getPermutation(nums, '')
    return answer.length;
}

// 에라토스테네스의 체 (시간복잡도 O(nlog(logn)) : 고대 수학자 에라토스테네스가 발견, 주어진 범위 내에서 소수를 빠르고 효율적으로 찾을 수 있는 방법)
// 목표 설정: 원하는 범위 내에서 소수를 찾기 위해, 2부터 시작하여 특정 숫자 N까지의 모든 수를 나열합니다.
// 첫 소수 찾기: 가장 작은 소수인 2부터 시작합니다. 2는 소수이기 때문에 남겨두고, 2의 배수를 모두 제거합니다. 이 배수들은 소수가 될 수 없기 때문입니다.
// 다음 소수 찾기: 다음 숫자(3)를 확인합니다. 3은 남아있기 때문에 소수입니다. 따라서 3의 배수를 모두 제거합니다.
// 반복: 이 과정을 반복하여, 남아 있는 숫자 중에서 가장 작은 수를 선택하고, 그 수의 배수를 제거합니다. 이 과정을 N의 제곱근까지 반복합니다. 이때 선택된 숫자는 모두 소수입니다.
// 종료 및 소수 목록 생성: 모든 숫자를 확인하고 제거 과정이 끝나면, 남아있는 숫자들은 모두 소수입니다.