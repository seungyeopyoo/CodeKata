// 잘라서 배열로 저장하기
// 문자열 my_str과 n이 매개변수로 주어질 때,
// my_str을 길이 n씩 잘라서 저장한 배열을 return하도록 solution 함수를 완성해주세요.

// 1 ≤ my_str의 길이 ≤ 100
// 1 ≤ n ≤ my_str의 길이
// my_str은 알파벳 소문자, 대문자, 숫자로 이루어져 있습니다.

// my_str	n	result
// "abc1Addfggg4556b"	,6	["abc1Ad", "dfggg4", "556b"]
// "abcdef123"	,3	["abc", "def", "123"]

// "abc1Addfggg4556b" 를 길이 6씩 잘라 배열에 저장한 ["abc1Ad", "dfggg4", "556b"]를 return해야 합니다.
// "abcdef123" 를 길이 3씩 잘라 배열에 저장한 ["abc", "def", "123"]를 return해야 합니다.

// step 1. my_str을 split한다.
// step 2. 0부터 n 까지 slice 하는 행위를 반복한다.
// step 3. 2를 빈배열에 push한다.

const solution = function (my_str, n) {
	let arr = [];
	for (let i = 0; i < my_str.length; i += n) {
		arr.push(my_str.slice(i, i + n));
	}
	return arr;
};

console.log(solution('abc1Addfggg4556b', 6));
console.log(solution('abcdef123', 3));
