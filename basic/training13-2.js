// 문자열 여러 번 뒤집기
// 문자열 my_string과 이차원 정수 배열 queries가 매개변수로 주어집니다.
// queries의 원소는 [s, e] 형태로, my_string의 인덱스 s부터 인덱스 e까지를 뒤집으라는 의미입니다.
//  my_string에 queries의 명령을 순서대로 처리한 후의 문자열을 return 하는 solution함수를작성해주세요.

// my_string은 영소문자로만 이루어져 있습니다.
// 1 ≤ my_string의 길이 ≤ 1,000
// queries의 원소는 [s, e]의 형태로 0 ≤ s ≤ e < my_string의 길이를 만족합니다.
// 1 ≤ queries의 길이 ≤ 1,000
// my_string	                queries	                   result
// "rermgorpsam"	,[[2, 3], [0, 7], [5, 9], [6, 10]]	"programmers"
// 예제 1번의 my_string은 "rermgorpsam"이고 주어진 queries를 순서대로 처리하면 다음과 같습니다.
// queries	my_string
// "rermgorpsam"
// [2, 3]	"remrgorpsam"
// [0, 7]	"progrmersam"
// [5, 9]	"prograsremm"
// [6, 10]	"programmers"
// 따라서 "programmers"를 return 합니다.

// step 1. my_string을 split한다.
// step 2. queries를 돌며 위치를 바꾼다
// step 3. 다 돌고나면 배열을 join하여 return한다.

const solution = function (my_string, queries) {
	let arr = my_string.split('');

	for (let [s, e] of queries) {
		while (s < e) {
			[arr[s], arr[e]] = [arr[e], arr[s]];
			s++;
			e--;
		}
	}

	return arr.join('');
};

console.log(
	solution('rermgorpsam', [
		[2, 3],
		[0, 7],
		[5, 9],
		[6, 10],
	])
);
