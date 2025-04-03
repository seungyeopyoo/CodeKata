// 자릿수 더하기
// 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
// 예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

// 제한사항
// N의 범위 : 100,000,000 이하의 자연수

// N	answer
// 123	6
// 987	24

// 9 + 8 + 7 = 24이므로 24를 return 하면 됩니다.

// step 1. N을 split하여 각 자릿수 별로 분리하고 더해준다

const solution = function (N) {
	const answer = String(N).split('');
	return answer.reduce((acc, cur) => Number(acc) + Number(cur), 0);
};

console.log(solution(123));
console.log(solution(987));
