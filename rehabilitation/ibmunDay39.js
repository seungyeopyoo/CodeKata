// 다음에 올 숫자
// 등차수열 혹은 등비수열 common이 매개변수로 주어질 때,
// 마지막 원소 다음으로 올 숫자를 return 하도록 solution 함수를 완성해보세요.

// 2 < common의 길이 < 1,000
// -1,000 < common의 원소 < 2,000
// common의 원소는 모두 정수입니다.
// 등차수열 혹은 등비수열이 아닌 경우는 없습니다.
// 등비수열인 경우 공비는 0이 아닌 정수입니다.
// common	result
// [1, 2, 3, 4]	5
// [2, 4, 8]	16

// [1, 2, 3, 4]는 공차가 1인 등차수열이므로 다음에 올 수는 5이다.
// [2, 4, 8]은 공비가 2인 등비수열이므로 다음에 올 수는 16이다.

// step 1. common의 최종 인덱스 , 최종 인덱스-1를 꺼낸다.
// step 2. if 두 수가 +1 차이면 마지막 인덱스 +1을 return
// step 3. if 두 수가 x2 차이면 마지막 인덱스 x2를 return

const solution = function (common) {
	let last = common[common.length - 1];
	let secondLast = common[common.length - 2];
	let thirdLast = common[common.length - 3];

	if (secondLast - thirdLast === last - secondLast) {
		let minus = last - secondLast;
		return last + minus;
	} else {
		let multiply = secondLast / thirdLast;
		return last * multiply;
	}
};

console.log(solution([1, 2, 3, 4]));
console.log(solution([2, 4, 8]));
