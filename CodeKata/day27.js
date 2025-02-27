// 핸드폰 번호 가리기
// 프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
// 전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

// phone_number는 길이 4 이상, 20이하인 문자열입니다.

// phone_number	return
// "01033334444"	"*******4444"
// "027778888"	"*****8888"

let solution = function (phone_number) {
    // phone_number의 길이를 구합니다.
    let length = phone_number.length;

    // 뒷 4자리를 제외한 앞부분을 *로 채웁니다.
    let starNumber = '*'.repeat(length - 4);

    // 뒷 4자리를 구합니다.
    let lastFour = phone_number.slice(-4);

    // 두 부분을 합쳐서 반환합니다.
    return starNumber + lastFour;
}

console.log(solution("01033334444")); // "*******4444"
console.log(solution("027778888"));   // "*****8888"