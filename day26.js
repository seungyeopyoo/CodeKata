// 음양 더하기
// 어떤 정수들이 있습니다. 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와
// 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다.
// 실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.

// signs의 길이는 absolutes의 길이와 같습니다.
// signs[i] 가 true면 absolutes[i] 의 실제 정수가 양수임을, false면 음수임을 의미합니다.

// absolutes	signs	result
// [4,7,12]	[true,false,true]	9
// [1,2,3]	[false,false,true]	0

// signs가 [true,false,true] 이므로, 실제 수들의 값은 각각 4, -7, 12입니다.
// 따라서 세 수의 합인 9를 return 해야 합니다.

// signs가 [false,false,true] 이므로, 실제 수들의 값은 각각 -1, -2, 3입니다.
// 따라서 세 수의 합인 0을 return 해야 합니다.

//각 배열 끼리 순서를 맞춰준다
//true면 양수 false면 음수 해준다 
// 뱉어내서 return += 

let solution = function (absolutes, signs) {
    let sumArr = 0; // 합계를 저장할 변수 초기화

    // absolutes 배열을 순회하면서 signs 배열에 따라 값을 더하거나 뺌
    for (let i = 0; i < absolutes.length; i++) {
        if (signs[i] === true) { // signs[i]가 true이면
            sumArr += absolutes[i]; // absolutes[i] 값을 더함
        } else { // signs[i]가 false이면
            sumArr -= absolutes[i]; // absolutes[i] 값을 뺌
        }
    }
    return sumArr; // 최종 합계를 반환
}


console.log(solution([4, 7, 12], [true, false, true])); // 출력: 9
console.log(solution([1, 2, 3], [false, false, true])); // 출력: 0