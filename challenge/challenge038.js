// 가장 가까운 같은 글자
// 문자열 s가 주어졌을 때, s의 각 위치마다 자신보다 앞에 나왔으면서,
// 자신과 가장 가까운 곳에 있는 같은 글자가 어디 있는지 알고 싶습니다.
// 예를 들어, s="banana"라고 할 때,
// 각 글자들을 왼쪽부터 오른쪽으로 읽어 나가면서 다음과 같이 진행할 수 있습니다.

// b는 처음 나왔기 때문에 자신의 앞에 같은 글자가 없습니다. 이는 -1로 표현합니다.
// a는 처음 나왔기 때문에 자신의 앞에 같은 글자가 없습니다. 이는 -1로 표현합니다.
// n은 처음 나왔기 때문에 자신의 앞에 같은 글자가 없습니다. 이는 -1로 표현합니다.
// a는 자신보다 두 칸 앞에 a가 있습니다. 이는 2로 표현합니다.
// n도 자신보다 두 칸 앞에 n이 있습니다. 이는 2로 표현합니다.
// a는 자신보다 두 칸, 네 칸 앞에 a가 있습니다. 이 중 가까운 것은 두 칸 앞이고, 이는 2로 표현합니다.
// 따라서 최종 결과물은 [-1, -1, -1, 2, 2, 2]가 됩니다.

// 문자열 s이 주어질 때, 위와 같이 정의된 연산을 수행하는 함수 solution을 완성해주세요.

// 1 ≤ s의 길이 ≤ 10,000
// s은 영어 소문자로만 이루어져 있습니다.

// s	                    result
// "banana"	                [-1, -1, -1, 2, 2, 2]
// "foobar"	                [-1, -1, 1, -1, -1, -1]

// step 1. 빈 배열 만든다.
// step 2. 주어진 문자열을 0, i 로 slice한다.
// step 3. lastIndexOf로 넣어야하는 문자가 있는지 확인
// step 4. 없으면 push(-1) 있으면 push(i - step3)  return

const solution = function (s) {
	const result = [];
	for (let i = 0; i < s.length; i++) {
		const slicedS = s.slice(0, i);

		const lastIdx = slicedS.lastIndexOf(s[i]);

		if (lastIdx === -1) {
			result.push(-1);
		} else {
			result.push(i - lastIdx);
		}
	}
	return result;
};

console.log(solution('banana'));
console.log(solution('foobar'));
