// x만큼 간격이 있는 n개의 숫자
// 문제 설명
// 함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다.
// 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

// 제한 조건
// x는 -10000000 이상, 10000000 이하인 정수입니다.
// n은 1000 이하인 자연수입니다.
// 입출력 예
// x	n	answer
// 2	5	[2,4,6,8,10]
// 4	3	[4,8,12]
// -4	2	[-4, -8]

// 제한 조건 설정 하고 x 랑 n
// x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트
// let answer = []; return answer ; 리스트로 리턴......은 일단 제껴두고
// for 문인데 x 로시작하고 let i=x i<=n i++ 이렇게가 가능한 부분 ? <- 완전히 땡 
// push 아예 생각 못했음 

const solution = function (x, n) {
    if (x >= -10000000 && x <= 10000000 && n <= 1000) {
        let answer = [];              // <- 이렇게하면 리스트로 받을수있나봄 
        for (let i = 0; i < n; i++) {
            answer.push(x + x * i); //x 부터 시작해 x 씩 증가하는 숫자를 리스트에 추가 
        }
        return answer;
    }
}

console.log(solution(3, 4));
console.log(solution(2, 7));
