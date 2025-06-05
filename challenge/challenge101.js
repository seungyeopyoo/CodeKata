// 달리기 경주
// 얀에서는 매년 달리기 경주가 열립니다. 해설진들은 선수들이 자기 바로 앞의 선수를 추월할 때 추월한 선수의 이름을 부릅니다.
// 예를 들어 1등부터 3등까지 "mumu", "soe", "poe" 선수들이 순서대로 달리고 있을 때, 해설진이 "soe"선수를 불렀다면 2등인 "soe" 선수가 1등인 "mumu" 선수를 추월했다는 것입니다. 즉 "soe" 선수가 1등, "mumu" 선수가 2등으로 바뀝니다.

// 선수들의 이름이 1등부터 현재 등수 순서대로 담긴 문자열 배열 players와 해설진이 부른 이름을 담은 문자열 배열 callings가 매개변수로 주어질 때, 경주가 끝났을 때 선수들의 이름을 1등부터 등수 순서대로 배열에 담아 return 하는 solution 함수를 완성해주세요.

// 제한사항
// 5 ≤ players의 길이 ≤ 50,000
// players[i]는 i번째 선수의 이름을 의미합니다.
// players의 원소들은 알파벳 소문자로만 이루어져 있습니다.
// players에는 중복된 값이 들어가 있지 않습니다.
// 3 ≤ players[i]의 길이 ≤ 10
// 2 ≤ callings의 길이 ≤ 1,000,000
// callings는 players의 원소들로만 이루어져 있습니다.
// 경주 진행중 1등인 선수의 이름은 불리지 않습니다.

// players	                                callings	                    result
// ["mumu", "soe", "poe", "kai", "mine"]	,["kai", "kai", "mine", "mine"]	["mumu", "kai", "mine", "soe", "poe"]

// 4등인 "kai" 선수가 2번 추월하여 2등이 되고 앞서 3등, 2등인 "poe", "soe" 선수는 4등, 3등이 됩니다. 5등인 "mine" 선수가 2번 추월하여 4등, 3등인 "poe", "soe" 선수가 5등, 4등이 되고 경주가 끝납니다. 1등부터 배열에 담으면 ["mumu", "kai", "mine", "soe", "poe"]이 됩니다.

//step 1. callings 배열을 순회하며 각인덱스 별로 players에서 indexof 하여 players 배열을 가공한다.

// const solution = function (players, callings) {
// 	for (let i = 0; i < callings.length; i++) {
// 		let idx = players.indexOf(callings[i]);

// 		let temp = players[idx - 1];

// 		players[idx - 1] = players[idx];
// 		players[idx] = temp;
// 	}
// 	return players;
// }; 시간초과

//객체로 이름 순위를 미리매핑하여 위치만 바꿔준느 것이 매순회마다 indexOf로 순위를 구하는 것보다 훨씬 효율적
const solution1 = function (players, callings) {
	// 선수 이름 -> 현재 등수(index) 저장
	const rank = {};
	players.forEach((name, idx) => {
		rank[name] = idx;
	});

	for (let i = 0; i < callings.length; i++) {
		const called = callings[i];
		const curIdx = rank[called]; // 현재 등수
		const prevIdx = curIdx - 1;
		const prevPlayer = players[prevIdx]; // 앞사람

		// 위치 바꾸기
		[players[prevIdx], players[curIdx]] = [
			players[curIdx],
			players[prevIdx],
		];

		// 등수 정보도 업데이트
		rank[called] = prevIdx;
		rank[prevPlayer] = curIdx;
	}

	return players;
};

console.log(
	solution1(
		['mumu', 'soe', 'poe', 'kai', 'mine'],
		['kai', 'kai', 'mine', 'mine']
	)
);
