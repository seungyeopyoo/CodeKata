// 외계어 사전
// PROGRAMMERS-962 행성에 불시착한 우주비행사 머쓱이는 외계행성의 언어를 공부하려고 합니다.
// 알파벳이 담긴 배열 spell과 외계어 사전 dic이 매개변수로 주어집니다.
// spell에 담긴 알파벳을 한번씩만 모두 사용한 단어가
// dic에 존재한다면 1, 존재하지 않는다면 2를 return하도록 solution 함수를 완성해주세요.

// spell과 dic의 원소는 알파벳 소문자로만 이루어져있습니다.
// 2 ≤ spell의 크기 ≤ 10
// spell의 원소의 길이는 1입니다.
// 1 ≤ dic의 크기 ≤ 10
// 1 ≤ dic의 원소의 길이 ≤ 10
// spell의 원소를 모두 사용해 단어를 만들어야 합니다.
// spell의 원소를 모두 사용해 만들 수 있는 단어는 dic에 두 개 이상 존재하지 않습니다.
// dic과 spell 모두 중복된 원소를 갖지 않습니다.

// spell	            dic                             	result
// ["p", "o", "s"]	,["sod", "eocd", "qixm", "adio", "soo"]	2
// ["z", "d", "x"],	["def", "dww", "dzx", "loveaw"]	1
// ["s", "o", "m", "d"]	,["moos", "dzx", "smm", "sunmmo", "som"]	2

// "p", "o", "s" 를 조합해 만들 수 있는 단어가 dic에 존재하지 않습니다. 따라서 2를 return합니다.
// "z", "d", "x" 를 조합해 만들 수 있는 단어 "dzx"가 dic에 존재합니다. 따라서 1을 return합니다.
// "s", "o", "m", "d" 를 조합해 만들 수 있는 단어가 dic에 존재하지 않습니다. 따라서 2을 return합니다.
// 입출력 예 #3 에서 "moos", "smm", "som"도 "s", "o", "m", "d" 를 조합해 만들 수 있지만
// spell의 원소를 모두 사용해야 하기 때문에 정답이 아닙니다.

// step 1. spell을 정렬한다 dic의 각 요소들을 정렬한다.
// step 2. dic에 spell이 존재하는지 확인한다. some.
// step 3. 있으면 1 없으면 2 return 삼항연산자

const solution = function (spell, dic) {
	let sortedSpell = [...spell].sort().join('');
	let isExist = dic.some((word) => [...word].sort().join('') === sortedSpell);

	return isExist ? 1 : 2;
};

console.log(solution(['p', 'o', 's'], ['sod', 'eocd', 'qixm', 'adio', 'soo']));
console.log(solution(['z', 'd', 'x'], ['def', 'dww', 'dzx', 'loveaw']));
console.log(
	solution(['s', 'o', 'm', 'd'], ['moos', 'dzx', 'smm', 'sunmmo', 'som'])
);
