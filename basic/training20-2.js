// 조건에 맞게 수열 변환하기 2
// 정수 배열 arr가 주어집니다. arr의 각 원소에 대해 값이 50보다 크거나 같은 짝수라면 2로 나누고,
// 50보다 작은 홀수라면 2를 곱하고 다시 1을 더합니다.

// 이러한 작업을 x번 반복한 결과인 배열을 arr(x)라고 표현했을 때, arr(x) = arr(x + 1)인 x가 항상 존재합니다.
// 이러한 x 중 가장 작은 값을 return 하는 solution 함수를 완성해 주세요.
// 단, 두 배열에 대한 "="는 두 배열의 크기가 서로 같으며, 같은 인덱스의 원소가 각각 서로 같음을 의미합니다.

// 제한사항
// 1 ≤ arr의 길이 ≤ 1,000,000
// 1 ≤ arr의 원소의 값 ≤ 100
// 입출력 예
// arr	                    result
// [1, 2, 3, 100, 99, 98]	5

// 위 작업을 반복하면 다음과 같이 arr가 변합니다.
// 반복 횟수	            arr
// 0	            [1, 2, 3, 100, 99, 98]
// 1	            [3, 2, 7, 50, 99, 49]
// 2	            [7, 2, 15, 25, 99, 99]
// 3	            [15, 2, 31, 51, 99, 99]
// 4	            [31, 2, 63, 51, 99, 99]
// 5	            [63, 2, 63, 51, 99, 99]
// 6	            [63, 2, 63, 51, 99, 99]
// 이후로 arr가 변하지 않으며, arr(5) = arr(6)이므로 5를 return 합니다.

// step 1. 변환하는 과정을 저장하고 while문에 넣어서 count를 증가
// step 2. every 메소드 사용하여 모두 같을때 while 문 break

const solution = function (arr) {
	let count = 0;
	let prevArr = [];
	let currentArr = [...arr];

	while (true) {
		prevArr = [...currentArr]; // 이전상태를 남기면서 변화를 추적해야하기때문에 스프레드연산자 사용
		let nextArr = [];

		for (let i = 0; i < currentArr.length; i++) {
			if (currentArr[i] >= 50 && currentArr[i] % 2 === 0) {
				nextArr.push(currentArr[i] / 2);
			} else if (currentArr[i] < 50 && currentArr[i] % 2 === 1) {
				nextArr.push(currentArr[i] * 2 + 1);
			} else {
				nextArr.push(currentArr[i]);
			}
		}

		if (prevArr.every((v, idx) => v === nextArr[idx])) {
			break;
		}

		currentArr = nextArr; //if문이 성립할때까지 for문을 돌려야해서 currentArr을 nextArr로 선언
		count++;
	}

	return count;
};

console.log(solution([1, 2, 3, 100, 99, 98]));
