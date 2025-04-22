// 숫자의 표현
// Finn은 요즘 수학공부에 빠져 있습니다. 수학 공부를 하던 Finn은 자연수 n을 연속한 자연수들로 표현 하는 방법이 여러개라는 사실을 알게 되었습니다.
// 예를들어 15는 다음과 같이 4가지로 표현 할 수 있습니다.

// 1 + 2 + 3 + 4 + 5 = 15
// 4 + 5 + 6 = 15
// 7 + 8 = 15
// 15 = 15
// 자연수 n이 매개변수로 주어질 때, 연속된 자연수들로 n을 표현하는 방법의 수를 return하는 solution를 완성해주세요.

// 제한사항
// n은 10,000 이하의 자연수 입니다.

// n	result
// 15	4

// step 1. 1부터 n 까지 증가값 1인 애들을 더함
// step 2. 합이 n 보다 작을때까지만 ㄱㄱ while
// step 3. while 탈출 하면 n과 step2가 같은지 체크
// step 4. 같으면 count++ return count
// 효율성에서 에러
// const solution = function (n) {
// 	let count = 0;

// 	for (let start = 1; start <= n; start++) {
// 		let sum = 0;
// 		let current = start;

// 		while (sum < n) {
// 			sum += current;
// 			current++;
// 		}

// 		if (sum === n) {
// 			count++;
// 		}
// 	}

// 	return count;
// };

//k를 1부터 하나씩 늘려가며
// n - k*(k-1)/2 값을 계산
// 그 값이 k로 나눠떨어지면 (= x가 자연수)
// 경우의 수 +1

const solution = function (n) {
	let count = 0;

	for (let k = 1; (k * (k - 1)) / 2 < n; k++) {
		if ((n - (k * (k - 1)) / 2) % k === 0) {
			count++;
		}
	}

	return count;
};

console.log(solution(15));
