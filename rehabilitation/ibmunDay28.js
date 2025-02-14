// 저주의 숫자 3
// 3x 마을 사람들은 3을 저주의 숫자라고 생각하기 때문에 3의 배수와 숫자 3을 사용하지 않습니다.
// 3x 마을 사람들의 숫자는 다음과 같습니다.

// 10진법	3x 마을에서 쓰는 숫자	10진법	3x 마을에서 쓰는 숫자
// 1	1	6	8
// 2	2	7	10
// 3	4	8	11
// 4	5	9	14
// 5	7	10	16
// 정수 n이 매개변수로 주어질 때, n을 3x 마을에서 사용하는 숫자로 바꿔 return하도록 solution 함수를 완성해주세요.

// 1 ≤ n ≤ 100
// n	result
// 15	25
// 40	76

// 15를 3x 마을의 숫자로 변환하면 25입니다.
// 40을 3x 마을의 숫자로 변환하면 76입니다.

// step 1. for 문으로 3 % !==0 애들 +  3의배수가 아니지만 3이 들어가는 애들 나열
// step 2. n 찍어보고 조절

const solution = function (n) {
	let arr = [];
	for (let num = 1; arr.length < n; num++) {
		if (num % 3 !== 0 && !String(num).includes('3')) {
			arr.push(num);
		}
	}
	return arr[n - 1];
};
console.log(solution(15));
console.log(solution(40));
