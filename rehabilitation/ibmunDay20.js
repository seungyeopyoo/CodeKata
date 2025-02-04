// 한 번만 등장한 문자
// 문자열 s가 매개변수로 주어집니다.
// s에서 한 번만 등장하는 문자를 사전 순으로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요.
// 한 번만 등장하는 문자가 없을 경우 빈 문자열을 return 합니다.

// 0 < s의 길이 < 1,000
// s는 소문자로만 이루어져 있습니다.
// 입출력 예
// s	result
// "abcabcadc"	"d"
// "abdc"	"abcd"
// "hello"	"eho"

// "abcabcadc"에서 하나만 등장하는 문자는 "d"입니다.
// "abdc"에서 모든 문자가 한 번씩 등장하므로 사전 순으로 정렬한 "abcd"를 return 합니다.
// "hello"에서 한 번씩 등장한 문자는 "heo"이고 이를 사전 순으로 정렬한 "eho"를 return 합니다.

// step 1. s를 split 한다.
// step 2. 오름차순 정렬?한다
// step 3.
// step 4. join한다.

const solution = function (s) {
	const charMap = new Map();

	// 1. 각 문자의 등장 횟수를 저장
	for (const char of s) {
		charMap.set(char, (charMap.get(char) || 0) + 1);
	}

	// 2. 한 번만 등장한 문자만 필터링 후 정렬
	return [...charMap]
		.filter(([char, count]) => count === 1) // 한 번만 등장하는 문자 필터링
		.map(([char]) => char) // 문자만 추출
		.sort() // 사전순 정렬
		.join('');
};

console.log(solution('abcabcadc'));
console.log(solution('abdc'));
console.log(solution('hello'));
