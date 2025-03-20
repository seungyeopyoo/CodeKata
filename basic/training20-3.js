// 1로 만들기
// 정수가 있을 때, 짝수라면 반으로 나누고, 홀수라면 1을 뺀 뒤 반으로 나누면, 마지막엔 1이 됩니다.
// 예를 들어 10이 있다면 다음과 같은 과정으로 1이 됩니다.

// 10 / 2 = 5
// (5 - 1) / 2 = 2
// 2 / 2 = 1
// 위와 같이 3번의 나누기 연산으로 1이 되었습니다.
// 정수들이 담긴 리스트 num_list가 주어질 때,
// num_list의 모든 원소를 1로 만들기 위해서 필요한 나누기 연산의 횟수를 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 3 ≤ num_list의 길이 ≤ 15
// 1 ≤ num_list의 원소 ≤ 30
// 입출력 예
// num_list	            result
// [12, 4, 15, 1, 14]	11

// 12는 3번, 4는 2번, 15는 3번, 1은 0번, 14는 3번의 연산이 필요하기 때문에 총 11번의 연산이 필요합니다.

// step 1. for문 + while문 써서 for문으로 num_list 변환 마다 카운트++
// step 2. every 메소드 사용 모든 원소가 1일때 break
// step 3. count return

// const solution = function (num_list) {
// 	let count = 0;
// 	let currentArr = [...num_list];

// 	while (!currentArr.every((v) => v === 1)) {
// 		let nextArr = [];

// 		for (let i = 0; i < currentArr.length; i++) {
// 			if (currentArr[i] % 2 === 0) {
// 				nextArr.push(currentArr[i] / 2);
// 			} else {
// 				nextArr.push((currentArr[i] - 1) / 2);
// 			}
// 			count++;
// 		}

// 		currentArr = nextArr;
// 	}

// 	return count;
// };
// 무한루프 들어간듯..?
const solution = function (num_list) {
	let count = 0;

	for (let i = 0; i < num_list.length; i++) {
		let num = num_list[i];

		while (num > 1) {
			// num이 1이 될 때까지 반복
			if (num % 2 === 0) {
				num /= 2;
			} else {
				num = (num - 1) / 2;
			}
			count++;
		}
	}

	return count;
};

console.log(solution([12, 4, 15, 1, 14]));
