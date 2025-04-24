// 피보나치 수
// 피보나치 수는 F(0) = 0, F(1) = 1일 때, 1 이상의 n에 대하여 F(n) = F(n-1) + F(n-2) 가 적용되는 수 입니다.

// 예를들어
// F(2) = F(0) + F(1) = 0 + 1 = 1
// F(3) = F(1) + F(2) = 1 + 1 = 2
// F(4) = F(2) + F(3) = 1 + 2 = 3
// F(5) = F(3) + F(4) = 2 + 3 = 5
// 와 같이 이어집니다.

// 2 이상의 n이 입력되었을 때, n번째 피보나치 수를 1234567으로 나눈 나머지를 리턴하는 함수, solution을 완성해 주세요.

// 제한 사항
// n은 2 이상 100,000 이하인 자연수입니다.

// n	return
// 3	2
// 5	5

// 피보나치수는 0번째부터 0, 1, 1, 2, 3, 5, ... 와 같이 이어집니다.

// step 1. 빈배열 하나 선언함
// setp 2. 길이가 n인 피보나치 수열로 만들어서 step1에 push
// step 3. step2의 n 번째 인덱스를 1234567로 나눈 나머지를 return
// 도수코드 써놓은대로 하니까 오류가 났었는데 % 1234567을 하고 push한 후에 fibonacci[n]을 return하는건 오류가 안남
// 숫자가 너무 커지지 않게 매 단계 %를 하는게 안정적이라고 함

const solution = function (n) {
	const fibonacci = [0, 1];

	for (let i = 2; i < n + 1; i++) {
		fibonacci.push((fibonacci[i - 2] + fibonacci[i - 1]) % 1234567);
	}
	return fibonacci[n];
};

console.log(solution(3));
console.log(solution(5));
console.log(solution(100));
