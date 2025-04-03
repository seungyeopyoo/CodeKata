// 짝수와 홀수
// 정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.

// num은 int 범위의 정수입니다.
// 0은 짝수입니다.

// num	return
// 3	"Odd"
// 4	"Even"

// step 1. 삼항연산자 ? "Even" : "Odd"
// Math.abs 안쓰니까 -1 같은 경우에 짝수라고 나오더라 JavaScript에서는 나머지가 피제수와 같은 부호를 가진다고 함
// -1 % 2 했는데 1이 나와버린거임 짝수로 했으면 Math.abs가 필요없었는데 이유는 num % 2 === 0 으로 항상 판별이 가능해서 ㅇㅇ

const solution = function (num) {
	return Math.abs(num) % 2 === 1 ? 'Odd' : 'Even';
};

console.log(solution(-1));

console.log(solution(4));
