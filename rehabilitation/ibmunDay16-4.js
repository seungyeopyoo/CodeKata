// 소인수분해
// 소인수분해란 어떤 수를 소수들의 곱으로 표현하는 것입니다. 예를 들어 12를 소인수 분해하면 2 * 2 * 3 으로 나타낼 수 있습니다.
// 따라서 12의 소인수는 2와 3입니다.
// 자연수 n이 매개변수로 주어질 때 n의 소인수를 오름차순으로 담은 배열을 return하도록 solution 함수를 완성해주세요.

// 2 ≤ n ≤ 10,000
// n	result
// 12	[2, 3]
// 17	[17]
// 420	[2, 3, 5, 7]

// 12를 소인수분해하면 2 * 2 * 3 입니다. 따라서 [2, 3]을 return합니다.
// 17은 소수입니다. 따라서 [17]을 return 해야 합니다.
// 420을 소인수분해하면 2 * 2 * 3 * 5 * 7 입니다. 따라서 [2, 3, 5, 7]을 return합니다.

// step 1. 빈 배열을 만듬
// step 2. 나누기 했을때 나머지가 0 인 약수들을 1에 넣음
// step 3. 2를 오름차순으로 정렬 -> 약수가 2부터 시작해서 필요없음
// step 4. 3에서 중복되는 것 제거

const solution = function (n) {
	let arr = [];
	let yaksu = 2;
	while (n > 1) {
		while (n % yaksu === 0) {
			arr.push(yaksu);
			n = n / yaksu;
		}
		yaksu++;
	}

	return arr.filter((item, index) => arr.indexOf(item) === index);
};

console.log(solution(12));
console.log(solution(17));
console.log(solution(420));
