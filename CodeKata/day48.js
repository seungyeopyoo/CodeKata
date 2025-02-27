// K번째수

// 배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.

// 예를 들어 array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면

// array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.
// 1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다.
// 2에서 나온 배열의 3번째 숫자는 5입니다.
// 배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때,
// commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return 하도록 solution 함수를 작성해주세요.

// array의 길이는 1 이상 100 이하입니다.
// array의 각 원소는 1 이상 100 이하입니다.
// commands의 길이는 1 이상 50 이하입니다.
// commands의 각 원소는 길이가 3입니다.

// array                          	commands	                return
// [1, 5, 2, 6, 3, 7, 4]	[[2, 5, 3], [4, 4, 1], [1, 7, 3]]	[5, 6, 3]

// [1, 5, 2, 6, 3, 7, 4]를 2번째부터 5번째까지 자른 후 정렬합니다. [2, 3, 5, 6]의 세 번째 숫자는 5입니다.
// [1, 5, 2, 6, 3, 7, 4]를 4번째부터 4번째까지 자른 후 정렬합니다. [6]의 첫 번째 숫자는 6입니다.
// [1, 5, 2, 6, 3, 7, 4]를 1번째부터 7번째까지 자릅니다. [1, 2, 3, 4, 5, 6, 7]의 세 번째 숫자는 3입니다.

function solution(array, commands) {
	// 결과를 저장할 배열
	let answer = [];

	// commands 배열을 순회하며 각 명령을 처리
	commands.forEach((command) => {
		// i, j, k 값을 command 배열에서 추출
		let i = command[0];
		let j = command[1];
		let k = command[2];

		// 배열의 i번째부터 j번째까지 자르기 (i는 1부터 시작하므로 인덱스 조정 필요)
		let slicedArray = array.slice(i - 1, j);

		// 자른 배열을 정렬
		slicedArray.sort((a, b) => a - b);

		// 정렬된 배열에서 k번째 숫자 추출 (k는 1부터 시작하므로 인덱스 조정 필요)
		let result = slicedArray[k - 1];

		// 결과 배열에 추가
		answer.push(result);
	});

	// 최종 결과 반환
	return answer;
}

// 테스트 예제
let array = [1, 5, 2, 6, 3, 7, 4];
let commands = [
	[2, 5, 3],
	[4, 4, 1],
	[1, 7, 3],
];

console.log(solution(array, commands)); // [5, 6, 3]
