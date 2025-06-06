// 공 던지기
// 머쓱이는 친구들과 동그랗게 서서 공 던지기 게임을 하고 있습니다.
// 공은 1번부터 던지며 오른쪽으로 한 명을 건너뛰고 그다음 사람에게만 던질 수 있습니다.
// 친구들의 번호가 들어있는 정수 배열 numbers와 정수 K가 주어질 때,
// k번째로 공을 던지는 사람의 번호는 무엇인지 return 하도록 solution 함수를 완성해보세요.

// 2 < numbers의 길이 < 100
// 0 < k < 1,000
// numbers의 첫 번째와 마지막 번호는 실제로 바로 옆에 있습니다.
// numbers는 1부터 시작하며 번호는 순서대로 올라갑니다.

// numbers	             k	         result
// [1, 2, 3, 4]	         2	           3
// [1, 2, 3, 4, 5, 6]	 5	           3
// [1, 2, 3]	         3	           2

// step 1. numbers를 쭉 나열하고
// step 2. 2(k-1) 만큼 가서 걔가 몇인지 한바퀴 돌면 어떻게 해야하지
// step 3. % numbers.length 로 나누어주면 순환이 가능하다

const solution = function (numbers, k) {
	const index = (2 * (k - 1)) % numbers.length;

	return numbers[index];
};

console.log(solution([1, 2, 3, 4], 2));
console.log(solution([1, 2, 3, 4, 5, 6], 5));
console.log(solution([1, 2, 3], 3));
