// 시저 암호

// 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다.
// 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다.
// 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

// 공백은 아무리 밀어도 공백입니다.
// s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
// s의 길이는 8000이하입니다.
// n은 1 이상, 25이하인 자연수입니다.

// s	n	result
// "AB"	1	"BC"
// "z"	1	"a"
// "a B z"	4	"e F d"

const lowerAlphabets = [
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'w',
	'x',
	'y',
	'z',
];
const upperAlphabets = [
	'A',
	'B',
	'C',
	'D',
	'E',
	'F',
	'G',
	'H',
	'I',
	'J',
	'K',
	'L',
	'M',
	'N',
	'O',
	'P',
	'Q',
	'R',
	'S',
	'T',
	'U',
	'V',
	'W',
	'X',
	'Y',
	'Z',
];

let solution = function (s, n) {
	// s를 for문으로 하나씩 접근 "AB" s[i]
	const movedResult = [];
	for (let i = 0; i < s.length; i++) {
		// 하나씪 접근한 값이 공백인지 확인 공백이면 그대로 출력,
		if (s[i] === ' ') {
			// 공백이를 그대로 담음
			movedResult.push(' ');
			// 대문자인지 확인
		} else if (s[i].toUpperCase() === s[i]) {
			// 이동하기전의 대문자인녀석이 대문자 배열에서 몇번째인지 구함
			const beforeIndex = upperAlphabets.indexOf(s[i]);
			// n만큼 이동한 알파벳이 몇번쨰인지 숫자구함
			let afterIndex = beforeIndex + n;
			// 만약 afterIndex가 25보다 크면 -26을 해준다.
			if (afterIndex > 25) {
				afterIndex -= 26;
			}
			// 대문자배열에서 n만큼 이동한애를 moved로 선언
			const moved = upperAlphabets[afterIndex];
			// 걔를 결과값에 담음
			movedResult.push(moved);
		} else {
			// 소문자인경우를 else에서 다룸
			// 이동하기전의 소문자녀석이 소문자 배열에서 몇번째인지 구함
			const beforeIndex = lowerAlphabets.indexOf(s[i]);
			// n만큼 이동한 알파벳이 몇번쨰인지 숫자구함
			let afterIndex = beforeIndex + n;
			if (afterIndex > 25) {
				afterIndex -= 26;
			}
			// 소문자배열에서 n만큼 이동한애를 moved로 선언
			const moved = lowerAlphabets[afterIndex];
			// 걔를 결과값에 담음
			movedResult.push(moved);
		}
	}
	return movedResult.join('');
};

console.log(solution('AB', 1));
console.log(solution('z', 1));
console.log(solution('a B z', 4));
