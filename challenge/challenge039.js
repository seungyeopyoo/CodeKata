// 시저 암호
// 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다.
// 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다.
// "z"는 1만큼 밀면 "a"가 됩니다. 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

// 공백은 아무리 밀어도 공백입니다.
// s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
// s의 길이는 8000이하입니다.
// n은 1 이상, 25이하인 자연수입니다.
// s	        n	        result
// "AB"	      ,  1	        "BC"
// "z"	      ,  1	        "a"
// "a B z"	  ,  4	        "e F d"

// step 1. 소문자 대문자 배열로 저장한다
// step 2. 주어진 문자열 s 를 split() 한다.
// step 3. indexOf로 위치 찾고 거기에 n 더함 % 26 해서 return 이렇게 하면 z 다음에 알아서 a로 시작함
// step 4. 아무것도 없으면 그대로 반환한다. 마지막에 join ㅇㅋ

const solution = function (s, n) {
	const upper = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
	const lower = [...'abcdefghijklmnopqrstuvwxyz'];

	return s
		.split('')
		.map((char) => {
			if (char === ' ') return ' ';

			if (upper.includes(char)) {
				const idx = upper.indexOf(char);
				return upper[(idx + n) % 26];
			}

			if (lower.includes(char)) {
				const idx = lower.indexOf(char);
				return lower[(idx + n) % 26];
			}
		})
		.join('');
};

console.log(solution('AB', 1));
console.log(solution('z', 1));
console.log(solution('a B z', 4));
