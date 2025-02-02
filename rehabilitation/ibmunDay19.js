// 가까운 수
// 정수 배열 array와 정수 n이 매개변수로 주어질 때,
// array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ array의 길이 ≤ 100
// 1 ≤ array의 원소 ≤ 100
// 1 ≤ n ≤ 100

// 가장 가까운 수가 여러 개일 경우 더 작은 수를 return 합니다.

// array	      n	  result
// [3, 10, 28]	  20	28
// [10, 11, 12]	  13	12

// 3, 10, 28 중 20과 가장 가까운 수는 28입니다.
// 10, 11, 12 중 13과 가장 가까운 수는 12입니다.

// step 1. 각 array를 돌며 n과 인덱스간 차를 계산한다. reduce
// step 2. 1의 값끼리 비교하여 젤 작은애를 찾는다.
// step 3. 만약 해당 값이 같으면 인덱스끼리 비교하여 작은놈을 return한다.

const solution = function (array, n) {
	return array.reduce((a, b) => {
		let diffA = Math.abs(a - n);
		let diffB = Math.abs(b - n);

		return diffA < diffB || (diffA === diffB && a < b) ? a : b;
	});
};

console.log(solution([3, 10, 28], 20));
console.log(solution([10, 11, 12], 13));
