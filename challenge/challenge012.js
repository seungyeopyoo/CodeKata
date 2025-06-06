// 정수 제곱근 판별
// 임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
// n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

// n은 1이상, 50000000000000 이하인 양의 정수입니다.

// n	    return
// 121	    144
// 3	    -1

// 121은 양의 정수 11의 제곱이므로, (11+1)를 제곱한 144를 리턴합니다.
// 3은 양의 정수의 제곱이 아니므로, -1을 리턴합니다.

// step 1. for문 i가 1부터 순회하면서 n === i * i 면 i+1 * i+1 return 아니면 -1 인데 런타임에러 걸릴듯
// 안걸리긴했는데 Math.sqrt() 가 정수의 제곱근을 반환한다고 함
const solution = function (n) {
	for (let i = 1; i <= n; i++) {
		if (n === i * i) {
			return (i + 1) * (i + 1);
		}
	}
	return -1;
};

console.log(solution(121));
console.log(solution(3));
console.log(solution(5000000000));
