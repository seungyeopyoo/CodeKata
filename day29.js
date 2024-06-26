// 제일 작은 수 제거하기

// 정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요.
// 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.

// arr은 길이 1 이상인 배열입니다.
// 인덱스 i, j에 대해 i ≠ j이면 arr[i] ≠ arr[j] 입니다.

// arr	return
// [4,3,2,1]	[4,3,2]
// [10]	[-1]

//최소값 설언, 최소값 제외한 배열 result, 

let solution = function (arr) {
    let minNumber = Math.min(...arr); // 배열에서 가장 작은 값을 찾음

    let result = arr.filter(num => num !== minNumber); // 가장 작은 값을 제외한 새로운 배열 생성

    if (result.length < 1) {
        return [-1];
    }

    return result;
};

console.log(solution([4, 3, 2, 1]))
console.log(solution([10, 5, 7]))
