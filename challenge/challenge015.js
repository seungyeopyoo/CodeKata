// 없는 숫자 더하기
// 0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다.
// numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.

// 1 ≤ numbers의 길이 ≤ 9
// 0 ≤ numbers의 모든 원소 ≤ 9
// numbers의 모든 원소는 서로 다릅니다.

// numbers	            result
// [1,2,3,4,6,7,8,0]	14
// [5,8,4,0,6,7,9]	    6

// 5, 9가 numbers에 없으므로, 5 + 9 = 14를 return 해야 합니다.
// 1, 2, 3이 numbers에 없으므로, 1 + 2 + 3 = 6을 return 해야 합니다.

// step 1. 0123456789 다 더함
// step 2. numbers.reduce하고 step 1 에서 빼줌

const solution = function (numbers) {
	const sumAll = 45;

	return sumAll - numbers.reduce((acc, cur) => acc + cur, 0);
};

console.log(solution([1, 2, 3, 4, 6, 7, 8, 0]));
console.log(solution([5, 8, 4, 0, 6, 7, 9]));
