// 등수 매기기
// 영어 점수와 수학 점수의 평균 점수를 기준으로 학생들의 등수를 매기려고 합니다.
// 영어 점수와 수학 점수를 담은 2차원 정수 배열 score가 주어질 때,
// 영어 점수와 수학 점수의 평균을 기준으로 매긴 등수를 담은 배열을 return하도록 solution 함수를 완성해주세요.

// 0 ≤ score[0], score[1] ≤ 100
// 1 ≤ score의 길이 ≤ 10
// score의 원소 길이는 2입니다.
// score는 중복된 원소를 갖지 않습니다.
// score	result
// [[80, 70], [90, 50], [40, 70], [50, 80]]	[1, 2, 4, 3]
// [[80, 70], [70, 80], [30, 50], [90, 100], [100, 90], [100, 100], [10, 30]]	[4, 4, 6, 2, 2, 1, 7]

// 평균은 각각 75, 70, 55, 65 이므로 등수를 매겨 [1, 2, 4, 3]을 return합니다.
// 평균은 각각 75, 75, 40, 95, 95, 100, 20 이므로 [4, 4, 6, 2, 2, 1, 7] 을 return합니다.
// 공동 2등이 두 명, 공동 4등이 2명 이므로 3등과 5등은 없습니다.

// step 1. score의 각 배열을 돌며 eng 와 math 합or평균을 구한다.
// step 2.

const solution = function (score) {
	// 평균 계산
	const avgScores = score.map(([eng, math]) => (eng + math) / 2);

	// 점수와 인덱스를 함께 저장 하고 정렬
	const ranked = avgScores
		.map((avg, idx) => ({ avg, idx }))
		.sort((a, b) => b.avg - a.avg); // 평균 점수를 기준으로 내림차순 정렬

	const ranks = new Array(score.length).fill(0); // 등수를 저장할 배열
	let rank = 1; // 현재 등수
	for (let i = 0; i < ranked.length; i++) {
		if (i > 0 && ranked[i].avg !== ranked[i - 1].avg) {
			rank = i + 1; // 이전과 다른 점수면 등수 갱신
		}
		ranks[ranked[i].idx] = rank; // 원래 인덱스 위치에 등수 저장
	}

	return ranks;
};

console.log(
	solution([
		[80, 70],
		[90, 50],
		[40, 70],
		[50, 80],
	])
);
console.log(
	solution([
		[80, 70],
		[70, 80],
		[30, 50],
		[90, 100],
		[100, 90],
		[100, 100],
		[10, 30],
	])
);
