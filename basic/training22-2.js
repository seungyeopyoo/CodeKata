// 문자열이 몇 번 등장하는지 세기
// 문자열 myString과 pat이 주어집니다.
// myString에서 pat이 등장하는 횟수를 return 하는 solution 함수를 완성해 주세요.

// 제한사항
// 1 ≤ myString ≤ 1000
// 1 ≤ pat ≤ 10

// myString	        pat	        result
// "banana"	        "ana"         2
// "aaaa"	        "aa"	      3

// "banana"에서 1 ~ 3번 인덱스에서 한 번, 3 ~ 5번 인덱스에서 또 한 번 "ana"가 등장해서 총 두 번 등장합니다.
// 따라서 2를 return 합니다.
// "aaaa"에서 0 ~ 2번 인덱스에서 한 번, 1 ~ 3번 인덱스에서 한 번, 2 ~ 4번 인덱스에서 한 번 "aa"가 등장해서 총 세 번 등장합니다.
// 따라서 3을 return 합니다.

// step 1. while문 myString.length 조건
// step 2. i 부터 i+pat.length까지 를 확인함 === pat면 count ++
// step 3. 다 돌고 나면 count return

const solution = function (myString, pat) {
	let count = 0;
	let i = 0;

	while (i < myString.length) {
		if (myString.slice(i, i + pat.length) === pat) {
			count++;
		}
		i++;
	}

	return count;
};

console.log(solution('banana', 'ana'));
console.log(solution('aaaa', 'aa'));
