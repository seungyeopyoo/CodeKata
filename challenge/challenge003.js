// 자연수 뒤집어 배열로 만들기
// 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요.
// 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

// 제한 조건
// n은 10,000,000,000이하인 자연수입니다.

// n	    return
// 12345	[5,4,3,2,1]

// step 1. for문을 거꾸로 순회하면서 하나씩 넣는다 or 정상배열 만들고 reverse한다.

const solution = function (n) {
	return (answer = String(n).split('').reverse().map(Number));
};

console.log(solution(12345));
