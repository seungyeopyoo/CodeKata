// 배열 만들기 6
// 0과 1로만 이루어진 정수 배열 arr가 주어집니다. arr를 이용해 새로운 배열 stk을 만드려고 합니다.

// i의 초기값을 0으로 설정하고 i가 arr의 길이보다 작으면 다음을 반복합니다.

// 만약 stk이 빈 배열이라면 arr[i]를 stk에 추가하고 i에 1을 더합니다.

// stk에 원소가 있고, stk의 마지막 원소가 arr[i]와 같으면
// stk의 마지막 원소를 stk에서 제거하고 i에 1을 더합니다.

// stk에 원소가 있는데 stk의 마지막 원소가 arr[i]와 다르면
// stk의 맨 마지막에 arr[i]를 추가하고 i에 1을 더합니다.

// 단, 만약 빈 배열을 return 해야한다면 [-1]을 return 합니다.

// 1 ≤ arr의 길이 ≤ 1,000,000
// arr의 원소는 0 또는 1 입니다.

// arr	                result
// [0, 1, 1, 1, 0]	    [0, 1, 0]
// [0, 1, 0, 1, 0]	    [0, 1, 0, 1, 0]
// [0, 1, 1, 0]	        [-1]

// idx	        arr[idx]	        stk
// 0	        0	                []
// 1	        1	                [0]
// 2	        1	                [0, 1]
// 3	        1	                [0]
// 4	        0	                [0, 1]
// 5	        -	                [0, 1, 0]
// 따라서 [0, 1, 0]을 return 합니다.

// idx	    arr[idx]	    stk
// 0	        0	        []
// 1	        1	        [0]
// 2	        0	        [0, 1]
// 3	        1	        [0, 1, 0]
// 4	        0	        [0, 1, 0, 1]
// 5	        -	        [0, 1, 0, 1, 0]
// 따라서 [0, 1, 0, 1, 0]을 return 합니다.

// idx	        arr[idx]	stk
// 0	        0	        []
// 1	        1	        [0]
// 2	        1	        [0, 1]
// 3	        0	        [0]
// 4	        -	        []

// step 1. while문 사용 i < arr.length 일때 반복
// step 2. if stk.length === 0  stk.push(arr[i]) i++
// step 3. if stk.length > 0 && stk[stk.length-1] === arr[i] stk.pop() i++
// step 4. if stk.length > 0 && stk[stk.length-1] !== arr[i] stk.push(arr[i]) i++
// step 5. return stk.length가 0보다크면 stk 리턴 아니면 [-1]리턴

const solution = function (arr) {
	let i = 0;
	let stk = [];

	while (i < arr.length) {
		if (stk.length === 0) {
			stk.push(arr[i]);
			i++;
		} else if (stk.length > 0 && stk[stk.length - 1] === arr[i]) {
			stk.pop();
			i++;
		} else if (stk.length > 0 && stk[stk.length - 1] !== arr[i]) {
			stk.push(arr[i]);
			i++;
		}
	}
	return stk.length > 0 ? stk : [-1];
};

console.log(solution([0, 1, 1, 1, 0]));
console.log(solution([0, 1, 0, 1, 0]));
console.log(solution([0, 1, 1, 0]));
