// 롤케이크 자르기
// 철수는 롤케이크를 두 조각으로 잘라서 동생과 한 조각씩 나눠 먹으려고 합니다. 이 롤케이크에는 여러가지 토핑들이 일렬로 올려져 있습니다.
// 철수와 동생은 롤케이크를 공평하게 나눠먹으려 하는데, 그들은 롤케이크의 크기보다 롤케이크 위에 올려진 토핑들의 종류에 더 관심이 많습니다.
// 그래서 잘린 조각들의 크기와 올려진 토핑의 개수에 상관없이 각 조각에 동일한 가짓수의 토핑이 올라가면 공평하게 롤케이크가 나누어진 것으로 생각합니다.

// 예를 들어, 롤케이크에 4가지 종류의 토핑이 올려져 있다고 합시다.
// 토핑들을 1, 2, 3, 4와 같이 번호로 표시했을 때, 케이크 위에 토핑들이 [1, 2, 1, 3, 1, 4, 1, 2] 순서로 올려져 있습니다.
// 만약 세 번째 토핑(1)과 네 번째 토핑(3) 사이를 자르면 롤케이크의 토핑은 [1, 2, 1], [3, 1, 4, 1, 2]로 나뉘게 됩니다.
//  철수가 [1, 2, 1]이 놓인 조각을, 동생이 [3, 1, 4, 1, 2]가 놓인 조각을 먹게 되면 철수는 두 가지 토핑(1, 2)을 맛볼 수 있지만, 동생은 네 가지 토핑(1, 2, 3, 4)을 맛볼 수 있으므로, 이는 공평하게 나누어진 것이 아닙니다.
// 만약 롤케이크의 네 번째 토핑(3)과 다섯 번째 토핑(1) 사이를 자르면 [1, 2, 1, 3], [1, 4, 1, 2]로 나뉘게 됩니다. 이 경우 철수는 세 가지 토핑(1, 2, 3)을, 동생도 세 가지 토핑(1, 2, 4)을 맛볼 수 있으므로, 이는 공평하게 나누어진 것입니다.
// 공평하게 롤케이크를 자르는 방법은 여러가지 일 수 있습니다. 위의 롤케이크를 [1, 2, 1, 3, 1], [4, 1, 2]으로 잘라도 공평하게 나뉩니다. 어떤 경우에는 롤케이크를 공평하게 나누지 못할 수도 있습니다.

// 롤케이크에 올려진 토핑들의 번호를 저장한 정수 배열 topping이 매개변수로 주어질 때, 롤케이크를 공평하게 자르는 방법의 수를 return 하도록 solution 함수를 완성해주세요.

// 1 ≤ topping의 길이 ≤ 1,000,000
// 1 ≤ topping의 원소 ≤ 10,000

// topping	                            result
// [1, 2, 1, 3, 1, 4, 1, 2]	            2
// [1, 2, 3, 1, 4]                  	0
// 입출력 예 설명
// 입출력 예 #1
// 롤케이크를 [1, 2, 1, 3], [1, 4, 1, 2] 또는 [1, 2, 1, 3, 1], [4, 1, 2]와 같이 자르면 철수와 동생은 각각 세 가지 토핑을 맛볼 수 있습니다. 이 경우 공평하게 롤케이크를 나누는 방법은 위의 두 가지만 존재합니다.
// 입출력 예 #2
// 롤케이크를 공평하게 나눌 수 없습니다.

// step 1. for문으로 slice 하면서 자른것끼리 (앞토핑 뒤토핑) 비교
// step 2. step1에 set 사용하여 중복제거 하고  size로 비교  for문 순회중에 size가 같을떄마다 result++
// step 3. 다 순회하면 return result

// const solution = function (topping) {
// 	let result = 0;

// 	for (let i = 1; i < topping.length; i++) {
// 		let frontTopping = new Set(topping.slice(0, i));

// 		let behindTopping = new Set(topping.slice(i));

// 		if (frontTopping.size === behindTopping.size) {
// 			result++;
// 		}
// 	}
// 	return result;
// };

const solution = (topping) => {
	const leftMap = new Map();
	const rightMap = new Map();

	const leftCount = new Array(topping.length).fill(0);
	const rightCount = new Array(topping.length).fill(0);

	// 왼쪽 → 오른쪽: 각 인덱스까지 토핑 종류 수 저장
	let kinds = 0;
	for (let i = 0; i < topping.length; i++) {
		if (!leftMap.has(topping[i])) {
			kinds++;
			leftMap.set(topping[i], 1);
		}
		leftCount[i] = kinds;
	}

	// 오른쪽 ← 왼쪽: 각 인덱스부터 끝까지 토핑 종류 수 저장
	kinds = 0;
	for (let i = topping.length - 1; i >= 0; i--) {
		if (!rightMap.has(topping[i])) {
			kinds++;
			rightMap.set(topping[i], 1);
		}
		rightCount[i] = kinds;
	}

	// 자를 수 있는 위치는 i (0부터 n-2까지)
	let result = 0;
	for (let i = 0; i < topping.length - 1; i++) {
		if (leftCount[i] === rightCount[i + 1]) {
			result++;
		}
	}

	return result;
};

console.log(solution([1, 2, 1, 3, 1, 4, 1, 2]));
console.log(solution([1, 2, 3, 1, 4]));
