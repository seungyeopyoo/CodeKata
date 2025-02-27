// 문자열 내 마음대로 정렬하기

// 문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때,
// 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다.
// 예를 들어 strings가 ["sun", "bed", "car"]이고 n이 1이면 각 단어의 인덱스 1의 문자
// "u", "e", "a"로 strings를 정렬합니다.

// strings는 길이 1 이상, 50이하인 배열입니다.
// strings의 원소는 소문자 알파벳으로 이루어져 있습니다.
// strings의 원소는 길이 1 이상, 100이하인 문자열입니다.
// 모든 strings의 원소의 길이는 n보다 큽니다.
// 인덱스 1의 문자가 같은 문자열이 여럿 일 경우, 사전순으로 앞선 문자열이 앞쪽에 위치합니다.

//      strings          	n	         return
// ["sun", "bed", "car"]	1	["car", "bed", "sun"]
// ["abce", "abcd", "cdx"]	2	["abcd", "abce", "cdx"]

// "sun", "bed", "car"의 1번째 인덱스 값은 각각 "u", "e", "a" 입니다.
// 이를 기준으로 strings를 정렬하면 ["car", "bed", "sun"] 입니다.

// "abce"와 "abcd", "cdx"의 2번째 인덱스 값은 "c", "c", "x"입니다.
// 따라서 정렬 후에는 "cdx"가 가장 뒤에 위치합니다.
// "abce"와 "abcd"는 사전순으로 정렬하면 "abcd"가 우선하므로, 답은 ["abcd", "abce", "cdx"] 입니다.

//배열안의 요소들에 n 번째 값에 접근
// n번째요소들을 오름차순으로 정렬하고 nbunzzae.sort();
// 정렬된 n번쨰 요소들대로 i번째 요소들을 담는다 ?
// if n 번째 요소의 값이 === 이면 i 번쨰 요소끼리 오름차순 정렬
let solution = function (strings, n) {
	strings.sort();
	let orderByStringsN = [];
	for (let i = 0; i < strings.length; i++) {
		//배열안의 요소들에 n 번째 값에 접근
		let nbunzzae = strings[i][n];
		//nbunzzae를 orderByStringsN에 저장
		orderByStringsN.push(nbunzzae);
	}
	// 들어간 n번째요소들을 오름차순으로 정렬하고
	orderByStringsN.sort();
	// 얘들을 map으로 해서 n 번쨰인 애를 찾아서 다시 복구 시켜놓는다 . . .
	const answer = orderByStringsN.map((value) => {
		return strings.find((string) => value === string[n]);
	});
	return answer;
};

console.log(solution(['sun', 'bed', 'car'], 1));
console.log(solution(['abce', 'abcd', 'cdx'], 2)); //["abcd", "abce", "cdx"]

// let solution = function (strings, n) {
//     strings.sort();
//     let orderByStringsN = [];
//     for (let i = 0; i < strings.length; i++) {
//         // 배열안의 요소들에 n 번째 값에 접근
//         let nbunzzae = strings[i][n];
//         // nbunzzae를 orderByStringsN에 저장
//         orderByStringsN.push(nbunzzae);
//     }
//     // 들어간 n번째요소들을 오름차순으로 정렬하고
//     orderByStringsN.sort();
//     // 얘들을 map으로 해서 n 번쨰인 애를 찾아서 다시 복구 시켜놓는다 . . .
//     const answer = orderByStringsN.map((value, index) => {
//         let filtered = strings.filter((string) => value === string[n]);
//         if (filtered.length > 1) {
//             filtered.sort();
//             return filtered[index];
//         } else {
//             return filtered[0];
//         }
//     });
//     return answer;
// };

// console.log(solution(['sun', 'bed', 'car'], 1)); // ["car", "bed", "sun"]
// console.log(solution(['abce', 'abcd', 'cdx'], 2)); // ["abcd", "abce", "cdx"]
