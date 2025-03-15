// 세로 읽기
// 문자열 my_string과 두 정수 m, c가 주어집니다.
// my_string을 한 줄에 m 글자씩 가로로 적었을 때 왼쪽부터 세로로 c번째 열에 적힌 글자들을 문자열로
// return 하는 solution 함수를 작성해 주세요.

// 제한사항
// my_string은 영소문자로 이루어져 있습니다.
// 1 ≤ m ≤ my_string의 길이 ≤ 1,000
// m은 my_string 길이의 약수로만 주어집니다.
// 1 ≤ c ≤ m
// my_string	            m	c	result
// "ihrhbakrfpndopljhygc"	,4	,2	"happy"
// "programmers"	       , 1	,1	"programmers"

// 예제 1번의 my_string을 한 줄에 4 글자씩 쓰면 다음의 표와 같습니다.
// 1열	2열	3열	4열                 1 5 9 13 17  m칸씩증가 c-1 시작
// i	h	r	h
// b	a	k	r
// f	p	n	d
// o	p	l	j
// h	y	g	c
// 2열에 적힌 글자를 세로로 읽으면 happy이므로 "happy"를 return 합니다.
// 예제 2번의 my_string은 m이 1이므로 세로로 "programmers"를 적는 것과 같고
// 따라서 1열에 적힌 글자를 세로로 읽으면 programmers입니다. 따라서 "programmers"를 return 합니다.

// step 1. 빈배열만든다.
// step 2. i가 c-1 시작, my_string.length 만큼 , m칸씩증가 되는 애들을 1빈 배열에 넣고
// step 3. join하여 return

const solution = function (my_string, m, c) {
	let arr = [];
	for (i = c - 1; i < my_string.length; i += m) {
		arr.push(my_string[i]);
	}
	return arr.join('');
};

console.log(solution('ihrhbakrfpndopljhygc', 4, 2));
console.log(solution('programmers', 1, 1));
