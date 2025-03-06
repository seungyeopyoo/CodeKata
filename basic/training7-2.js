// 코드 처리하기
// 문자열 code가 주어집니다.
// code를 앞에서부터 읽으면서 만약 문자가 "1"이면 mode를 바꿉니다.
//  mode에 따라 code를 읽어가면서 문자열 ret을 만들어냅니다.

// mode는 0과 1이 있으며,
// idx를 0 부터 code의 길이 - 1 까지 1씩 키워나가면서 code[idx]의 값에 따라 다음과 같이 행동합니다.

// mode가 0일 때
// code[idx]가 "1"이 아니면 idx가 짝수일 때만 ret의 맨 뒤에 code[idx]를 추가합니다.
// code[idx]가 "1"이면 mode를 0에서 1로 바꿉니다.
// mode가 1일 때
// code[idx]가 "1"이 아니면 idx가 홀수일 때만 ret의 맨 뒤에 code[idx]를 추가합니다.
// code[idx]가 "1"이면 mode를 1에서 0으로 바꿉니다.
// 문자열 code를 통해 만들어진 문자열 ret를 return 하는 solution 함수를 완성해 주세요.

// 단, 시작할 때 mode는 0이며, return 하려는 ret가 만약 빈 문자열이라면 대신
//  "EMPTY"를 return 합니다.

// 제한사항
// 1 ≤ code의 길이 ≤ 100,000
// code는 알파벳 소문자 또는 "1"로 이루어진 문자열입니다.
// code	result
// "abc1abc1abc"	"acbac"

// code의 각 인덱스 i에 따라 다음과 같이 mode와 ret가 변합니다.
// i	code[i]	mode ret
// 0	"a"     0	"a"
// 1	"b"	    0	"a"
// 2	"c"	    0	"ac"
// 3	"1"	    1	"ac"
// 4	"a"	    1	"ac"
// 5	"b"	    1	"acb"
// 6	"c"	    1	"acb"
// 7	"1"	    0	"acb"
// 8	"a"	    0	"acba"
// 9	"b"	    0	"acba"
// 10	"c"	    0	"acbac"
// 따라서 "acbac"를 return 합니다.

// step 1. ret 이라는 배열 만든다.
// step 2. code에서 홀수번째 1이 나올때마다 mode를 변경
// step 3. mode가 0이면 짝수일 때만 push
// step 4. mode가 1이면 홀수일 때만 push
// step 3. return 1.join

const solution = function (code) {
	let ret = [];
	let mode = 0; // 초기 mode는 0

	for (let i = 0; i < code.length; i++) {
		if (code[i] === '1') {
			mode = 1 - mode; // mode를 변경 (0 → 1, 1 → 0)
		} else {
			if ((mode === 0 && i % 2 === 0) || (mode === 1 && i % 2 === 1)) {
				ret.push(code[i]); // 조건에 맞으면 ret에 추가
			}
		}
	}

	return ret.length > 0 ? ret.join('') : 'EMPTY'; // 빈 배열이면 "EMPTY" 반환
};

console.log(solution('abc1abc1abc'));
