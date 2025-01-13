// 문자 반복 출력하기

// 문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string에 들어있는
// 각 문자를 n만큼 반복한 문자열을 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 2 ≤ my_string 길이 ≤ 5
// 2 ≤ n ≤ 10
// "my_string"은 영어 대소문자로 이루어져 있습니다.
// 입출력 예
// my_string	n	result
// "hello"	3	"hhheeellllllooo"
// 입출력 예 설명
// 입출력 예 #1

// "hello"의 각 문자를 세 번씩 반복한 "hhheeellllllooo"를 return 합니다.

// step 1. 빈배열을 만든다.
// step 2. 주어진 string을 split하여 배열로 만든다.
// step 3. for문을 사용하여 빈배열에 push 하는데 각 인덱스당 n만큼 repeat하여 넣는다.
// step 4. 만들어진 배열을 join 해서 리턴한다.

const solution = function (my_string, n) {
	let arr = [];
	let str = my_string.split('');
	for (let i = 0; i < my_string.length; i++) {
		arr.push(str[i].repeat(n));
	}
	return arr.join('');
};

console.log(solution('hello', 3));
