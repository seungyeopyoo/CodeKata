// 외계행성의 나이
// 제출 내역
// 문제 설명
// 우주여행을 하던 머쓱이는 엔진 고장으로 PROGRAMMERS-962 행성에 불시착하게 됐습니다.
// 입국심사에서 나이를 말해야 하는데, PROGRAMMERS-962 행성에서는 나이를 알파벳으로 말하고 있습니다.
// a는 0, b는 1, c는 2, ..., j는 9입니다. 예를 들어 23살은 cd, 51살은 fb로 표현합니다.
// 나이 age가 매개변수로 주어질 때 PROGRAMMER-962식 나이를 return하도록 solution 함수를 완성해주세요.

// age는 자연수입니다.
// age ≤ 1,000

// age	result
// 23	"cd"
// 51	"fb"
// 100	"baa"

// age가 23이므로 "cd"를 return합니다.
// age가 51이므로 "fb"를 return합니다.
// age가 100이므로 "baa"를 return합니다.

// step 1. 나이를 저장한다.
// step 2. 0 = a 1 = b 2 = c ~ 9까지 저장한다.
// step 3. 받아온 나이를 쪼개서 배열로 저장한다.
// step 4. step 3에서 주어진 각인덱스를 알파벳으로 변환한다.map
// step 5. step 4의 배열을 join으로 반환한다.
const solution = function (age) {
	let convert = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
	let beforeAge = (age + '').split('');

	let result = beforeAge.map((num) => convert[num]).join('');

	return result;
};

console.log(solution(23));
console.log(solution(51));
console.log(solution(100));
