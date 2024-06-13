// 문자열 다루기 기본

// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요.
// 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

// s는 영문 알파벳 대소문자 또는 0부터 9까지 숫자로 이루어져 있습니다.

// s	return
// "a234"	false
// "1234"	true

// for로 나열 let i = 0 i < s.length i++
// 0123456789 외에 다른거 담고 있으면 false include?
let solution = function (s) {
	let findNumberArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

	for (let i = 0; i < s.length; i++) {
		if (!findNumberArr.includes(s[i])) {
			return false;
		}
	}
	return true;
};

console.log(solution('a234')); // false
console.log(solution('1234')); // true

//True or False를 리턴
// if 숫자만 있으면 return True , else면 return false
// 따옴표 벗겨내서 typeof 가 === number 이면 True ?

// let solution = function (s) {
// 	let findNumber = Number(s);
// 	if (isNaN(findNumber)) {
// 		return false;
// 	} else {
// 		return true;
// 	}
// };

// console.log(solution('a234'));
// console.log(solution('1234'));

// === number로 하니까 not definded 에러
// === Number 하니까 둘다 false
// === 'number' 하니까 둘다 true ㅋㅋ a234는 왜 true? 얘는 undefined 찍힘
