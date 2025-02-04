// 약수 구하기
// 정수 n이 매개변수로 주어질 때, n의 약수를 오름차순으로 담은 배열을 return하도록 solution 함수를 완성해주세요.

// 1 ≤ n ≤ 10,000
// n	result
// 24	[1, 2, 3, 4, 6, 8, 12, 24]
// 29	[1, 29]

// 24의 약수를 오름차순으로 담은 배열 [1, 2, 3, 4, 6, 8, 12, 24]를 return합니다.
// 29의 약수를 오름차순으로 담은 배열 [1, 29]를 return합니다.

// step 1. 빈배열 만듬
// step 2. for 문으로 1부터 n까지 ㄱㄱ
// step 3. if n % i 가 0일때 1의 arr에 push
// step 4. 정렬 필요없을듯 그대로 반환

const solution = function (n) {
	let arr = [];

	for (let i = 1; i <= n; i++) {
		if (n % i === 0) {
			arr.push(i);
		}
	}
	return arr;
};

console.log(solution(24));
console.log(solution(29));
