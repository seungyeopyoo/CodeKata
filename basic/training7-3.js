// 등차수열의 특정한 항만 더하기
// 두 정수 a, d와 길이가 n인 boolean 배열 included가 주어집니다.
// 첫째항이 a, 공차가 d인 등차수열에서 included[i]가 i + 1항을 의미할 때,
// 이 등차수열의 1항부터 n항까지 included가 true인 항들만 더한 값을
//  return 하는 solution 함수를 작성해 주세요.

// 1 ≤ a ≤ 100
// 1 ≤ d ≤ 100
// 1 ≤ included의 길이 ≤ 100
// included에는 true가 적어도 하나 존재합니다.

// a	d	included	result
// 3	,4	,[true, false, false, true, true]	37
// 7	,1	,[false, false, false, true, false, false, false]	1

// 예제 1번은 a와 d가 각각 3, 4이고 included의 길이가 5입니다.
// 1항	2항	3항	4항	5항
// 등차수열	3	7	11	15	19
// included	true	false	false	true	true
// 따라서 true에 해당하는 1항, 4항, 5항을 더한 3 + 15 + 19 = 37을 return 합니다.

// 예제 2번은 a와 d가 각각 7, 1이고 included의 길이가 7입니다.
// 1항	2항	3항	4항	5항	6항	7항
// 등차수열	7	8	9	10	11	12	13
// included	false	false	false	true	false	false	false
// 따라서 4항만 true이므로 10을 return 합니다.

// step 1. i 부터 included.length 만큼 증가하는 for문 만든다.
// step 2. 그중 d 만큼 증가하는 애들을 선언한다.
// step 3. included가 true인 인덱스의 step2를 구한다.
// step 4. 더해서 return

const solution = function (a, d, included) {
	let result = 0;

	for (let i = 0; i < included.length; i++) {
		let arithmetic = a + i * d;
		if (included[i]) {
			result += arithmetic;
		}
	}

	return result;
};

console.log(solution(3, 4, [true, false, false, true, true]));
console.log(solution(7, 1, [false, false, false, true, false, false, false]));
