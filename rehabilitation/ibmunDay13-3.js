// 가위 바위 보
// 가위는 2 바위는 0 보는 5로 표현합니다. 가위 바위 보를 내는 순서대로 나타낸 문자열 rsp가 매개변수로 주어질 때,
// rsp에 저장된 가위 바위 보를 모두 이기는 경우를 순서대로 나타낸 문자열을 return하도록 solution 함수를 완성해보세요.

// 0 < rsp의 길이 ≤ 100
// rsp와 길이가 같은 문자열을 return 합니다.
// rsp는 숫자 0, 2, 5로 이루어져 있습니다.
// 입출력 예
// rsp	result
// "2"	"0"
// "205"	"052"

// "2"는 가위이므로 바위를 나타내는 "0"을 return 합니다.

// "205"는 순서대로 가위, 바위, 보이고 이를 모두 이기려면 바위, 보, 가위를 순서대로 내야하므로 “052”를 return합니다.

// step 1. 2 -> 0 ,  0 -> 5 , 5 -> 2 키 벨류 값 저장한다.
// step 2. rsp를 split를 통해서 배열로 만들어 준다.
// step 3. step2를 map을 통해서 step1의 배열로 바꾸어준다.
// step 4. 해당값을 join하여 return 한다.

const solution = function (rsp) {
	let win = { 2: '0', 0: '5', 5: '2' };
	let answer = rsp
		.split('')
		.map((key) => win[key])
		.join('');
	return answer;
};

console.log(solution('2'));
console.log(solution('205'));
