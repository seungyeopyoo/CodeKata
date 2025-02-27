// 특수문자 출력하기
// 제출 내역
// 문제 설명
// 다음과 같이 출력하도록 코드를 작성해 주세요.

// 출력 예시

// !@#$%^&*(\'"<>?:;

// step 1. 빽틱으로 감싸서 출력한다. \이 ' 랑 같이 쓰니까 다른거로 바뀌어서 \\ 두개사용
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.on('close', function () {
	let answer = `!@#$%^&*(\\'"<>?:;`;
	console.log(answer);
});
