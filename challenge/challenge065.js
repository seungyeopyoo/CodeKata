// 이진 변환 반복하기
// 0과 1로 이루어진 어떤 문자열 x에 대한 이진 변환을 다음과 같이 정의합니다.

// x의 모든 0을 제거합니다.
// x의 길이를 c라고 하면, x를 "c를 2진법으로 표현한 문자열"로 바꿉니다.
// 예를 들어, x = "0111010"이라면, x에 이진 변환을 가하면 x = "0111010" -> "1111" -> "100" 이 됩니다.

// 0과 1로 이루어진 문자열 s가 매개변수로 주어집니다. s가 "1"이 될 때까지 계속해서 s에 이진 변환을 가했을 때,
// 이진 변환의 횟수와 변환 과정에서 제거된 모든 0의 개수를 각각 배열에 담아 return 하도록 solution 함수를 완성해주세요.

// s의 길이는 1 이상 150,000 이하입니다.
// s에는 '1'이 최소 하나 이상 포함되어 있습니다.

// s	                    result
// "110010101001"	        [3,8]
// "01110"              	[3,3]
// "1111111"	            [4,1]

// "110010101001"이 "1"이 될 때까지 이진 변환을 가하는 과정은 다음과 같습니다.
// 회차	    이진 변환 이전	    제거할 0의 개수 	0 제거 후 길이	    이진 변환 결과
// 1	    "110010101001"	    6	                6	                "110"
// 2	    "110"	            1	                2	                "10"
// 3	    "10"	            1	                1	                "1"
// 3번의 이진 변환을 하는 동안 8개의 0을 제거했으므로, [3,8]을 return 해야 합니다.

// "01110"이 "1"이 될 때까지 이진 변환을 가하는 과정은 다음과 같습니다.
// 회차	    이진 변환 이전	    제거할 0의 개수	    0 제거 후 길이	    이진 변환 결과
// 1	    "01110"	            2	                3	                "11"
// 2	    "11"	            0	                2	                "10"
// 3	    "10"	            1	                1	                "1"
// 3번의 이진 변환을 하는 동안 3개의 0을 제거했으므로, [3,3]을 return 해야 합니다.

// "1111111"이 "1"이 될 때까지 이진 변환을 가하는 과정은 다음과 같습니다.
// 회차	이진 변환 이전	    제거할 0의 개수	    0 제거 후 길이	    이진 변환 결과
// 1	"1111111"	         0	                7	                "111"
// 2	"111"	             0	                3	                "11"
// 3	"11"	             0	                2	                "10"
// 4	"10"	             1	                1	                "1"
// 4번의 이진 변환을 하는 동안 1개의 0을 제거했으므로, [4,1]을 return 해야 합니다

// step 1. countRemoveZero = 0; changedTwo = 0; 선언하고
// step 2. while문 사용 s !== 1 초기값
// step 3. s의 길이를 저장한다.
// step 4. for 루프를 순회하며 0이 나올때마다 zerocunt ++ 다돌고나면 changedTwo ++
// step 5. step3 - zerocunt 이진법으로 변환 toString(2)
// step 6. while 다돌면 return [changedTwo, countRemoveZero]
// while 문 사용시 스코프에 대한 개념 생각하고 접근

const solution = function (s) {
	let countRemoveZero = 0;
	let changedTwo = 0;

	while (s !== '1') {
		let lengthOfS = s.length;
		let zeroCount = 0;

		for (let i = 0; i < s.length; i++) {
			if (s[i] === '0') {
				zeroCount++;
			}
		}
		countRemoveZero += zeroCount;
		changedTwo++;

		let removedZero = lengthOfS - zeroCount;

		s = removedZero.toString(2);
	}

	return [changedTwo, countRemoveZero];
};

console.log(solution('110010101001'));
console.log(solution('01110'));
console.log(solution('1111111'));
