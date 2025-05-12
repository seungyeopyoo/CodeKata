// 할인 행사
// XYZ 마트는 일정한 금액을 지불하면 10일 동안 회원 자격을 부여합니다. XYZ 마트에서는 회원을 대상으로 매일 한 가지 제품을 할인하는 행사를 합니다.
//  할인하는 제품은 하루에 하나씩만 구매할 수 있습니다. 알뜰한 정현이는 자신이 원하는 제품과 수량이 할인하는 날짜와 10일 연속으로 일치할 경우에 맞춰서 회원가입을 하려 합니다.

// 예를 들어, 정현이가 원하는 제품이 바나나 3개, 사과 2개, 쌀 2개, 돼지고기 2개, 냄비 1개이며, XYZ 마트에서 14일간 회원을 대상으로 할인하는 제품이 날짜 순서대로
// 치킨, 사과, 사과, 바나나, 쌀, 사과, 돼지고기, 바나나, 돼지고기, 쌀, 냄비, 바나나, 사과, 바나나인 경우에 대해 알아봅시다.
// 첫째 날부터 열흘 간에는 냄비가 할인하지 않기 때문에 첫째 날에는 회원가입을 하지 않습니다.
// 둘째 날부터 열흘 간에는 바나나를 원하는 만큼 할인구매할 수 없기 때문에 둘째 날에도 회원가입을 하지 않습니다.
// 셋째 날, 넷째 날, 다섯째 날부터 각각 열흘은 원하는 제품과 수량이 일치하기 때문에 셋 중 하루에 회원가입을 하려 합니다.

// 정현이가 원하는 제품을 나타내는 문자열 배열 want와 정현이가 원하는 제품의 수량을 나타내는 정수 배열 number, XYZ 마트에서 할인하는 제품을 나타내는 문자열 배열 discount가 주어졌을 때,
// 회원등록시 정현이가 원하는 제품을 모두 할인 받을 수 있는 회원등록 날짜의 총 일수를 return 하는 solution 함수를 완성하시오. 가능한 날이 없으면 0을 return 합니다.

// 제한사항
// 1 ≤ want의 길이 = number의 길이 ≤ 10
// 1 ≤ number의 원소 ≤ 10
// number[i]는 want[i]의 수량을 의미하며, number의 원소의 합은 10입니다.
// 10 ≤ discount의 길이 ≤ 100,000
// want와 discount의 원소들은 알파벳 소문자로 이루어진 문자열입니다.
// 1 ≤ want의 원소의 길이, discount의 원소의 길이 ≤ 12
// 입출력 예
// want	                                        number	                                discount	                                                                                            result
// ["banana", "apple", "rice", "pork", "pot"]	,[3, 2, 2, 2, 1]	,["chicken", "apple", "apple", "banana", "rice", "apple", "pork", "banana", "pork", "rice", "pot", "banana", "apple", "banana"]	3
// ["apple"]	            ,                    [10]	     ,   ["banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana"]	                        0
// 입출력 예 설명
// 입출력 예 #1

// 문제 예시와 같습니다.
// 입출력 예 #2
// 사과가 할인하는 날이 없으므로 0을 return 합니다.

// step 1. want랑 number를 순회하면서 number의 각 인덱스의 숫자만큼 want를 가공한다.
// step 2. discount에 step1이 모두 존재하는지 확인한다. 만약 없으면 0 을 return 함
// step 3. 존재한다면 하나씩 자르면서 count++ 다 순회하고 나면 count return
// 통과하긴했는데 대부분 슬라이딩 윈도우 방식을 채용 효율면에서 좀 더 나은듯

const solution = function (want, number, discount) {
	const wantList = [];
	for (let i = 0; i < want.length; i++) {
		for (let j = 0; j < number[i]; j++) {
			wantList.push(want[i]);
		}
	}
	wantList.sort();

	let count = 0;

	for (let i = 0; i < discount.length; i++) {
		const sliced = discount.slice(i, i + 10);
		if (sliced.length < 10) break;

		const isMatch = wantList.every(
			(item, idx) => item === sliced.sort()[idx] //sliced.sort()가매번 다시 정렬되어서 idx도 같이 비교해주어야 함 ㅠ
		);

		if (isMatch) count++;
	}

	return count;
};

const solution1 = function (want, number, discount) {
	// want 배열과 number 배열을 하나의 객체로 매핑
	const wantMap = {};
	for (let i = 0; i < want.length; i++) {
		wantMap[want[i]] = number[i];
	}
	let answer = 0;

	// 슬라이딩 윈도우: i ~ i + 9 구간
	for (let i = 0; i <= discount.length - 10; i++) {
		const slice = discount.slice(i, i + 10);
		const discountMap = {};

		// 현재 구간 할인 품목 카운팅
		for (let item of slice) {
			discountMap[item] = (discountMap[item] || 0) + 1;
		}
		// wantMap과 discountMap 비교
		let isMatch = true;
		for (let item in wantMap) {
			if (discountMap[item] !== wantMap[item]) {
				isMatch = false;
				break;
			}
		}
		if (isMatch) answer++;
	}

	return answer;
};

console.log(
	solution(
		['banana', 'apple', 'rice', 'pork', 'pot'],
		[3, 2, 2, 2, 1],
		[
			'chicken',
			'apple',
			'apple',
			'banana',
			'rice',
			'apple',
			'pork',
			'banana',
			'pork',
			'rice',
			'pot',
			'banana',
			'apple',
			'banana',
		]
	)
);
// console.log(
// 	solution(
// 		['apple'],
// 		[10],
// 		[
// 			'banana',
// 			'banana',
// 			'banana',
// 			'banana',
// 			'banana',
// 			'banana',
// 			'banana',
// 			'banana',
// 			'banana',
// 			'banana',
// 		]
// 	)
// );
