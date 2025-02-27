// 두 개 뽑아서 더하기

// 정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

// numbers의 길이는 2 이상 100 이하입니다.
// numbers의 모든 수는 0 이상 100 이하입니다.

// numbers	     result
// [2,1,3,4,1]	[2,3,4,5,6,7]
// [5,0,2,7]	[2,5,7,9,12]

// 2 = 1 + 1 입니다. (1이 numbers에 두 개 있습니다.)
// 3 = 2 + 1 입니다.
// 4 = 1 + 3 입니다.
// 5 = 1 + 4 = 2 + 3 입니다.
// 6 = 2 + 4 입니다.
// 7 = 3 + 4 입니다.
// 따라서 [2,3,4,5,6,7] 을 return 해야 합니다.

// 2 = 0 + 2 입니다.
// 5 = 5 + 0 입니다.
// 7 = 0 + 7 = 5 + 2 입니다.
// 9 = 2 + 7 입니다.
// 12 = 5 + 7 입니다.
// 따라서 [2,5,7,9,12] 를 return 해야 합니다.

let solution = function (numbers) {
	// 결과를 저장할 집합을 생성합니다. 집합을 사용하면 중복이 제거됩니다.
	const resultSet = new Set();

	// numbers 배열에서 서로 다른 두 수를 뽑아 더하는 모든 경우의 수를 계산합니다.
	for (let i = 0; i < numbers.length; i++) {
		for (let j = i + 1; j < numbers.length; j++) {
			// 두 수의 합을 집합에 추가합니다.
			resultSet.add(numbers[i] + numbers[j]);
		}
	}

	// 집합을 배열로 변환한 후 오름차순으로 정렬하여 반환합니다.
	return Array.from(resultSet).sort((a, b) => a - b);
};

// 테스트 예제
console.log(solution([2, 1, 3, 4, 1])); // [2, 3, 4, 5, 6, 7]
console.log(solution([5, 0, 2, 7])); // [2, 5, 7, 9, 12]
