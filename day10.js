// 배열의 평균값
// 문제 설명
// 정수 배열 numbers가 매개변수로 주어집니다. numbers의
// 원소의 평균값을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 0 ≤ numbers의 원소 ≤ 1,000
// 1 ≤ numbers의 길이 ≤ 100
// 정답의 소수 부분이 .0 또는 .5인 경우만 입력으로 주어집니다.
// 입출력 예
// numbers	result
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]	5.5
// [89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]	94.0
// 입출력 예 설명
// 입출력 예 #1

// numbers의 원소들의 평균 값은 5.5입니다.
// 입출력 예 #2

// numbers의 원소들의 평균 값은 94.0입니다.

// 제한사항 설정하고
// 각 배열의 합을 numbers_len 으로 나눈다.
// 소수 부분을 어카지 ; 올림도 아니고 반올림도 아니고 


function solution(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

// ex 
console.log(solution([1, 6, 3, 8, 5]));