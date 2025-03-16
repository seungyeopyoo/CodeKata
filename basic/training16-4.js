// 카운트 다운
// 정수 start_num와 end_num가 주어질 때, start_num에서 end_num까지
// 1씩 감소하는 수들을 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 0 ≤ end_num ≤ start_num ≤ 50
// 입출력 예
// start_num	end_num	    result
// 10	     ,       3	    [10, 9, 8, 7, 6, 5, 4, 3]

// 10부터 3까지 1씩 감소하는 수를 담은 리스트는 [10, 9, 8, 7, 6, 5, 4, 3]입니다.

// step 1. 빈배열 만든다.
// step 2. for문을 i-- 로 start_num end_num까지 1에 push한다. return한다.

const solution = function (start_num, end_num) {
	let arr = [];
	for (let i = start_num; i >= end_num; i--) {
		arr.push(i);
	}
	return arr;
};

console.log(solution(10, 3));
