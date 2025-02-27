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
    // 배열의 길이가 1 이상 100 이하이고, 각 요소가 0 이상 1,000 이하인지 확인합니다.
    if (arr.length >= 1 && arr.length <= 100) {
        for (let i = 0; i < arr.length; i++) {
            // 위의 length에 && 으로 이어 붙이지 않는 이유 = 변수 'i'를 아직 정의하지 않아서, for문에서 정의한 후에 범위설정 
            if (!(arr[i] >= 0 && arr[i] <= 1000)) {
                return "배열의 각 요소는 0 이상 1,000 이하이어야 합니다."; // arr[i]값이 범위내에 없을경우 출력 
            }
        }
    } else {
        return "배열의 길이는 1 이상 100 이하이어야 합니다.";  // 첫번째, 두번째 if문이 거짓일 경우에 실행 
    }

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    const average = sum / arr.length;

    if (average % 1 === 0 || average % 1 === 0.5) { // average를 1로 나누었을때 나머지가 0이거나 0.5인 경우에는 그대로 출력 
        return average;
    } else {
        return Math.floor(average); // 0혹은 0.5가 아닐 경우에 정수 부분만 출력 
    }
}
// ex 
console.log(solution([1, 6, 3, 8, 5])); // 4.6 이지만 0.6은 출력되지 않는다. 