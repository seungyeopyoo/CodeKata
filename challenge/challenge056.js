// 소수 찾기
// 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.

// 소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
// (1은 소수가 아닙니다.)

// n은 2이상 1000000이하의 자연수입니다.

// n	result
// 10	4
// 5	3
// 50000

// 1부터 10 사이의 소수는 [2,3,5,7] 4개가 존재하므로 4를 반환
// 1부터 5 사이의 소수는 [2,3,5] 3개가 존재하므로 3를 반환

// step 1. 빈배열 만들고 3부터 n 까지 for문 홀수만
// step 2. for문하나 더 만들고 i % j
// 아무리 줄여도 시간초과 남 .. ㅠ

// const solution = function (n) {
// 	let count = 0;
// 	for (let i = 3; i <= n; i += 2) {
// 		let isPrime = true;

// 		for (let j = 2; j <= Math.sqrt(i); j++) {
// 			if (i % j === 0) {
// 				isPrime = false;
// 				break;
// 			}
// 		}
// 		if (isPrime) count++;
// 	}
// 	return count + 1;
// };

const solution = function (n) {
	// 소수 여부를 판단할 배열을 true로 초기화 (0, 1은 소수가 아니므로 false)
	const isPrime = Array(n + 1).fill(true);
	isPrime[0] = isPrime[1] = false;

	// 2부터 sqrt(n)까지 검사
	for (let i = 2; i * i <= n; i++) {
		if (isPrime[i]) {
			// i의 배수들을 모두 소수 아님으로 처리j = i * i부터 시작하는 이유?  그 전에 나오는 배수들은 이미 더 작은 수들로 지워짐
			for (let j = i * i; j <= n; j += i) {
				isPrime[j] = false;
			}
		}
	}

	// true인 것만 세기
	return isPrime.filter(Boolean).length;
};

console.log(solution(10));
console.log(solution(5));
console.log(solution(32215));
