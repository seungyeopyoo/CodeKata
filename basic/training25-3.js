// 문자열 묶기
// 문자열 배열 strArr이 주어집니다.
// strArr의 원소들을 길이가 같은 문자열들끼리 그룹으로 묶었을 때 가장 개수가 많은 그룹의크기를 return 하는 solution 함수를 완성해 주세요.

// 제한사항
// 1 ≤ strArr의 길이 ≤ 100,000
// 1 ≤ strArr의 원소의 길이 ≤ 30
// strArr의 원소들은 알파벳 소문자로 이루어진 문자열입니다.

// strArr	                    result
// ["a","bc","d","efg","hi"]	2

// 각 문자열들을 길이에 맞게 그룹으로 묶으면 다음과 같습니다.
// 문자열        길이	        문자열 목록	개수
// 1	        ["a","d"]	        2
// 2	        ["bc","hi"]        	2
// 3	        ["efg"]	            1
// 개수의 최댓값은 2이므로 2를 return 합니다.

// step 1. strArr 원소의 길이를 담은 배열을 만든다. map
// step 2. 등장하는 숫자와 그 횟수를 저장할 객체를 만든다.
// step 3. step2의 키벨류 페어들 중에 벨류값이 가장 큰거를 return

const solution = function (strArr) {
	lengthOfArr = strArr.map((v) => v.length);
	const countMap = {};

	lengthOfArr.forEach((len) => {
		countMap[len] = (countMap[len] || 0) + 1;
	});
	console.log(countMap);
	return Math.max(...Object.values(countMap));
};

console.log(solution(['a', 'bc', 'd', 'efg', 'hi']));
