// 숫자 찾기

// 정수 num과 k가 매개변수로 주어질 때,
// num을 이루는 숫자 중에 k가 있으면 num의
// 그 숫자가 있는 자리 수를 return하고 없으면 -1을 return 하도록 solution 함수를 완성해보세요.

// 0 < num < 1,000,000
// 0 ≤ k < 10
// num에 k가 여러 개 있으면 가장 처음 나타나는 자리를 return 합니다.
// num	   k	result
// 29183	1	3
// 232443	4	4
// 123456	7	-1

// 29183에서 1은 3번째에 있습니다.
// 232443에서 4는 4번째에 처음 등장합니다.
// 123456에 7은 없으므로 -1을 return 합니다.

// step 1. num 을 배열로 만들고 split
// step 2. indexOf 한다.
// step 3. 없으면 -1을 return한다.

const solution = function (num, k) {
	let arr = num + ''.split('');
	let answer = arr.indexOf(k) + 1;
	if (answer === 0) {
		return -1;
	} else {
		return answer;
	}
};

console.log(solution(29183, 1));
console.log(solution(232443, 4));
console.log(solution(123456, 7));
