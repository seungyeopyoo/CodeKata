// 두 개 뽑아서 더하기
// 정수 배열 numbers가 주어집니다.
// numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를
// 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

// numbers의 길이는 2 이상 100 이하입니다.
// numbers의 모든 수는 0 이상 100 이하입니다.
// numbers	            result
// [2,1,3,4,1]	        [2,3,4,5,6,7]
// [5,0,2,7]	        [2,5,7,9,12]

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

// step 1. 빈배열 만든다.
// step 2. numbers 순회하면서 2중 for문 i + j 전부다 1빈배열에 push한다.
// step 3. 가공된 1에서 중복제거 하고 오름차순 정렬하고 return

const solution = function (numbers) {
	const result = [];
	for (let i = 0; i < numbers.length - 1; i++) {
		for (let j = i + 1; j < numbers.length; j++) {
			result.push(numbers[i] + numbers[j]);
		}
	}
	const uniqueSorted = [...new Set(result)].sort((a, b) => a - b);
	return uniqueSorted;
};

console.log(solution([2, 1, 3, 4, 1]));
console.log(solution([5, 0, 2, 7]));
