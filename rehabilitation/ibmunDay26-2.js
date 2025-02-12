// 삼각형의 완성조건 (2)
// 선분 세 개로 삼각형을 만들기 위해서는 다음과 같은 조건을 만족해야 합니다.

// 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.
// 삼각형의 두 변의 길이가 담긴 배열 sides이 매개변수로 주어집니다.
// 나머지 한 변이 될 수 있는 정수의 개수를 return하도록 solution 함수를 완성해주세요.

// sides의 원소는 자연수입니다.
// sides의 길이는 2입니다.
// 1 ≤ sides의 원소 ≤ 1,000
// sides	result
// [1, 2]	,1                          2  < 1 + x            2              x   < 1 + 2
// [3, 6]	,5                          6  < 3 + x            456            6+3 > x   7 8
// [11, 7]	,13                         11 < 7 + x            567891011      11 + 7 > x

// 두 변이 1, 2 인 경우 삼각형을 완성시키려면 나머지 한 변이 2여야 합니다. 따라서 1을 return합니다.

// 가장 긴 변이 6인 경우
// 될 수 있는 나머지 한 변은 4, 5, 6 로 3개입니다.
// 나머지 한 변이 가장 긴 변인 경우
// 될 수 있는 한 변은 7, 8 로 2개입니다.
// 따라서 3 + 2 = 5를 return합니다.

// 가장 긴 변이 11인 경우
// 될 수 있는 나머지 한 변은 5, 6, 7, 8, 9, 10, 11 로 7개입니다.
// 나머지 한 변이 가장 긴 변인 경우
// 될 수 있는 한 변은 12, 13, 14, 15, 16, 17 로 6개입니다.
// 따라서 7 + 6 = 13을 return합니다.

// step 1. sides의 인덱스중 큰거 작은거 찾는다 Math.max
// step 2. 큰거 < 작은거 + i 인데 i는 큰거 보다 작거나 같아야함.
// step 3. i는 큰거보다 커야하고 sides의 두 합은 i보다 커야한다.

const solution = function (sides) {
	const bigNum = Math.max(...sides);
	const smallNum = Math.min(...sides);

	let answer1 = bigNum - (bigNum - smallNum + 1);

	let answer2 = smallNum + bigNum - bigNum;

	return answer1 + answer2;
};

console.log(solution([1, 2]));
console.log(solution([3, 6]));
console.log(solution([11, 7]));
