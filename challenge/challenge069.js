// 문자열 나누기
// 문자열 s가 입력되었을 때 다음 규칙을 따라서 이 문자열을 여러 문자열로 분해하려고 합니다.

// 먼저 첫 글자를 읽습니다. 이 글자를 x라고 합시다.
// 이제 이 문자열을 왼쪽에서 오른쪽으로 읽어나가면서, x와 x가 아닌 다른 글자들이 나온 횟수를 각각 셉니다.
// 처음으로 두 횟수가 같아지는 순간 멈추고, 지금까지 읽은 문자열을 분리합니다.

// s에서 분리한 문자열을 빼고 남은 부분에 대해서 이 과정을 반복합니다. 남은 부분이 없다면 종료합니다.
// 만약 두 횟수가 다른 상태에서 더 이상 읽을 글자가 없다면, 역시 지금까지 읽은 문자열을 분리하고, 종료합니다.
// 문자열 s가 매개변수로 주어질 때, 위 과정과 같이 문자열들로 분해하고, 분해한 문자열의 개수를 return 하는 함수 solution을 완성하세요.

// 1 ≤ s의 길이 ≤ 10,000
// s는 영어 소문자로만 이루어져 있습니다.

// s	                        result
// "banana"	                    3             ba - na - na
// "abracadabra"	            6              ab- ra- ca- da - br - a
// "aaabbaccccabba"	            3              aaabbacc ccab ba

// s="banana"인 경우 ba - na - na와 같이 분해됩니다.
// s="abracadabra"인 경우 ab - ra - ca - da - br - a와 같이 분해됩니다.
// s="aaabbaccccabba"인 경우 aaabbacc - ccab - ba와 같이 분해됩니다.

// step 1. 주어진 문자열 s 순회 move랑 count 선언
// step 2. 0번째 인덱스를 저장해줘야할듯 s[0] = startAlphabet
// step 3. 순회하면서 startAlphabet나오면 move++ 아니면 move --  move가 0이 되면 count++ && startAlphabet = s[i+1]
// step 4. 다 순회하고 move가 0이 아니라면 count++ 한번 더 하고 종료

const solution = function (s) {
	let move = 0;
	let count = 0;
	let startAlphabet = s[0];

	for (let i = 0; i < s.length; i++) {
		if (s[i] === startAlphabet) {
			move++;
		} else if (s[i] !== startAlphabet) {
			move--;
		}

		if (move === 0) {
			count++;
			startAlphabet = s[i + 1];
		}
	}
	if (move !== 0) {
		count++;
	}
	return count;
};

console.log(solution('banana'));
console.log(solution('abracadabra'));
console.log(solution('aaabbaccccabba'));
