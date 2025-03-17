// 2의 영역
// 정수 배열 arr가 주어집니다.
// 배열 안의 2가 모두 포함된 가장 작은 연속된 부분 배열을 return 하는 solution 함수를 완성해 주세요.

// 단, arr에 2가 없는 경우 [-1]을 return 합니다.

// 제한사항
// 1 ≤ arr의 길이 ≤ 100,000
// 1 ≤ arr의 원소 ≤ 10
// 입출력 예
// arr	                                    result
// [1, 2, 1, 4, 5, 2, 9]	            [2, 1, 4, 5, 2]
// [1, 2, 1]	                               [2]
// [1, 1, 1]	                               [-1]
// [1, 2, 1, 2, 1, 10, 2, 1]	       [2, 1, 2, 1, 10, 2]

// 2가 있는 인덱스는 1번, 5번 인덱스뿐이므로 1번부터 5번 인덱스까지의 부분 배열인 [2, 1, 4, 5, 2]를 return 합니다.
// 2가 한 개뿐이므로 [2]를 return 합니다.
// 2가 배열에 없으므로 [-1]을 return 합니다
// 2가 있는 인덱스는 1번, 3번, 6번 인덱스이므로 1번부터 6번 인덱스까지의 부분 배열인 [2, 1, 2, 1, 10, 2]를 return 합니다.

// step 1. findIndex, findLastIndex 하여 s,e 값을 구한다 .
// step 2. if !s [-1] return
// step 3. if s && !e 면 [s] return
// step 4. s, e 둘다 있으면 slice
// 사이트에서 findLastIndex를 인식하지 못함 ;

// const solution = function (arr) {
// 	let s = arr.findIndex((num) => num === 2);
// 	let e = arr.findLastIndex((num) => num === 2);

// 	if (s === -1) return [-1];
// 	if (s && !e) return [s];
// 	if (s && e) return arr.slice(s, e + 1);
// };

const solution = function (arr) {
	let s = arr.indexOf(2);
	let e = -1;

	for (let i = arr.length - 1; i >= 0; i--) {
		if (arr[i] === 2) {
			e = i;
			break;
		}
	}

	if (s === -1) return [-1];
	return arr.slice(s, e + 1);
};

console.log(solution([1, 2, 1, 4, 5, 2, 9]));
console.log(solution([1, 2, 1]));
console.log(solution([1, 1, 1]));
console.log(solution([1, 2, 1, 2, 1, 10, 2, 1]));
