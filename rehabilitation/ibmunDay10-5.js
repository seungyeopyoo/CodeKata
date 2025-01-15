// 배열 자르기

// 정수 배열 numbers와 정수 num1, num2가 매개변수로 주어질 때,
// numbers의 num1번 째 인덱스부터 num2번째 인덱스까지 자른 정수 배열을 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 2 ≤ numbers의 길이 ≤ 30
// 0 ≤ numbers의 원소 ≤ 1,000
// 0 ≤num1 < num2 < numbers의 길이

// numbers	       num1	  num2	  result
// [1, 2, 3, 4, 5]	1	  3	      [2, 3, 4]
// [1, 3, 5]	    1	  2	      [3, 5]

// [1, 2, 3, 4, 5]의 1번째 인덱스 2부터 3번째 인덱스 4 까지 자른 [2, 3, 4]를 return 합니다.
// [1, 3, 5]의 1번째 인덱스 3부터 2번째 인덱스 5까지 자른 [3, 5]를 return 합니다.

// step 1. 빈배열을 만든다.
// step 2. for 문으로 num1 스타트 num2까지 i++
// step 3. 각 인덱스를 빈배열에 push
// step 4. 해당 배열을 return

// const solution = function (numbers, num1, num2) {
// 	let arr = [];
// 	for (let i = num1; i <= num2; i++) {
// 		arr.push(numbers[i]);
// 	}
// 	return arr;
// };

const solution = (numbers, num1, num2) => numbers.slice(num1, num2 + 1);

console.log(solution([1, 2, 3, 4, 5], 1, 3));
console.log(solution([1, 3, 5], 1, 2));
