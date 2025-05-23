// 약수의 개수와 덧셈
// 제출 내역
// 두 정수 left와 right가 매개변수로 주어집니다. left부터 right까지의 모든 수들 중에서,
// 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ left ≤ right ≤ 1,000
// left	        right	    result
// 13	    ,    17	        43
// 24	   ,     27	        52

// 다음 표는 13부터 17까지의 수들의 약수를 모두 나타낸 것입니다.
// 수	약수	            약수의 개수
// 13	1, 13	            2
// 14	1, 2, 7, 14	        4
// 15	1, 3, 5, 15	        4
// 16	1, 2, 4, 8, 16	    5
// 17	1, 17	            2
// 따라서, 13 + 14 + 15 - 16 + 17 = 43을 return 해야 합니다.

// 다음 표는 24부터 27까지의 수들의 약수를 모두 나타낸 것입니다.
// 수	약수	                    약수의 개수
// 24	1, 2, 3, 4, 6, 8, 12, 24	8
// 25	1, 5, 25	                3
// 26	1, 2, 13, 26	            4
// 27	1, 3, 9, 27	                4
// 따라서, 24 - 25 + 26 + 27 = 52를 return 해야 합니다.

// step 1. left부터 right 까지 순회하는 for문
// step 2. 1부터 step1의 각 인덱스까지 순회하면서 i % j ===0 일때만 count++
// step 3. 짝수면 + 홀수면 -

const solution = function (left, right) {
	let result = 0;

	for (let i = left; i <= right; i++) {
		let count = 0;
		for (let j = 1; j <= i; j++) {
			if (i % j === 0) count++;
		}
		if (count % 2 === 0) result += i;
		else result -= i;
	}

	return result;
};

console.log(solution(13, 17));
console.log(solution(24, 27));
