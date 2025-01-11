// 문자열 뒤집기
// 문자열 my_string이 매개변수로 주어집니다. my_string을 거꾸로 뒤집은 문자열을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ my_string의 길이 ≤ 1,000
// 입출력 예
// my_string	return
// "jaron"	"noraj"
// "bread"	"daerb"
// 입출력 예 설명
// 입출력 예 #1

// my_string이 "jaron"이므로 거꾸로 뒤집은 "noraj"를 return합니다.
// 입출력 예 #2

// my_string이 "bread"이므로 거꾸로 뒤집은 "daerb"를 return합니다.

//step 1. 빈 배열을 만든다.
//step 2. 주어진 문자열을 배열에 집어 넣는다. <- split 쓰니까 빈배열에 집어넣지 않아도 됐다.
//step 3. 배열을 뒤집는다.
//step 4. 뒤집어진 배열을 join으로 반환한다.

const solution = function (my_string) {
	let strArr = my_string.split('').reverse().join('');

	return strArr;
};
console.log(solution('jaron'));
console.log(solution('bread'));
