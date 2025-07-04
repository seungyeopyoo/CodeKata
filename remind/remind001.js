// 같은 숫자는 싫어
// 배열 arr가 주어집니다. 배열 arr의 각 원소는 숫자 0부터 9까지로 이루어져 있습니다.
// 이때, 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 합니다.
// 단, 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지해야 합니다. 예를 들면,

// arr = [1, 1, 3, 3, 0, 1, 1] 이면 [1, 3, 0, 1] 을 return 합니다.
// arr = [4, 4, 4, 3, 3] 이면 [4, 3] 을 return 합니다.
// 배열 arr에서 연속적으로 나타나는 숫자는 제거하고 남은 수들을 return 하는 solution 함수를 완성해 주세요.

// 배열 arr의 크기 : 1,000,000 이하의 자연수
// 배열 arr의 원소의 크기 : 0보다 크거나 같고 9보다 작거나 같은 정수

// arr	                answer
// [1,1,3,3,0,1,1]	    [1,3,0,1]
// [4,4,4,3,3]	        [4,3]

// step 1. 빈배열을 만든다.
// step 2. step1에 arr을 순서대로 하나씩 넣음
// step 2-2. 만약 넣으려는 숫자가 arr.length-1 과 다를 경우에만 push한다.
// step 3. 다넣고 return

const solution = function (arr) {
	let answer = [];

	for (let i = 0; i < arr.length; i++) {
		if (answer.length === 0 || answer[answer.length - 1] !== arr[i]) {
			answer.push(arr[i]);
		}
	}
	return answer;
};

console.log(solution([1, 1, 3, 3, 0, 1, 1]));
console.log(solution([4, 4, 4, 3, 3]));
