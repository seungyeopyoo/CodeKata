// 0 떼기
// 정수로 이루어진 문자열 n_str이 주어질 때, n_str의
// 가장 왼쪽에 처음으로 등장하는 0들을 뗀 문자열을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 2 ≤ n_str ≤ 10
// n_str이 "0"으로만 이루어진 경우는 없습니다.
// 입출력 예
// n_str	        result
// "0010"	        "10"
// "854020"	        "854020"

// "0010"의 가장 왼쪽에 연속으로 등장하는 "0"을 모두 제거하면 "10"이 됩니다.

// "854020"는 가장 왼쪽에 0이 없으므로 "854020"을 return합니다.

// step 1. 순회하면서 0 이 아닐 경우 에만 +함
// step 2. 0이 아닌 숫자가 나올때까지 while slice i

const solution = function (n_str) {
	let i = 0;

	while (i < n_str.length && n_str[i] === '0') {
		i++;
	}
	return n_str.slice(i);
};

console.log(solution('0010'));
console.log(solution('854020'));
