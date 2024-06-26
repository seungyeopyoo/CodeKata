// 숫자 비교하기
// 문제 설명
// 정수 num1과 num2가 매개변수로 주어집니다. 두 수가 같으면 1 다르면 -1을 retrun하도록 solution 함수를 완성해주세요.

// 제한사항
// 0 ≤ num1 ≤ 10,000
// 0 ≤ num2 ≤ 10,000
// 입출력 예
// num1	num2	result
// 2	3	-1
// 11	11	1
// 7	99	-1
// 입출력 예 설명
// 입출력 예 설명 #1

// num1이 2이고 num2가 3이므로 다릅니다. 따라서 -1을 return합니다.
// 입출력 예 설명 #2

// num1이 11이고 num2가 11이므로 같습니다. 따라서 1을 return합니다.
// 입출력 예 설명 #3

// num1이 7이고 num2가 99이므로 다릅니다. 따라서 -1을 return합니다.
//의사코드 작성 : if로 범위 지정해주고요
// 같으면 1, 다르면 -1 return if else 로 작성
// console.log로 출력

function solution(num1, num2) {
  if (num1 >= 0 && num1 <= 10000 && num2 >= 0 && num2 <= 10000) {
    if (num1 === num2) {
      return 1;
    } else {
      return -1;
    }
  }
}
//ex)
console.log(solution(20, 20));
