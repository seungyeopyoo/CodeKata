// 정수 내림차순으로 배치하기
// 제출 내역
// 문제 설명
// 함수 solution은 정수 n을 매개변수로 입력받습니다. n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 예를들어 n이 118372면 873211을 리턴하면 됩니다.

// 제한 조건
// n은 1이상 8000000000 이하인 자연수입니다.
// 입출력 예
// n	return
// 118372	873211

// 정수 -> 문자열 하고 문자열을 내림차순으로 정렬하고 ..?
// split , sort , join 공부

function solution(n) {
    let str = n + "";  //  정수를 문자열로 변환
    let arr = str.split(''); // 문자열의 각 자릿수를 배열로 변환
    arr.sort(function (a, b) {  // 배열을 내림차순으로 정렬
        return b - a;
    });

    let sortStr = arr.join('');  // 정렬된 배열을 다시 문자열로 변환
    return parseInt(sortStr);  // 문자열을 정수로 변환하여 반환
}

console.log(solution(12376));