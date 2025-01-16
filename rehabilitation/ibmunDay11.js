// 진료 순서 정하기
// 외과의사 머쓱이는 응급실에 온 환자의 응급도를 기준으로 진료 순서를 정하려고 합니다.
// 정수 배열 emergency가 매개변수로 주어질 때 응급도가 높은 순서대로
// 진료 순서를 정한 배열을 return하도록 solution 함수를 완성해주세요.

// 중복된 원소는 없습니다.
// 1 ≤ emergency의 길이 ≤ 10
// 1 ≤ emergency의 원소 ≤ 100

// emergency	               result
// [3, 76, 24]	              [3, 1, 2]
// [1, 2, 3, 4, 5, 6, 7]	  [7, 6, 5, 4, 3, 2, 1]
// [30, 10, 23, 6, 100]    	  [2, 4, 3, 5, 1]

// emergency가 [3, 76, 24]이므로 응급도의 크기 순서대로 번호를 매긴 [3, 1, 2]를 return합니다.
// emergency가 [1, 2, 3, 4, 5, 6, 7]이므로 응급도의 크기 순서대로 번호를 매긴 [7, 6, 5, 4, 3, 2, 1]를 return합니다.
// emergency가 [30, 10, 23, 6, 100]이므로 응급도의 크기 순서대로 번호를 매긴 [2, 4, 3, 5, 1]를 return합니다.

// step 1. 주어지는 배열을 우선 정렬한다.
// step 1-1. 높을 수록 우선순위에 있어야하기 때문에 내림차순  으로 정렬
// step 2. map을 사용해서 배열을 가공하여 return한다.
// step 2-2. 인덱스는 0번째부터치면 응급도의 크기는 1부터라 +1

const solution = function (emergency) {
	const sortedEmergency = [...emergency].sort((a, b) => b - a);

	return emergency.map((value) => sortedEmergency.indexOf(value) + 1);
};
console.log(solution([3, 76, 24]));
console.log(solution([1, 2, 3, 4, 5, 6, 7]));
console.log(solution([30, 10, 23, 6, 100]));
