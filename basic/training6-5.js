// 홀짝에 따라 다른 값 반환하기
// 양의 정수 n이 매개변수로 주어질 때,
// n이 홀수라면 n 이하의 홀수인 모든 양의 정수의 합을 return 하고
//  n이 짝수라면 n 이하의 짝수인 모든 양의 정수의 제곱의 합을 return 하는
//  solution 함수를 작성해 주세요.

// 제한사항
// 1 ≤ n ≤ 100
// 입출력 예
// n	result
// 7	16
// 10	220
// 입출력 예 설명
// 입출력 예 #1

// 예제 1번의 n은 7로 홀수입니다.
// 7 이하의 모든 양의 홀수는 1, 3, 5, 7이고
// 이들의 합인 1 + 3 + 5 + 7 = 16을 return 합니다.

// 예제 2번의 n은 10으로 짝수입니다.
//  10 이하의 모든 양의 짝수는 2, 4, 6, 8, 10이고
// 이들의 제곱의 합인
//  4 + 16 + 36 + 64 + 100 = 220을 return 합니다.

// step 1. n이 홀수인지 짝수 인지 검증한다.
// step 2. n이 홀수라면 for 문 1부터 n 까지의 홀수의 합을 return
// step 3. n이 짝수면 for문 2부터 n 까지 각 자리수 제곱한 애들 더해서 return

const solution = function (n) {
	answer = 0;
	if (n % 2 !== 0) {
		for (let i = 1; i <= n; i += 2) {
			answer += i;
		}
	} else {
		for (let i = 2; i <= n; i += 2) {
			answer += i * i;
		}
	}
	return answer;
};

console.log(solution(7));
console.log(solution(10));
