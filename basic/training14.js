// 배열 만들기 5
// 문자열 배열 intStrs와 정수 k, s, l가 주어집니다. intStrs의 원소는 숫자로 이루어져 있습니다.
// 배열 intStrs의 각 원소마다 s번 인덱스에서 시작하는 길이 l짜리 부분 문자열을 잘라내 정수로 변환합니다.
// 이때 변환한 정수값이 k보다 큰 값들을 담은 배열을 return 하는 solution 함수를 완성해 주세요.

// 0 ≤ s < 100
// 1 ≤ l ≤ 8
// 10l - 1 ≤ k < 10l
// 1 ≤ intStrs의 길이 ≤ 10,000
// s + l ≤ intStrs의 원소의 길이 ≤ 120
// intStrs	k	s	l	result

// ["0123456789","9876543210","9999999999999"]	,50000	,5	,5	[56789, 99999]
// idx에 따라 잘라낸 문자열과 그에 따른 ret의 변화를 표시하면 다음 표와 같습니다.
// idx	잘라낸 문자열	ret
// 0	"56789"	[56789]
// 1	"43210"	[56789]
// 2	"99999"	[56789, 99999]
// 따라서 [56789, 99999]를 return 합니다.

// step 1. ret 빈배열을 만든다.
// step 2. intStrs의 각 인덱스를 s,s+l slice 한다.
// step 3. 2를 k와 비교하여 더 크면 ret에 push한다.

const solution = function (intStrs, k, s, l) {
	let ret = [];
	for (let i = 0; i < intStrs.length; i++) {
		let slicedNum = Number(intStrs[i].slice(s, s + l));
		if (slicedNum > k) {
			ret.push(slicedNum);
		}
	}
	return ret;
};
console.log(
	solution(['0123456789', '9876543210', '9999999999999'], 50000, 5, 5)
);
