// 옹알이 (2)
// 머쓱이는 태어난 지 11개월 된 조카를 돌보고 있습니다. 조카는 아직 "aya", "ye", "woo", "ma" 네 가지 발음과 네 가지 발음을 조합해서 만들 수 있는 발음밖에 하지 못하고
// 연속해서 같은 발음을 하는 것을 어려워합니다. 문자열 배열 babbling이 매개변수로 주어질 때, 머쓱이의 조카가 발음할 수 있는 단어의 개수를 return하도록 solution 함수를 완성해주세요.

// 1 ≤ babbling의 길이 ≤ 100
// 1 ≤ babbling[i]의 길이 ≤ 30
// 문자열은 알파벳 소문자로만 이루어져 있습니다.

// babbling                                     	result
// ["aya", "yee", "u", "maa"]	                    1
// ["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]	2

// ["aya", "yee", "u", "maa"]에서 발음할 수 있는 것은 "aya"뿐입니다. 따라서 1을 return합니다.

// ["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]에서 발음할 수 있는 것은 "aya" + "ye" = "ayaye", "ye" + "ma" + "woo" = "yemawoo"로 2개입니다.
// "yeye"는 같은 발음이 연속되므로 발음할 수 없습니다. 따라서 2를 return합니다.

// 네 가지를 붙여 만들 수 있는 발음 이외에는 어떤 발음도 할 수 없는 것으로 규정합니다. 예를 들어 "woowo"는 "woo"는 발음할 수 있지만 "wo"를 발음할 수 없기 때문에 할 수 없는 발음입니다.

// step 1. 네 가지 발음 배열을 하나 만든다.
// step 2. babbling을 순회하며 step1의[i] 가 babbling에 있을시에 공백으로 replace
// step 3. babbling에서 ''공백인 문자열만 filter 해서 length return
// 연속된 발음도 체크했어야함 ㅠ 연속된 발음은 불가하다고 되어있는데 기존 코드에서는 yeye도 공백으로 바꿔 버렸움 .. includes(say+say)로 필터링 조건 추가..

const solution = function (babbling) {
	const babySays = ['aya', 'ye', 'woo', 'ma'];

	return babbling
		.map((word) => {
			for (let say of babySays) {
				if (word.includes(say + say)) return word;
			}
			for (let say of babySays) {
				word = word.replaceAll(say, ' ');
			}
			return word.trim();
		})
		.filter((word) => word === '').length;
};
console.log(solution(['aya', 'yee', 'u', 'maa']));
console.log(solution(['ayaye', 'uuu', 'yeye', 'yemawoo', 'ayaayaa']));
