// 가운데 글자 가져오기
// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요.
// 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

// 재한사항
// s는 길이가 1 이상, 100이하인 스트링입니다.
// 입출력 예
// s	    return
// "abcde"	"c"
// "qwer"	"we"

// step 1. length / 2  선언함
// step 2. 삼항연산자 s. length가 짝수면 ? s.slice(step 1 -1 , +1) :s[step1]

const solution = function (s) {
	const middle = Math.floor(s.length / 2);
	return s.length % 2 === 0 ? s.slice(middle - 1, middle + 1) : s[middle];
};

console.log(solution('abcde'));
console.log(solution('qwer'));
