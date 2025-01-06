// 최빈값 구하기
// 문제 설명
// 최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다. 정수 배열 array가 매개변수로 주어질 때, 최빈값을 return 하도록 solution 함수를 완성해보세요.
// 최빈값이 여러 개면 -1을 return 합니다.

// 제한사항
// 0 < array의 길이 < 100
// 0 ≤ array의 원소 < 1000
// 입출력 예
// array	result
// [1, 2, 3, 3, 3, 4]	3
// [1, 1, 2, 2]	-1
// [1]	1
// 입출력 예 설명
// 입출력 예 #1

// [1, 2, 3, 3, 3, 4]에서 1은 1개 2는 1개 3은 3개 4는 1개로 최빈값은 3입니다.
// 입출력 예 #2

// [1, 1, 2, 2]에서 1은 2개 2는 2개로 최빈값이 1, 2입니다. 최빈값이 여러 개이므로 -1을 return 합니다.
// 입출력 예 #3

// [1]에는 1만 있으므로 최빈값은 1입니다.
// 최빈값 구하기
function solution(array) {
	// 빈도수를 저장할 객체 생성
	const frequency = {};

	// 배열 순회하며 빈도 계산
	for (let num of array) {
		if (frequency[num]) {
			frequency[num]++;
		} else {
			frequency[num] = 1;
		}
	}

	// 최빈값과 최대 빈도수 변수 초기화
	let maxFreq = 0;
	let mode = -1;
	let isMultiple = false;

	// 빈도 객체를 순회하며 최빈값 탐색
	for (let key in frequency) {
		const count = frequency[key];
		if (count > maxFreq) {
			maxFreq = count;
			mode = Number(key);
			isMultiple = false;
		} else if (count === maxFreq) {
			isMultiple = true;
		}
	}

	// 최빈값이 여러 개인 경우 -1 반환
	return isMultiple ? -1 : mode;
}

// 테스트
console.log(solution([1, 2, 3, 3, 3, 4])); // 3
console.log(solution([1, 1, 2, 2])); // -1
console.log(solution([1])); // 1
