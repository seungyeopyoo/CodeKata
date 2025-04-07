// 수박수박수박수박수박수?
// 제출 내역
// 문제 설명
// 길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수,
// solution을 완성하세요. 예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.

// n은 길이 10,000이하인 자연수입니다.

// n	return
// 3	"수박수"
// 4	"수박수박"

// step 1. n 을 2 로나눈값 저장함 몫만 floor
// step 2. n이짝수면 step1 만큼 "수박" repeat(step1)
// step 3. n이 홀수면 몫만큼 수박하고 +수 삼항연산자 step2 : stpe3

const solution = function (n) {
	const count = Math.floor(n / 2);
	// if (n % 2 === 0) return '수박'.repeat(count);
	// if (n % 2 !== 0) return '수박'.repeat(count) + '수';

	return n % 2 === 0 ? '수박'.repeat(count) : '수박'.repeat(count) + '수';
};

console.log(solution(3));
console.log(solution(4));
