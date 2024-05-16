// 자연수 뒤집어 배열로 만들기
// 제출 내역
// 문제 설명
// 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

// 제한 조건
// n은 10,000,000,000이하인 자연수입니다.
// 입출력 예
// n	return
// 12345	[5,4,3,2,1]

// 배열로 받고 for문을 역으로 돌려서 push? 

let solution = function (n) {
    let str = n + "";       //n을 문자열로 변환 
    let answer = [];
    for (let i = str.length - 1; i >= 0; i--) { // str.length로 하니까 Nan이 찍힘 배열은 0번째 부터 시작이라 -1로 초기값 
        answer.push(Number(str[i]));            // 문자열의 i 번째를 숫자로 변환하여 answer 배열에 추가 Number안하니까 문자열로 받아서 0점나옴 ..
    }
    return answer;
}

console.log(solution(12345));
console.log(solution(45832));