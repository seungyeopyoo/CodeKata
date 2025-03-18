// 왼쪽 오른쪽
// 문자열 리스트 str_list에는 "u", "d", "l", "r" 네 개의 문자열이 여러 개 저장되어 있습니다.
// str_list에서 "l"과 "r" 중 먼저 나오는 문자열이 "l"이라면 해당 문자열을 기준으로
// 왼쪽에 있는 문자열들을 순서대로 담은 리스트를, 먼저 나오는 문자열이 "r"이라면
// 해당 문자열을 기준으로 오른쪽에 있는 문자열들을 순서대로 담은 리스트를 return하도록 solution 함수를 완성해주세요.
// "l"이나 "r"이 없다면 빈 리스트를 return합니다.

// 1 ≤ str_list의 길이 ≤ 20
// str_list는 "u", "d", "l", "r" 네 개의 문자열로 이루어져 있습니다.
// str_list	                        result
// ["u", "u", "l", "r"]	            ["u", "u"]
// ["l"]	                        []

// "r"보다 "l"이 먼저 나왔기 때문에 "l"의 왼쪽에 있는 문자열들을 담은 리스트인 ["u", "u"]를 return합니다.
// "l"의 왼쪽에 문자열이 없기 때문에 빈 리스트를 return합니다.

// step 1. for문으로 str_list를 순회하다가 if l이나오면 slice 0,l r이  나오면 slice r return lr 은 각각 indexof로 추출
// step 2. if문 다 지나가면 []; return

const solution = function (str_list) {
	for (let i = 0; i < str_list.length; i++) {
		if (str_list[i] === 'l') {
			return str_list.slice(0, str_list.indexOf('l'));
		} else if (str_list[i] === 'r') {
			return str_list.slice(str_list.indexOf('r') + 1);
		}
	}
	return [];
};

console.log(solution(['u', 'u', 'l', 'r']));
console.log(solution(['l']));
console.log(solution(['u', 'r', 'a', 'l']));
