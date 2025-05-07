// N개의 최소공배수
// 두 수의 최소공배수(Least Common Multiple)란 입력된 두 수의 배수 중 공통이 되는 가장 작은 숫자를 의미합니다.
// 예를 들어 2와 7의 최소공배수는 14가 됩니다. 정의를 확장해서, n개의 수의 최소공배수는 n 개의 수들의 배수 중 공통이 되는 가장 작은 숫자가 됩니다.
// n개의 숫자를 담은 배열 arr이 입력되었을 때 이 수들의 최소공배수를 반환하는 함수, solution을 완성해 주세요.

// 제한 사항
// arr은 길이 1이상, 15이하인 배열입니다.
// arr의 원소는 100 이하인 자연수입니다.

// arr	                result
// [2,6,8,14]	        168       2         1  3  4  7      28 6     168
// [1,2,3]	            6

//최소 공배수를 구하는 방법은 크게 나눗셈 방법과 소인수 분해 방법이 있습니다. 나눗셈 방법은 각 수를 1 이외의 공약수로 나눠서 최소 공배수를 구하는 방법이고,  라고 나오네오  feat google

// step 1. arr을 순회하면서 arr[i]가 1이 될때까지 나눠준다.
// step 2. 나눠주는 매개는 2부터시작 하나도 나누지 못하면 1씩증가한다. // 하나라도 나누어지면 계속 곱해준다.
// step 3. arr의 모든 원소가 1이되면 break

// 나눗셈 방법으로 최소공배수 구하기
const solution = function (arr) {
	// 배열 복사 (원본 변경 방지)
	let workArr = [...arr];

	// 최소공배수를 저장할 변수
	let answer = 1;

	// 나눌 수 (2부터 시작)
	let divisor = 2;

	while (true) {
		// divisor로 나눠지는 숫자가 있는지 확인
		let isDivided = false;

		for (let i = 0; i < workArr.length; i++) {
			if (workArr[i] % divisor === 0) {
				workArr[i] /= divisor;
				isDivided = true;
			}
		}

		// 하나라도 나눠졌으면 answer에 곱함
		if (isDivided) {
			answer *= divisor;
		} else {
			// 안 나눠졌으면 다음 숫자로 넘어감
			divisor++;
		}

		// workArr에 모든 수가 1이면 종료
		if (workArr.every((num) => num === 1)) break;
	}

	return answer;
};

console.log(solution([2, 6, 8, 14]));
console.log(solution([1, 2, 3]));
