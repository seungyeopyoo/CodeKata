// 제일 작은 수 제거하기

// 정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요.
// 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요.
// 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.

// 제한 조건
// arr은 길이 1 이상인 배열입니다.
// 인덱스 i, j에 대해 i ≠ j이면 arr[i] ≠ arr[j] 입니다.

// arr	            return
// [4,3,2,1]	    [4,3,2]
// [10]	            [-1]

// step 1. arr 을 정렬한다. 내림차순
// step 2. slice한다 0, length-1
// step 2. return 하는데 만약 arr. length가 0 이면 [-1]이고 아니면 arr return

// const solution = function (arr) {
// 	const sortedArr = arr.sort((a, b) => b - a).slice(0, arr.length - 1);
// 	return sortedArr.length === 0 ? [-1] : sortedArr;
// };

// console.log(solution([4, 3, 2, 1]));
// console.log(solution([1, 2, 3, 8, 5]));
// console.log(solution([10]));

// step 1. 원본배열을 유지해야함 arr에서 가장 작은 애를 찾는다. ...arr 해서 sort 내림차순 pop으로 가장 작은 놈 추출
// step 2. 기존 arr에서 step1만 제거 한뒤에 return length !==0 ? arr : [-1]
// Math.min 으로 추출하는 방법도 있었네

const solution = function (arr) {
	const findMinimal = [...arr].sort((a, b) => b - a).pop();
	const removeMinimal = arr.filter((el) => el !== findMinimal);
	return removeMinimal.length !== 0 ? removeMinimal : [-1];
};

console.log(solution([4, 3, 2, 1]));
console.log(solution([1, 2, 3, 8, 5]));
console.log(solution([10]));
