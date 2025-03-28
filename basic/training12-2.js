// 주사위 게임 3
// 1부터 6까지 숫자가 적힌 주사위가 네 개 있습니다.
// 네 주사위를 굴렸을 때 나온 숫자에 따라 다음과 같은 점수를 얻습니다.

// 네 주사위에서 나온 숫자가 모두 p로 같다면 1111 × p점을 얻습니다.
// 세 주사위에서 나온 숫자가 p로 같고
// 나머지 다른 주사위에서 나온 숫자가 q(p ≠ q)라면 (10 × p + q)2 점을 얻습니다.
// 주사위가 두 개씩 같은 값이 나오고,
// 나온 숫자를 각각 p, q(p ≠ q)라고 한다면 (p + q) × |p - q|점을 얻습니다.
// 어느 두 주사위에서 나온 숫자가 p로 같고
// 나머지 두 주사위에서 나온 숫자가 각각 p와 다른 q, r(q ≠ r)이라면 q × r점을 얻습니다.
// 네 주사위에 적힌 숫자가 모두 다르다면 나온 숫자 중 가장 작은 숫자 만큼의 점수를 얻습니다.
// 네 주사위를 굴렸을 때 나온 숫자가 정수 매개변수 a, b, c, d로 주어질 때,
// 얻는 점수를 return 하는 solution 함수를 작성해 주세요.

// a, b, c, d는 1 이상 6 이하의 정수입니다.
// a	b	c	d	result
// 2	,2	,2	,2	2222
// 4	,1,	4	,4	1681
// 6	,3,	3	,6	27
// 2	,5,	2	,6	30
// 6	,4,	2	,5	2
// 예제 1번에서 네 주사위 숫자가 모두 2로 같으므로 1111 × 2 = 2222점을 얻습니다.
// 따라서 2222를 return 합니다.
// 예제 2번에서 세 주사위에서 나온 숫자가 4로 같고 나머지 다른 주사위에서 나온 숫자가 1이므로
// (10 × 4 + 1)2 = 412 = 1681점을 얻습니다. 따라서 1681을 return 합니다
// 예제 3번에서 a, d는 6으로, b, c는 3으로 각각 같으므로
// (6 + 3) × |6 - 3| = 9 × 3 = 27점을 얻습니다. 따라서 27을 return 합니다.
// 예제 4번에서 두 주사위에서 2가 나오고 나머지 다른 두 주사위에서 각각 5, 6이 나왔으므로
// 5 × 6 = 30점을 얻습니다. 따라서 30을 return 합니다.
// 예제 5번에서 네 주사위 숫자가 모두 다르고 나온 숫자 중 가장 작은 숫자가 2이므로
// 2점을 얻습니다. 따라서 2를 return 합니다.
// step 1. 먼저 abcd를 정렬한다.
// step 2. abcd 모두 같으면 1111 x a return
// step 3. abc 혹은 || bcd가 같으면 (10 * p + q) ** 2 return
// step 4. ab 가 같고 && cd가 같으면 (p + q) × |p - q| return
// step 5. ab 가 같거나 || cd가 같거나 || bc 가 같으면 q × r
// step 6. else = Math.min return

const solution = function (a, b, c, d) {
	const [p, q, r, s] = [a, b, c, d].sort((x, y) => x - y);

	if (p === s) return 1111 * a;

	if (p === q && q === r) return (10 * p + s) ** 2;
	if (q === r && r === s) return (10 * q + p) ** 2;

	if (p === q && r === s) return (p + r) * Math.abs(p - r);

	if (p === q) return r * s;
	if (q === r) return p * s;
	if (r === s) return p * q;

	return p;
};

console.log(solution(2, 2, 2, 2));
console.log(solution(4, 1, 4, 4));
console.log(solution(6, 3, 3, 6));
console.log(solution(2, 5, 2, 6));
console.log(solution(6, 4, 2, 5));
