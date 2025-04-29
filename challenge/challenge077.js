// 숫자 짝꿍
// 두 정수 X, Y의 임의의 자리에서 공통으로 나타나는 정수 k(0 ≤ k ≤ 9)들을 이용하여 만들 수 있는 가장 큰 정수를 두 수의 짝꿍이라 합니다(단, 공통으로 나타나는 정수 중 서로 짝지을 수 있는 숫자만 사용합니다).
//  X, Y의 짝꿍이 존재하지 않으면, 짝꿍은 -1입니다. X, Y의 짝꿍이 0으로만 구성되어 있다면, 짝꿍은 0입니다.

// 예를 들어, X = 3403이고 Y = 13203이라면, X와 Y의 짝꿍은 X와 Y에서 공통으로 나타나는 3, 0, 3으로 만들 수 있는 가장 큰 정수인 330입니다.
// 다른 예시로 X = 5525이고 Y = 1255이면 X와 Y의 짝꿍은 X와 Y에서 공통으로 나타나는 2, 5, 5로 만들 수 있는 가장 큰 정수인 552입니다(X에는 5가 3개, Y에는 5가 2개 나타나므로 남는 5 한 개는 짝 지을 수 없습니다.)
// 두 정수 X, Y가 주어졌을 때, X, Y의 짝꿍을 return하는 solution 함수를 완성해주세요.

// 3 ≤ X, Y의 길이(자릿수) ≤ 3,000,000입니다.
// X, Y는 0으로 시작하지 않습니다.
// X, Y의 짝꿍은 상당히 큰 정수일 수 있으므로, 문자열로 반환합니다.

// X	        Y	        result
// "100"	,    "2345"	    "-1"
// "100"	,    "203045"	"0"
// "100"	,    "123450"	"10"
// "12321"	,    "42531"	    "321"
// "5525"	 ,   "1255"	    "552"

// X, Y의 짝꿍은 존재하지 않습니다. 따라서 "-1"을 return합니다.
// X, Y의 공통된 숫자는 0으로만 구성되어 있기 때문에, 두 수의 짝꿍은 정수 0입니다. 따라서 "0"을 return합니다.
// X, Y의 짝꿍은 10이므로, "10"을 return합니다.
// X, Y의 짝꿍은 321입니다. 따라서 "321"을 return합니다.

// step 1. 내림차순 정렬함
// step 2. X랑 Y에 둘다 공통으로 있는거 뽑아냄 응 시간초과

// const solution = function (X, Y) {
// 	const sortedX = X.split('').sort((a, b) => b - a);
// 	const sortedY = Y.split('').sort((a, b) => b - a);

// 	let arr = [];

// 	for (let i = 0; i < sortedX.length; i++) {
// 		for (let j = 0; j < sortedY.length; j++) {
// 			if (sortedX[i] === sortedY[j]) {
// 				arr.push(sortedX[i]);
// 				sortedX.splice(i, 1);
// 				sortedY.splice(j, 1);
// 				i--;
// 				break;
// 			}
// 		}
// 	}
// 	if (arr.length === 0) {
// 		return '-1';
// 	}
// 	if (arr.every((el) => el === '0')) {
// 		return '0';
// 	}
// 	return arr.join('');
// };

const solution = function (X, Y) {
	// 길이가 10 인 0으로 채워진 배열만듬
	const countX = Array(10).fill(0);
	const countY = Array(10).fill(0);

	// X에 나오는 숫자 개수 세기
	for (let digit of X) {
		countX[digit]++;
	}
	// Y에 나오는 숫자 개수 세기
	for (let digit of Y) {
		countY[digit]++;
	}
	// 각 인덱스별로 몇개 나왔는지 카운트 되어 있음
	let result = [];

	// 9부터 0까지 돌면서 공통 숫자 최대 개수만큼 넣기 (내림차순 만들기)
	for (let i = 9; i >= 0; i--) {
		const common = Math.min(countX[i], countY[i]);
		if (common > 0) {
			result.push(String(i).repeat(common));
		}
	}

	if (result.length === 0) return '-1';

	const resultStr = result.join('');

	// 모든 문자가 '0'인지 확인
	if ([...resultStr].every((char) => char === '0')) return '0';

	return resultStr;
};

console.log(solution('100', '2345'));
console.log(solution('100', '203045'));
console.log(solution('100', '123450'));
console.log(solution('12321', '42531'));
console.log(solution('5525', '1255'));
