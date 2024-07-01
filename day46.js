// 숫자 문자열과 영단어
// 제출 내역
// 네오와 프로도가 숫자놀이를 하고 있습니다. 네오가 프로도에게 숫자를 건넬 때 일부 자릿수를 영단어로 바꾼 카드를 건네주면 프로도는 원래 숫자를 찾는 게임입니다.

// 다음은 숫자의 일부 자릿수를 영단어로 바꾸는 예시입니다.

// 1478 → "one4seveneight"
// 234567 → "23four5six7"
// 10203 → "1zerotwozero3"
// 이렇게 숫자의 일부 자릿수가 영단어로 바뀌어졌거나, 혹은 바뀌지 않고 그대로인 문자열 s가 매개변수로 주어집니다. s가 의미하는 원래 숫자를 return 하도록 solution 함수를 완성해주세요.

// 참고로 각 숫자에 대응되는 영단어는 다음 표와 같습니다.

// 숫자	영단어
// 0	zero
// 1	one
// 2	two
// 3	three
// 4	four
// 5	five
// 6	six
// 7	seven
// 8	eight
// 9	nine

// 1 ≤ s의 길이 ≤ 50
// s가 "zero" 또는 "0"으로 시작하는 경우는 주어지지 않습니다.
// return 값이 1 이상 2,000,000,000 이하의 정수가 되는 올바른 입력만 s로 주어집니다.

//         s	         result
// "one4seveneight"	     1478
// "23four5six7"	     234567
// "2three45sixseven"	 234567
// "123"	             123

// "three"는 3, "six"는 6, "seven"은 7에 대응되기 때문에 정답은 입출력 예 #2와 같은 234567이 됩니다.
// 입출력 예 #2와 #3과 같이 같은 정답을 가리키는 문자열이 여러 가지가 나올 수 있습니다.

// s에는 영단어로 바뀐 부분이 없습니다.

// 정확성 테스트 : 10초

// 문자열 s를 받아서 영어로 된 숫자를 숫자로 변환해서 반환하기

// s에 영단어가 포함되어있는지를 먼저 확인 if isNaN(s) 가 false면 숫자로만 구성임 return s -'';
// else면 영단어가 포함되어있는 것
// 영단어가 numEng에 포함 되는지를 확인
// 해당 영단어를 numEng의 벨류 값으로 replace
// replace 된 changedEng를 return

const numEng = [
	'zero',
	'one',
	'two',
	'three',
	'four',
	'five',
	'six',
	'seven',
	'eight',
	'nine',
];

let solution = function (s) {
	// let replaced0 = s.replaceAll('zero', 0);
	// let replaced1 = replaced0.replaceAll('one', 1);
	// let replaced2 = replaced1.replaceAll('two', 2);
	// let replaced3 = replaced2.replaceAll('three', 3);
	// let replaced4 = replaced3.replaceAll('four', 4);
	// let replaced5 = replaced4.replaceAll('five', 5);
	// let replaced6 = replaced5.replaceAll('six', 6);
	// let replaced7 = replaced6.replaceAll('seven', 7);
	// let replaced8 = replaced7.replaceAll('eight', 8);
	// let replaced9 = replaced8.replaceAll('nine', 9);
	// return replaced9 - '';
	let replaced = s;
	for (let i = 0; i < numEng.length; i++) {
		replaced = replaced.replaceAll(numEng[i], i);
	}
	return Number(replaced);
};

console.log(solution('one4seveneight'));
console.log(solution('23four5six7'));
console.log(solution('2three45sixseven'));
console.log(solution('123'));
