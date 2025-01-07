// 배열의 평균값
// 문제 설명
// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 0 ≤ numbers의 원소 ≤ 1,000
// 1 ≤ numbers의 길이 ≤ 100
// 정답의 소수 부분이 .0 또는 .5인 경우만 입력으로 주어집니다.
// 입출력 예
// numbers	result
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]	5.5
// [89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]	94.0
// 입출력 예 설명
// 입출력 예 #1

// numbers의 원소들의 평균 값은 5.5입니다.
// 입출력 예 #2

// numbers의 원소들의 평균 값은 94.0입니다.

// step 1. 배열을 전부 더해준다.
// step 1-1. 어떻게 더해줄거냐 -> for문을 사용해서 0번째 인덱스부터 numbers.length까지 그리고 얘들을 sumNum으로 저장 썸남아님
// step 2. 배열의 길이로 sumNam을 나누어준다.
// step 3. 나누어준 값을 return 한다.

const solution = function (numbers) {
	let sumNum = 0;

	for (let i = 0; i < numbers.length; i++) {
		sumNum += numbers[i];
	}

	let average = sumNum / numbers.length;

	return average;
};

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(solution([89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]));
