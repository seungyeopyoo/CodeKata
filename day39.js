// 최대공약수와 최소공배수

// 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요. 배열의 맨 앞에 최대공약수,
// 그다음 최소공배수를 넣어 반환하면 됩니다. 예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.

// 입출력 예
// n	m	return
// 3	12	[3, 12]
// 2	5	[1, 10]

// 자연수 2와 5의 최대공약수는 1, 최소공배수는 10이므로 [1, 10]을 리턴해야 합니다

//최대 공약수는 1부터 둘중 더 작은 놈까지 돌림 그중에서  나머지가 0인애들중에 가장 큰수가 최대 공약수
// 최소 공배수는

function solution(n, m) {
	// 최대공약수를 구하는 함수
	function gcd(a, b) {
		let maxGCD = 1;
		for (let i = 1; i <= Math.min(a, b); i++) {
			if (a % i === 0 && b % i === 0) {
				maxGCD = i;
			}
		}
		return maxGCD;
	}

	// 최소공배수를 구하는 함수
	function lcm(a, b, gcdValue) {
		return (a * b) / gcdValue;
	}

	const greatestCommonDivisor = gcd(n, m);
	const leastCommonMultiple = lcm(n, m, greatestCommonDivisor);

	return [greatestCommonDivisor, leastCommonMultiple];
}

// 예제 사용
console.log(solution(3, 12)); // [3, 12]
console.log(solution(2, 5)); // [1, 10]
