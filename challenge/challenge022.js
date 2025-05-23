// 내적
// 길이가 같은 두 1차원 정수 배열 a, b가 매개변수로 주어집니다. a와 b의 내적을 return 하도록 solution 함수를 완성해주세요.

// 이때, a와 b의 내적은 a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1] 입니다. (n은 a, b의 길이)

// a, b의 길이는 1 이상 1,000 이하입니다.
// a, b의 모든 수는 -1,000 이상 1,000 이하입니다.
// 입출력 예
// a	            b	            result
// [1,2,3,4]	 ,   [-3,-1,0,2] 	3
// [-1,0,1]     ,	[1,0,-1]	    -2

// a와 b의 내적은 1*(-3) + 2*(-1) + 3*0 + 4*2 = 3 입니다.
// a와 b의 내적은 (-1)*1 + 0*0 + 1*(-1) = -2 입니다.

//  step 1. for 문 순회하면서 a 랑 b 인덱스 곱한거 다 빈배열에 담음 그다음에 reduce해서 return
// reduce에 index 담을 수 있더랑

// const solution = function (a, b) {
// 	const arr = [];
// 	for (let i = 0; i < a.length; i++) {
// 		arr.push(a[i] * b[i]);
// 	}
// 	return arr.reduce((acc, cur) => acc + cur, 0);
// };

const solution = function (a, b) {
	return a.reduce((acc, cur, i) => acc + cur * b[i], 0);
};
console.log(solution([1, 2, 3, 4], [-3, -1, 0, 2]));

console.log(solution([-1, 0, 1], [1, 0, -1]));
