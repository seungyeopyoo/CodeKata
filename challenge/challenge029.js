// 직사각형 별찍기
// 이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.
// 별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.

// 제한 조건
// n과 m은 각각 1000 이하인 자연수입니다.

// 5 3

// *****
// *****
// *****

// step 1. *을 n번 repeat
// step 2. 배열만들어서 각인덱스를 step1로 채우고 join (한줄씩 띄워쓰며)

const solution = function (n, m) {
	const repeatStar = '*'.repeat(n);
	return Array(m).fill(repeatStar).join('\n');
};

console.log(solution(5, 3));
console.log(solution(3, 5));
