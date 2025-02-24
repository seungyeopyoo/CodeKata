// 문자열 밀기
// 문자열 "hello"에서 각 문자를 오른쪽으로 한 칸씩 밀고
// 마지막 문자는 맨 앞으로 이동시키면 "ohell"이 됩니다.
// 이것을 문자열을 민다고 정의한다면 문자열 A와 B가 매개변수로 주어질 때,
// A를 밀어서 B가 될 수 있다면 밀어야 하는 최소 횟수를 return하고
// 밀어서 B가 될 수 없으면 -1을 return 하도록 solution 함수를 완성해보세요.

// 0 < A의 길이 = B의 길이 < 100
// A, B는 알파벳 소문자로 이루어져 있습니다.
// A	B	result
// "hello"	,"ohell"	1
// "apple",	"elppa"	-1
// "atat"	,"tata"	1
// "abc"	,"abc"	0

// "hello"를 오른쪽으로 한 칸 밀면 "ohell"가 됩니다.
// "apple"은 몇 번을 밀어도 "elppa"가 될 수 없습니다.
// "atat"는 오른쪽으로 한 칸, 세 칸을 밀면 "tata"가 되므로 최소 횟수인 1을 반환합니다.
// "abc"는 밀지 않아도 "abc"이므로 0을 반환합니다.

// step 1. A.length 만큼 한칸씩 밀기를 반복한다. slice(-1) + slice(0,-1)
// step 2. B와 같아지면 i를 return A.length만큼 다밀어도 안되면 -1 return
// step 3. A랑 B가 같으면 0 return

const solution = function (A, B) {
	if (A === B) return 0;

	let pushedA = A;
	for (let i = 1; i <= A.length; i++) {
		pushedA = pushedA.slice(-1) + pushedA.slice(0, -1);
		if (pushedA === B) return i;
	}

	return -1;
};

console.log(solution('hello', 'ohell'));
console.log(solution('apple', 'elppa'));
console.log(solution('atat', 'tata'));
console.log(solution('abc', 'abc'));
