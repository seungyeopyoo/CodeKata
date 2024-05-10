// 자릿수 더하기
// 문제 설명
// 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
// 예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

// 제한사항
// N의 범위 : 100,000,000 이하의 자연수
// 입출력 예
// N	answer
// 123	6
// 987	24
// 입출력 예 설명
// 입출력 예 #1
// 문제의 예시와 같습니다.

// 입출력 예 #2
// 9 + 8 + 7 = 24이므로 24를 return 하면 됩니다.

// 범위 설정 
// n을 배열로 만든다음에 배열을 더해주면 되나
// 문자열로 만들고 배열로 나열 
// 나열된 값을 더해 
// 1234 + "" = string 


let solution = function (n) {
    if (n <= 100000000) {
        let answer = 0;
        let str = n + ""
        for (i = 0; i < str.length; i++) {
            answer += parseInt(str[i]);
        }
        return answer;
    } else {
        return "범위내의 정수를 입력해주세오"
    }
}



// ex
console.log(solution(935)); // 9 + 3 + 5 = 17
console.log(solution(352894)); // 3 + 5 + 2 + 8 + 9 + 4 = 31
console.log(solution(100000001)); // "범위 내의 숫자를 입력해주세요"
