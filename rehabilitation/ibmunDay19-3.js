// 암호 해독
// 군 전략가 머쓱이는 전쟁 중 적군이 다음과 같은 암호 체계를 사용한다는 것을 알아냈습니다.

// 암호화된 문자열 cipher를 주고받습니다.
// 그 문자열에서 code의 배수 번째 글자만 진짜 암호입니다.
// 문자열 cipher와 정수 code가 매개변수로 주어질 때
// 해독된 암호 문자열을 return하도록 solution 함수를 완성해주세요.

// 1 ≤ cipher의 길이 ≤ 1,000
// 1 ≤ code ≤ cipher의 길이
// cipher는 소문자와 공백으로만 구성되어 있습니다.
// 공백도 하나의 문자로 취급합니다.
// cipher	code	result
// "dfjardstddetckdaccccdegk"	4	"attack"
// "pfqallllabwaoclk"	2	"fallback"

// "dfjardstddetckdaccccdegk" 의 4번째, 8번째, 12번째, 16번째, 20번째, 24번째 글자를 합친 "attack"을 return합니다.
// "pfqallllabwaoclk" 의 2번째, 4번째, 6번째, 8번째, 10번째, 12번째, 14번째, 16번째 글자를 합친 "fallback"을 return합니다.

// step 1. 빈배열만든다.
// step 2. for 문 사용 i 가 code의 배수일때마다 1의 빈배열에 push한다.
// step 3. 2의 push 된 빈 배열을 join한다.

const solution = function (cipher, code) {
	let arr = [];

	for (let i = code - 1; i < cipher.length; i += code) {
		arr.push(cipher[i]);
	}

	return arr.join('');
};
console.log(solution('dfjardstddetckdaccccdegk', 4));
console.log(solution('pfqallllabwaoclk', 2));
