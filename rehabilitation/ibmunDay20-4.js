// 가장 큰 수 찾기

// 정수 배열 array가 매개변수로 주어질 때,
// 가장 큰 수와 그 수의 인덱스를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

// 1 ≤ array의 길이 ≤ 100
// 0 ≤ array 원소 ≤ 1,000
// array에 중복된 숫자는 없습니다.
// array	result
// [1, 8, 3]	[8, 1]
// [9, 10, 11, 8]	[11, 2]

// 1, 8, 3 중 가장 큰 수는 8이고 인덱스 1에 있습니다.
// 9, 10, 11, 8 중 가장 큰 수는 11이고 인덱스 2에 있습니다.

// step 1. 빈 배열 하나 만들자
// step 2. answer 1 = Math.max(...array) 1에 push
// step 3. answer 2 = array.indexOf(answer1) 2에 push

const solution = function (array) {
	let answer = [];
	let answer1 = Math.max(...array);
	answer.push(answer1);
	answer2 = array.indexOf(answer1);
	answer.push(answer2);
	return answer;
};

console.log(solution([1, 8, 3]));
console.log(solution([9, 10, 11, 8]));
