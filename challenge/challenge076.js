// 체육복
// 점심시간에 도둑이 들어, 일부 학생이 체육복을 도난당했습니다. 다행히 여벌 체육복이 있는 학생이 이들에게 체육복을 빌려주려 합니다.
// 학생들의 번호는 체격 순으로 매겨져 있어, 바로 앞번호의 학생이나 바로 뒷번호의 학생에게만 체육복을 빌려줄 수 있습니다. 예를 들어, 4번 학생은 3번 학생이나 5번 학생에게만 체육복을 빌려줄 수 있습니다.
// 체육복이 없으면 수업을 들을 수 없기 때문에 체육복을 적절히 빌려 최대한 많은 학생이 체육수업을 들어야 합니다.

// 전체 학생의 수 n, 체육복을 도난당한 학생들의 번호가 담긴 배열 lost, 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가 매개변수로 주어질 때,
// 체육수업을 들을 수 있는 학생의 최댓값을 return 하도록 solution 함수를 작성해주세요.

// 전체 학생의 수는 2명 이상 30명 이하입니다.
// 체육복을 도난당한 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
// 여벌의 체육복을 가져온 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
// 여벌 체육복이 있는 학생만 다른 학생에게 체육복을 빌려줄 수 있습니다.
// 여벌 체육복을 가져온 학생이 체육복을 도난당했을 수 있습니다. 이때 이 학생은 체육복을 하나만 도난당했다고 가정하며, 남은 체육복이 하나이기에 다른 학생에게는 체육복을 빌려줄 수 없습니다.
// 입출력 예
// n	lost	    reserve	    return
// 5	,[2, 4]	 ,   [1, 3, 5]	5                12345 135
// 5	,[2, 4]	  ,  [3]	        4               12345 135
// 3	,[3]	   ,     [1]	        2

// 1번 학생이 2번 학생에게 체육복을 빌려주고, 3번 학생이나 5번 학생이 4번 학생에게 체육복을 빌려주면 학생 5명이 체육수업을 들을 수 있습니다.
// 3번 학생이 2번 학생이나 4번 학생에게 체육복을 빌려주면 학생 4명이 체육수업을 들을 수 있습니다.

// step 1. lost의 num 이 reserve의 범위 (+1 -1) 안에 있으면 lost의 해당인덱스와 reserve 해당 인덱스를 제거 i --
// step 2. n - lost.length return
// 문제에 정렬 되어있다는 말없었음 ㅎ + 체육복 도난 당했는데 여분있는 애들도 처리 해줘야함 ㅠ
// 정렬떄리고 도난당하고 여분있는 애들 먼저 ㅊ ㅓ리하고 -> 기존로직 그대로 ㅇㅇ

const solution = function (n, lost, reserve) {
	lost.sort((a, b) => a - b);
	reserve.sort((a, b) => a - b);

	const lostReserve = lost.filter((student) => reserve.includes(student));
	lost = lost.filter((student) => !lostReserve.includes(student));
	reserve = reserve.filter((student) => !lostReserve.includes(student));

	for (let i = 0; i < lost.length; i++) {
		const student = lost[i];

		const idx = reserve.findIndex(
			(el) => el === student - 1 || el === student + 1
		);

		if (idx !== -1) {
			reserve.splice(idx, 1);
			lost.splice(i, 1);
			i--;
		}
	}

	return n - lost.length;
};

console.log(solution(5, [2, 4], [1, 3, 5]));
console.log(solution(5, [2, 4], [3]));
console.log(solution(3, [3], [1]));
