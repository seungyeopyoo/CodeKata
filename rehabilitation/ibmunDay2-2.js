// 분수의 덧셈
// 문제 설명
// 첫 번째 분수의 분자와 분모를 뜻하는 numer1, denom1, 두 번째 분수의 분자와 분모를 뜻하는 numer2, denom2가 매개변수로 주어집니다.
// 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 0 <numer1, denom1, numer2, denom2 < 1,000
// 입출력 예
// numer1	denom1	numer2	denom2	result
// 1	2	3	4	[5, 4]
// 9	2	1	3	[29, 6]

const solution = function (num1, num2, num3, num4) {
	const bunza = num1 * num4 + num3 * num2;
	const bunmo = num2 * num4;

	const getGcd = (a, b) => (a % b == 0 ? b : getGcd(b, a % b)); //최대공약수 구하기

	const gcd = getGcd(bunza, bunmo); // 분자와 분모의 최대 공약수 구하기

	return [bunza / gcd, bunmo / gcd]; // 구해둔 최대 공약수로 분자 분모를 나눠주고 반환
};
console.log(solution(1, 2, 3, 4));
console.log(solution(9, 2, 1, 3));
