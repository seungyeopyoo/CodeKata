// 5명씩
// 최대 5명씩 탑승가능한 놀이기구를 타기 위해 줄을 서있는 사람들의 이름이 담긴 문자열 리스트 names가 주어질 때,
// 앞에서 부터 5명씩 묶은 그룹의 가장 앞에 서있는 사람들의 이름을 담은 리스트를 return하도록 solution 함수를 완성해주세요.
// 마지막 그룹이 5명이 되지 않더라도 가장 앞에 있는 사람의 이름을 포함합니다.

// 제한사항
// 5 ≤ names의 길이 ≤ 30
// 1 ≤ names의 원소의 길이 ≤ 10
// names의 원소는 영어 알파벳 소문자로만 이루어져 있습니다.

// names	                                                        result
// ["nami", "ahri", "jayce", "garen", "ivern", "vex", "jinx"]	["nami", "vex"]

// 앞에서부터 5명씩 두 그룹으로 묶을 수 있습니다.
//  ["nami", "ahri", "jayce", "garen", "ivern"], ["vex", "jinx"]
// 이 두 그룹에서 가장 앞에 서있는 사람들의 이름을 담은 리스트인 ["nami", "vex"]를 return합니다.

// step 1. 빈배열 만들어서 names 순회하면서 0 시작 5씩 증가하는애들 push하고  return

const solution = function (names) {
	let result = [];
	for (let i = 0; i < names.length; i += 5) {
		result.push(names[i]);
	}
	return result;
};

console.log(
	solution(['nami', 'ahri', 'jayce', 'garen', 'ivern', 'vex', 'jinx'])
);
