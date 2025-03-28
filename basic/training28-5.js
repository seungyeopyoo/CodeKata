// 날짜 비교하기
// 정수 배열 date1과 date2가 주어집니다.
// 두 배열은 각각 날짜를 나타내며 [year, month, day] 꼴로 주어집니다.
// 각 배열에서 year는 연도를, month는 월을, day는 날짜를 나타냅니다.

// 만약 date1이 date2보다 앞서는 날짜라면 1을, 아니면 0을 return 하는 solution 함수를 완성해 주세요.

// date1의 길이 = date2의 길이 = 3
// 0 ≤ year ≤ 10,000
// 1 ≤ month ≤ 12
// day는 month에 따라 가능한 날짜로 주어집니다.

// date1	            date2	    result
// [2021, 12, 28]	,[2021, 12, 29]	1
// [1024, 10, 24]	,[1024, 10, 24]	0

// date1이 date2보다 하루 앞서기 때문에 1을 return 합니다.
// date1과 date2는 날짜가 서로 같으므로 date1이 더 앞서는 날짜가 아닙니다. 따라서 0을 return 합니다.

// step 1. join 해서 date 1이 더 작으면 ? 1 : 0  xx
// year 끼리 비교 month 끼리 비교 day 끼리 비교 해야될듯

const solution = function (date1, date2) {
	const [year, month, day] = date1;
	const [year2, month2, day2] = date2;

	if (year < year2) return 1;
	if (year === year2 && month < month2) return 1;
	if (year === year2 && month === month2 && day < day2) return 1;
	return 0;
};

console.log(solution([2021, 12, 28], [2021, 12, 29]));
console.log(solution([1024, 10, 24], [1024, 10, 24]));
