// 수와 홀수
// 문제 설명
// 정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.

// 제한 조건
// num은 int 범위의 정수입니다.
// 0은 짝수입니다.
// 입출력 예
// num	return
// 3	"Odd"
// 4	"Even"

// int 범위의 정수 : -21억 ~ +21억.. 
// 짝수 : 2로 나누었을때 나머지 0인거, 홀수는 나머지 1인거? or 짝수 말고 
// 


let solution = function (num) {
    if (num % 2 === 0) {             // 짝수면 Even
        return "Even";

    } else {                        //아니면 Odd
        return "Odd";
    }
}

console.log(solution(4));