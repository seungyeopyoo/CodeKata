// 인덱스 바꾸기
// 문자열 my_string과 정수 num1, num2가 매개변수로 주어질 때,
// my_string에서 인덱스 num1과 인덱스 num2에 해당하는 문자를 바꾼
// 문자열을 return 하도록 solution 함수를 완성해보세요.

// 1 < my_string의 길이 < 100
// 0 ≤ num1, num2 < my_string의 길이
// my_string은 소문자로 이루어져 있습니다.
// num1 ≠ num2
// my_string	num1	num2	result
// "hello"	     1	     2	    "hlelo"
// "I love you"	 3	     6	  "I l veoyou"

// "hello"의 1번째 인덱스인 "e"와 2번째 인덱스인 "l"을 바꾸면 "hlelo"입니다.
// "I love you"의 3번째 인덱스 "o"와 " "(공백)을 바꾸면 "I l veoyou"입니다.

// step 1. my_string 을 split 한다.
// step 2. 잘 모르겠는데 num1하고 num2하고 위치 바꾼다.
// step 3. join하여 문자열로 return한다.

const solution = function (my_string, num1, num2) {
	let arrStr = my_string.split('');
	[arrStr[num1], arrStr[num2]] = [arrStr[num2], arrStr[num1]];
	return arrStr.join('');
};

console.log(solution('hello', 1, 2));
console.log(solution('I love you', 3, 6));
