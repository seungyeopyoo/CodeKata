// 실패율
// 슈퍼 게임 개발자 오렐리는 큰 고민에 빠졌다. 그녀가 만든 프랜즈 오천성이 대성공을 거뒀지만, 요즘 신규 사용자의 수가 급감한 것이다. 원인은 신규 사용자와 기존 사용자 사이에 스테이지 차이가 너무 큰 것이 문제였다.

// 이 문제를 어떻게 할까 고민 한 그녀는 동적으로 게임 시간을 늘려서 난이도를 조절하기로 했다.
// 역시 슈퍼 개발자라 대부분의 로직은 쉽게 구현했지만, 실패율을 구하는 부분에서 위기에 빠지고 말았다. 오렐리를 위해 실패율을 구하는 코드를 완성하라.

// 실패율은 다음과 같이 정의한다.
// 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
// 전체 스테이지의 개수 N, 게임을 이용하는 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열 stages가 매개변수로 주어질 때,
// 실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열을 return 하도록 solution 함수를 완성하라.

// 제한사항
// 스테이지의 개수 N은 1 이상 500 이하의 자연수이다.
// stages의 길이는 1 이상 200,000 이하이다.
// stages에는 1 이상 N + 1 이하의 자연수가 담겨있다.
// 각 자연수는 사용자가 현재 도전 중인 스테이지의 번호를 나타낸다.
// 단, N + 1 은 마지막 스테이지(N 번째 스테이지) 까지 클리어 한 사용자를 나타낸다.
// 만약 실패율이 같은 스테이지가 있다면 작은 번호의 스테이지가 먼저 오도록 하면 된다.
// 스테이지에 도달한 유저가 없는 경우 해당 스테이지의 실패율은 0 으로 정의한다.

// N	            stages	                        result
// 5	    ,        [2, 1, 2, 6, 2, 4, 3, 3]	    [3,4,2,1,5]
// 4	    ,        [4,4,4,4,4]	                    [4,1,2,3]

// 1번 스테이지에는 총 8명의 사용자가 도전했으며, 이 중 1명의 사용자가 아직 클리어하지 못했다. 따라서 1번 스테이지의 실패율은 다음과 같다.
// 1 번 스테이지 실패율 : 1/8
// 2번 스테이지에는 총 7명의 사용자가 도전했으며, 이 중 3명의 사용자가 아직 클리어하지 못했다. 따라서 2번 스테이지의 실패율은 다음과 같다.
// 2 번 스테이지 실패율 : 3/7
// 마찬가지로 나머지 스테이지의 실패율은 다음과 같다.
// 3 번 스테이지 실패율 : 2/4
// 4번 스테이지 실패율 : 1/2
// 5번 스테이지 실패율 : 0/1
// 각 스테이지의 번호를 실패율의 내림차순으로 정렬하면 다음과 같다.
// [3,4,2,1,5]

// 모든 사용자가 마지막 스테이지에 있으므로 4번 스테이지의 실패율은 1이며 나머지 스테이지의 실패율은 0이다.
// [4,1,2,3]

// step 1. stages 순회하면서 각 stages당 몇명 있는지 객체로 저장한다.
// step 2. N까지 순회하며 step1의 스테이지당 인원을 기반으로 인원수 / stages.length 로 실패율을 계산한다.
// step 3. 정렬함 실패율이 같으면 낮은 스테이지가 앞에오게
// step 4. 실패율을 각 스테이지로 교체하여 return

const solution = function (N, stages) {
	const stageCount = {};

	for (let stage of stages) {
		stageCount[stage] = (stageCount[stage] || 0) + 1; // stages 순회하며 stageCount에 해당 키값이 없으면 벨류 0 +1 있으면 기존벨류+1
	}

	let total = stages.length;
	const failureRates = [];

	for (let i = 1; i <= N; i++) {
		let notClear = stageCount[i] || 0; // 해당 스테이지에 남아있는 인간 이것도 값이 없으면 0
		let failRate = total === 0 ? 0 : notClear / total; // 실패율 0 나오면 계산 안하고 그냥 0으로 함 0아니면 스테이지머문사람 / 해당 스테이지참여인원

		failureRates.push({ stage: i, failRate }); //객체를 배열에 push해버림 스테이지와 , 실패율 같이
		total -= notClear; // 다음 스테이지 참여인원은 이번스테이지에 머문 애들을 빼고 갱신
	}

	failureRates.sort((a, b) => {
		if (b.failRate !== a.failRate) return b.failRate - a.failRate; // 실패율이 다르면 실패율을 기준으로 내림차순 정렬 => 실패율 젤 높은게 앞으로
		return a.stage - b.stage; // 같으면 스테이지 기준으로 오름차순 정렬  => 같으면 스테이지 순서대로
	});

	return failureRates.map((el) => el.stage); // 정렬된 객체가 들어간 배열의 스테이지만 나오게 배열가공
};

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
console.log(solution(4, [4, 4, 4, 4, 4]));
