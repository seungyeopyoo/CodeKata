// 옹알이 (1)
// 머쓱이는 태어난 지 6개월 된 조카를 돌보고 있습니다.
// 조카는 아직 "aya", "ye", "woo", "ma"
// 네 가지 발음을 최대 한 번씩 사용해 조합한(이어 붙인) 발음밖에 하지 못합니다.
// 문자열 배열 babbling이 매개변수로 주어질 때,
// 머쓱이의 조카가 발음할 수 있는 단어의 개수를 return하도록 solution 함수를 완성해주세요.

// 1 ≤ babbling의 길이 ≤ 100
// 1 ≤ babbling[i]의 길이 ≤ 15
// babbling의 각 문자열에서 "aya", "ye", "woo", "ma"는 각각 최대 한 번씩만 등장합니다.
// 즉, 각 문자열의 가능한 모든 부분 문자열 중에서 "aya", "ye", "woo", "ma"가 한 번씩만 등장합니다.
// 문자열은 알파벳 소문자로만 이루어져 있습니다.
// babbling	result
// ["aya", "yee", "u", "maa", "wyeoo"]	1
// ["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]	3

// ["aya", "yee", "u", "maa", "wyeoo"]에서 발음할 수 있는 것은 "aya"뿐입니다. 따라서 1을 return합니다.

// ["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]에서 발음할 수 있는 것은
// "aya" + "ye" = "ayaye", "ye", "ye" + "ma" + "woo" = "yemawoo"로 3개입니다. 따라서 3을 return합니다.

// step 1. 발음 가능한 aya ye woo ma를 저장한다.
// step 2. babbling에서 1을 filter한다.
// step 3. 2의 length를 반환한다.
// 정확하게 1을 걸러내야 하는데

const solution = function (babbling) {
	let babyWord = ['aya', 'ye', 'woo', 'ma'];
	let regex = new RegExp(`^(${babyWord.join('|')})+$`);

	return babbling.filter((word) => regex.test(word)).length;
};

console.log(solution(['aya', 'yee', 'u', 'maa', 'wyeoo']));
console.log(solution(['ayaye', 'uuuma', 'ye', 'yemawoo', 'ayaa']));
