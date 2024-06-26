// 수박수박수박수박수박수?

// 길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수,
// solution을 완성하세요. 예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.

// n은 길이 10,000이하인 자연수입니다.

// n	return
// 3	"수박수"
// 4	"수박수박"

// 짝수면 수박, 홀수면 + 수 

let solution = function (n) {
    return "수박".repeat(Math.floor(n / 2)) + (n % 2 !== 0 ? "수" : "");

}

console.log(solution(3));
console.log(solution(4));

// 문자열에 아무것도 아닌거 더해줄라면 ""
