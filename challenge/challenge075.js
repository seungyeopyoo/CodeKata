// 카펫
// Leo는 카펫을 사러 갔다가 아래 그림과 같이 중앙에는 노란색으로 칠해져 있고 테두리 1줄은 갈색으로 칠해져 있는 격자 모양 카펫을 봤습니다.
// Leo는 집으로 돌아와서 아까 본 카펫의 노란색과 갈색으로 색칠된 격자의 개수는 기억했지만, 전체 카펫의 크기는 기억하지 못했습니다.
// Leo가 본 카펫에서 갈색 격자의 수 brown, 노란색 격자의 수 yellow가 매개변수로 주어질 때 카펫의 가로, 세로 크기를 순서대로 배열에 담아 return 하도록 solution 함수를 작성해주세요.

// 갈색 격자의 수 brown은 8 이상 5,000 이하인 자연수입니다.
// 노란색 격자의 수 yellow는 1 이상 2,000,000 이하인 자연수입니다.
// 카펫의 가로 길이는 세로 길이와 같거나, 세로 길이보다 깁니다.

// brown	yellow	    return
// 10	  ,  2	        [4, 3]
// 8	  ,  1	        [3, 3]
// 24	  ,  24	        [8, 6]

// step 1. 전체 타일의 크기를 구한다 brown + yellow
// step 2. for문을 순회하며  w * h === brown + yellow 인 경우, (w - 2) * (h - 2) == yellow 인 경우

const solution = function (brown, yellow) {
	const total = brown + yellow;
	// 세로가 최소 3은 되어야 안에 yellow가 하나라도 생길 수 있음
	for (let height = 3; height <= Math.sqrt(total); height++) {
		if (total % height === 0) {
			const width = total / height;

			// 각태두리는 갈색이니까 상하좌우 각 -1 씩
			if ((width - 2) * (height - 2) === yellow) {
				return [width, height];
			}
		}
	}
};

console.log(solution(10, 2));
console.log(solution(8, 1));
console.log(solution(24, 24));
