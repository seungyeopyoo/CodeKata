// 약수의 합
// 문제 설명
// 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

// 제한 사항
// n은 0 이상 3000이하인 정수입니다.
// 입출력 예
// n	return
// 12	28
// 5	6
// 입출력 예 설명
// 입출력 예 #1
// 12의 약수는 1, 2, 3, 4, 6, 12입니다. 이를 모두 더하면 28입니다.

// 입출력 예 #2
// 5의 약수는 1, 5입니다. 이를 모두 더하면 6입니다.

// 제한 사항 설정 
// 약수 = 나누었을 때에 딱 떨어지는거 
// 딱 떨어진다 : 나머지가 0인거 
// 그 정수들의 합 

let solution = function (n) {
    if (n >= 0 && n <= 3000) {     //범위설정
        let answer = 0;
        for (let i = 1; i <= n; i++) { //1 부터 i 까지 나열하면서 나눠줘
            if (n % i === 0) {         // 그중에서 나머지가 0인 친구들만 
                answer += i;
            }
        }
        return answer;
    } else {
        return "범위내의 정수를 입력해 주세요";
    }
}

console.log(solution(8));
console.log(solution(12));