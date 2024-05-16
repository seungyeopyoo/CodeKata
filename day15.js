// 나머지가 1이 되는 수 찾기
// 문제 설명
// 자연수 n이 매개변수로 주어집니다. n을 x로 나눈 나머지가 1이 되도록 하는 
// 가장 작은 자연수 x를 return 하도록 solution 함수를 완성해주세요. 답이 항상 존재함은 증명될 수 있습니다.

// 제한사항
// 3 ≤ n ≤ 1,000,000
// 입출력 예
// n	result
// 10	3
// 12	11
// 입출력 예 설명
// 입출력 예 #1

// 10을 3으로 나눈 나머지가 1이고, 3보다 작은 자연수 중에서 문제의 조건을 만족하는 수가 없으므로, 3을 return 해야 합니다.
// 입출력 예 #2

// 12를 11로 나눈 나머지가 1이고, 11보다 작은 자연수 중에서 문제의 조건을 만족하는 수가 없으므로, 11을 return 해야 합니다.

// n 의 제한 사항 설정
// n을 let x =0; x<=n x++ 로 나눈 값 중 나머지가 1인 애들만 추려서 나열 n%x === 1
// 그 중에 젤 작은애를 빼온다 <-  math.min을 써보려 했는데 그럴 필요가 없었다 . 그냥 break 때리면 젤 작은애가 걸림


let solution = function (n) {
    if (n >= 3 && n <= 1000000) {
        let answer = 0;
        for (let x = 1; x <= n; x++) {
            if (n % x === 1) {
                answer = x;
                break;
            }
        }
        return answer;
    }
}
console.log(solution(10));
console.log(solution(29));