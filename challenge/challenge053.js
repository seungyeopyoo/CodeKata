// 모의고사
// 수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

// 1번 수포자가 찍는 방식: 1, 2, 3, 4, 5,                        1, 2, 3, 4, 5, ...
// 2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5,               2, 1, 2, 3, 2, 4, 2, 5, ...
// 3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5,         3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

// 1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

// 시험은 최대 10,000 문제로 구성되어있습니다.
// 문제의 정답은 1, 2, 3, 4, 5중 하나입니다.
// 가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.

// answers	                                 return
// [1,2,3,4,5]	                            [1]
// [1,3,2,4,2]	                            [1,2,3]
// [1,4,3]
// [2,2,3,5,4,1,1,2,5,4,5,2,1,2,3,]
// [4]

// 수포자 1은 모든 문제를 맞혔습니다.
// 수포자 2는 모든 문제를 틀렸습니다.
// 수포자 3은 모든 문제를 틀렸습니다.
// 따라서 가장 문제를 많이 맞힌 사람은 수포자 1입니다.

// 모든 사람이 2문제씩을 맞췄습니다.

// step 1. 수포자들의 방식을 배열로 저장한다.
// step 2. 빈배열 만든다.  result
// step 3. count를 세개로 나누어서 저장한다. 각 수포자들
// step 4. answers의 길이만큼 step1 수포자 배열을 반복해서 나열함 answers[i]와 수포자배열[i % 수포자배열길이]가 일치하면 counts++한다.
// step 5. step3에서 최댓값을 구함 해당 값이 counts의 인덱스와 같으면 해당 인덱스+1를 2에 push 근데이거 다 0점이면 어카냐

const solution = function (answers) {
	const supozaOne = [1, 2, 3, 4, 5];
	const supozaTwo = [2, 1, 2, 3, 2, 4, 2, 5];
	const supozaThree = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

	const result = [];

	const counts = [0, 0, 0];

	for (let i = 0; i < answers.length; i++) {
		if (answers[i] === supozaOne[i % supozaOne.length]) counts[0]++;
		if (answers[i] === supozaTwo[i % supozaTwo.length]) counts[1]++;
		if (answers[i] === supozaThree[i % supozaThree.length]) counts[2]++;
	}

	const maxCount = Math.max(...counts);

	if (counts[0] === maxCount) result.push(1);
	if (counts[1] === maxCount) result.push(2);
	if (counts[2] === maxCount) result.push(3);

	return result;
};

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 3, 2, 4, 2]));
console.log(solution([1, 4, 3]));
console.log(solution([2, 2, 3, 5, 4, 1, 1, 2, 5, 4, 5, 2, 1, 2, 3]));
console.log(solution([4]));
