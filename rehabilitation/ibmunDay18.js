// 배열 원소의 길이
// 제출 내역
// 문제 설명
// 문자열 배열 strlist가 매개변수로 주어집니다.
// strlist 각 원소의 길이를 담은 배열을 return하도록 solution 함수를 완성해주세요.

// 1 ≤ strlist 원소의 길이 ≤ 100
// strlist는 알파벳 소문자, 대문자, 특수문자로 구성되어 있습니다.

// strlist	result
// ["We", "are", "the", "world!"]	[2, 3, 3, 6]
// ["I", "Love", "Programmers."]	[1, 4, 12]

// ["We", "are", "the", "world!"]의 각 원소의 길이인 [2, 3, 3, 6]을 return합니다.
// ["I", "Love", "Programmers."]의 각 원소의 길이인 [1, 4, 12]을 return합니다.

// step 0.  빈 배열만든다
// step 1.  strlist의 i 번째 인덱스의 length를 0번부터 length까지 구한다.
// step 2.  1을 빈배열에 하나 씩 push 한다.
// stpe 3.  걔를 반환

const solution = function (strlist) {
	let arr = [];

	for (let i = 0; i < strlist.length; i++) {
		arr.push(strlist[i].length);
	}
	return arr;
};

console.log(solution(['We', 'are', 'the', 'world!']));
console.log(solution(['I', 'Love', 'Programmers.']));
