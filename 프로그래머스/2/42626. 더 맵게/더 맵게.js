function createMinHeap(){
    const heap = [];
    
    // 주어진 노드 인덱스의 부모 노드 인덱스를 계산
    function getParentIndex(index){
        return Math.floor((index - 1) / 2);
    }
    
    // 주어진 노드 인덱스의 왼쪽 자식노드 인덱스를 계산
    function getLeftChildIndex(index){
        return 2 * index + 1;
    }
    
    // 주어진 노드 인덱스의 오른쪽 자식노드 인덱스를 계산
    function getRightChildIndex(index){
        return 2 * index + 2;
    }
    
    // 힙에서 두 인덱스의 값을 서로 교환
    function swap(index1, index2){
        [heap[index1], heap[index2]] = [heap[index2], heap[index1]];
    }
    
    // 힙에 요소를 삽입한 후, 올바른 위치에 배치되도록 상향 조정
    function heapifyUp(){
        let index = heap.length - 1;
        // 부모노드 인덱스가 0보다 크거나 같고 heap에서 부모노드값이 삽입한 index값보다 크면 부모와 삽입한 index값 자리 교체
        while (getParentIndex(index) >= 0 && heap[getParentIndex(index)] > heap[index]) {
            swap(getParentIndex(index), index);
            index = getParentIndex(index);
        }
    }
    
    // 힙에서 최솟값을 제거한 후, 나머지 요소를 하향 조정
    function heapifyDown() {
        let index = 0;
        while (getLeftChildIndex(index) < heap.length) {
          let smallerChildIndex = getLeftChildIndex(index);
          if (
            getRightChildIndex(index) < heap.length &&
            heap[getRightChildIndex(index)] < heap[smallerChildIndex]
          ) {
            smallerChildIndex = getRightChildIndex(index);
          }

          if (heap[index] <= heap[smallerChildIndex]) {
            break;
          }

          swap(index, smallerChildIndex);
          index = smallerChildIndex;
        }
    }
    
    // 힙에 새로운 요소를 삽입
    return {
        insert(value) {
          heap.push(value);
          heapifyUp();
        },

        // 힙에서 최솟값을 제거하고 반환
        extractMin() {
          if (heap.length === 0) return null;
          if (heap.length === 1) return heap.pop();

          const min = heap[0];
          heap[0] = heap.pop();
          heapifyDown();
          return min;
        },

        // 힙의 크기를 반환
        size() {
          return heap.length;
        },

        // 현재 힙을 반환 (디버깅용)
        getHeap() {
          return heap;
        }
  };
    
}

function solution(scoville, K) {
    var answer = 0;
    const minHeap = createMinHeap();
    
    scoville.map((s)=>{
        minHeap.insert(s);
    })
    
    // 반환한 최소값과 그 뒤의 최소값을 스코빌 지수를 섞어서 다시 heap에 삽입
    // 이때 count ++;
    // 다시 반환한 최소값이 k이상이 되기 전까지 반복..
    // 만약 마지막까지 섞어도 k를 넘지못하면 -1 return
    
    while(minHeap.size() > 1 && minHeap.getHeap()[0] < K){
        const minScoville = minHeap.extractMin();
        const secMinScoville = minHeap.extractMin();
        const mixScoville = minScoville + secMinScoville * 2;
        
        minHeap.insert(mixScoville);
        answer++;
    }
    
    if(minHeap.getHeap()[0] < K){
        return -1;
    }
    
    return answer;
}

// 최소 힙(min heap)을 사용하는 문제
// 원소들 중 최소값과 최대값을 빠르게 찾아내는 완전이진트리 자료구조.
// 삽입과 삭제는 O(logN) 걸린다.