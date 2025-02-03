// 대문자와 소문자
// 문자열 my_string이 매개변수로 주어질 때,
// 대문자는 소문자로 소문자는 대문자로 변환한 문자열을 return하도록 solution 함수를 완성해주세요.

// 1 ≤ my_string의 길이 ≤ 1,000
// my_string은 영어 대문자와 소문자로만 구성되어 있습니다.
// my_string	result
// "cccCCC"	"CCCccc"
// "abCdEfghIJ"	"ABcDeFGHij"

// 소문자는 대문자로 대문자는 소문자로 바꾼 "CCCccc"를 return합니다.
// 소문자는 대문자로 대문자는 소문자로 바꾼 "ABcDeFGHij"를 return합니다.

// step 1. my_string 받아서 split 해준다.
// step 2. 1에 map사용 소문자 -> 대문자 , 대문자 -> 소문자 해준다.
// step 3. join('')한다.

const solution = function (my_string) {
	let arr = my_string.split('');
	let answer = arr.map((char) =>
		char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
	); // 삼항연산자 char이 대문자가 true면 소문자로 false면 소문자니까 대문자로
	return answer.join('');
};

console.log(solution('cccCCC'));
console.log(solution('abCdEfghIJ'));
