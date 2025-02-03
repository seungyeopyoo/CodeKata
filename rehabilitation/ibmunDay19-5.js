// 영어가 싫어요
// 영어가 싫은 머쓱이는 영어로 표기되어있는 숫자를 수로 바꾸려고 합니다.
// 문자열 numbers가 매개변수로 주어질 때,
// numbers를 정수로 바꿔 return 하도록 solution 함수를 완성해 주세요.

// numbers는 소문자로만 구성되어 있습니다.
// numbers는 "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"
// 들이 공백 없이 조합되어 있습니다.
// 1 ≤ numbers의 길이 ≤ 50
// "zero"는 numbers의 맨 앞에 올 수 없습니다.
// numbers	result
// "onetwothreefourfivesixseveneightnine"	123456789
// "onefourzerosixseven"	14067

// "onetwothreefourfivesixseveneightnine"를 숫자로 바꾼 123456789를 return합니다.
// "onefourzerosixseven"를 숫자로 바꾼 14067를 return합니다.

// step 1. zero : 0 , one : 1 ~ 이런 방식으로 쭉 저장한다.
// step 2. replace 메소드사용 하여 해당하는 문자를 숫자로 변환해준다.
// step 3. '123456789' 와 같은 문자열 결과를 Number로 숫자로 바꿔서 return

const solution = function (numbers) {
	const changedStr = {
		zero: '0',
		one: '1',
		two: '2',
		three: '3',
		four: '4',
		five: '5',
		six: '6',
		seven: '7',
		eight: '8',
		nine: '9',
	};

	return Number(
		numbers.replace(
			/zero|one|two|three|four|five|six|seven|eight|nine/g,
			(match) => changedStr[match]
		)
	);
};

console.log(solution('onetwothreefourfivesixseveneightnine'));
console.log(solution('onefourzerosixseven'));
