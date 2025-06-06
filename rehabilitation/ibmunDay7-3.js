// 아이스 아메리카노

// 머쓱이는 추운 날에도 아이스 아메리카노만 마십니다. 아이스 아메리카노는 한잔에 5,500원입니다.
// 머쓱이가 가지고 있는 돈 money가 매개변수로 주어질 때,
// 머쓱이가 최대로 마실 수 있는 아메리카노의 잔 수와 남는 돈을 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 0 < money ≤ 1,000,000
// 입출력 예
// money	result
// 5,500	[1, 0]
// 15,000	[2, 4000]
// 입출력 예 설명
// 입출력 예 #1

// 5,500원은 아이스 아메리카노 한 잔을 살 수 있고 잔돈은 0원입니다.
// 입출력 예 #2

// 15,000원은 아이스 아메리카노 두 잔을 살 수 있고 잔돈은 4,000원입니다

// step 1. 가진돈이 얼마인지 화긴한다.
// step 2. 가진돈 하고 아메리카노 가격하고 나눈다.
// step 3. 몫을 반환한다.
// step 4. 가진돈 - 몫 * 5500 해서 남은돈도 뱉어낸다.

const solution = function (money) {
	let americano = parseInt(money / 5500);

	let charge = money - americano * 5500;

	return [americano, charge];
};

console.log(solution(5500));
console.log(solution(15000));
