// 두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
// 예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

// 제한 조건
// a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.
// a와 b는 -10,000,000 이상 10,000,000 이하인 정수입니다.
// a와 b의 대소관계는 정해져있지 않습니다.
// 입출력 예
// a	b	return
// 3	5	12
// 3	3	3
//  5	3	12

// 둘중 더 작은거 찾아서 for문 작은거부터 큰거까지 -> 다 더함 

let solution = function (a, b) {  // 작은 값과 큰 값을 결정합니다.
    let smallInt = Math.min(a, b);
    let bigInt = Math.max(a, b);

    let Sum = 0;

    for (let i = smallInt; i <= bigInt; i++) { // smallInt bigInt 모든 정수를 합산합니다.
        Sum += i;
    }

    return Sum;
}
console.log(solution(3, 8));  // 33
console.log(solution(3, 3));  // 3
console.log(solution(8, 3));  // 33