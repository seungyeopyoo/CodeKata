// 가운데 글자 가져오기
// 제출 내역
// 문제 설명
// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

// 제한사항
// s는 길이가 1 이상, 100이하인 스트링입니다.
// 입출력 예
// s	return
// "abcde"	"c"
// "qwer"	"we"

// 글자로 출력해야함 
// 반으로 쪼개서 정수로 출력 
//if s % 2===0 이면 -1 , middle 값 출력         else면 그대로 출력 

let solution = function (s) {
    let textLength = s.length;
    let centerText = Math.floor(textLength / 2);

    if (textLength % 2 === 0) {         // 짝수
        return s[centerText - 1] + s[centerText];
    } else {                          //홀수
        return s[centerText];
    }
}

console.log(solution("abcde"));   //c
console.log(solution("qwer"));   //we