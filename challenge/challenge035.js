// 삼총사
// 한국중학교에 다니는 학생들은 각자 정수 번호를 갖고 있습니다.
// 이 학교 학생 3명의 정수 번호를 더했을 때 0이 되면 3명의 학생은 삼총사라고 합니다.
// 예를 들어, 5명의 학생이 있고, 각각의 정수 번호가 순서대로 -2, 3, 0, 2, -5일 때,
// 첫 번째, 세 번째, 네 번째 학생의 정수 번호를 더하면 0이므로 세 학생은 삼총사입니다.
// 또한, 두 번째, 네 번째, 다섯 번째 학생의 정수 번호를 더해도 0이므로 세 학생도 삼총사입니다.
// 따라서 이 경우 한국중학교에서는 두 가지 방법으로 삼총사를 만들 수 있습니다.

// 한국중학교 학생들의 번호를 나타내는 정수 배열 number가 매개변수로 주어질 때,
// 학생들 중 삼총사를 만들 수 있는 방법의 수를 return 하도록 solution 함수를 완성하세요.

// 3 ≤ number의 길이 ≤ 13
// -1,000 ≤ number의 각 원소 ≤ 1,000
// 서로 다른 학생의 정수 번호가 같을 수 있습니다.

// number	                        result
// [-2, 3, 0, 2, -5]	            2
// [-3, -2, -1, 0, 1, 2, 3]	        5
// [-1, 1, -1, 1]	                0

// 문제 예시와 같습니다.
// 학생들의 정수 번호 쌍 (-3, 0, 3), (-2, 0, 2), (-1, 0, 1), (-2, -1, 3), (-3, 1, 2) 이 삼총사가 될 수 있으므로, 5를 return 합니다.
// 삼총사가 될 수 있는 방법이 없습니다.

// step 1. for 문중첩해서 사용 인덱스 끼리 if 합이 0일때만 count++ 해서 count return

const solution = function (number) {
	let count = 0;

	for (let i = 0; i < number.length - 2; i++) {
		for (let j = i + 1; j < number.length - 1; j++) {
			for (let k = j + 1; k < number.length; k++) {
				if (number[i] + number[j] + number[k] === 0) {
					count++;
				}
			}
		}
	}
	return count;
};

console.log(solution([-2, 3, 0, 2, -5]));
console.log(solution([-3, -2, -1, 0, 1, 2, 3]));
console.log(solution([-1, 1, -1, 1]));
