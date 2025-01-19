// 개미 군단
// 개미 군단이 사냥을 나가려고 합니다. 개미군단은 사냥감의 체력에 딱 맞는 병력을 데리고 나가려고 합니다.
//  장군개미는 5의 공격력을, 병정개미는 3의 공격력을 일개미는 1의 공격력을 가지고 있습니다.
// 예를 들어 체력 23의 여치를 사냥하려고 할 때, 일개미 23마리를 데리고 가도 되지만,
// 장군개미 네 마리와 병정개미 한 마리를 데리고 간다면 더 적은 병력으로 사냥할 수 있습니다.
// 사냥감의 체력 hp가 매개변수로 주어질 때, 사냥감의 체력에 딱 맞게 최소한의 병력을 구성하려면
// 몇 마리의 개미가 필요한지를 return하도록 solution 함수를 완성해주세요.
// hp	result
// 23	5
// 24	6
// 999	201

// hp가 23이므로, 장군개미 네마리와 병정개미 한마리로 사냥할 수 있습니다. 따라서 5를 return합니다.
// hp가 24이므로, 장군개미 네마리 병정개미 한마리 일개미 한마리로 사냥할 수 있습니다. 따라서 6을 return합니다.
// hp가 999이므로, 장군개미 199 마리 병정개미 한마리 일개미 한마리로 사냥할 수 있습니다. 따라서 201을 return합니다.

// step 1. 5 3 1 이 주어진다.
// step 2. 5를 매우 퍼붓고 나머지를 3 1로 매꾸는방식으로 해보자
// step 3. 5로 나누어서 정수 몫을  저장
// step 4. 3으로 나누어서 정수 몫을 저장
// step 5. 남은 hp는 1로 나눌필요없고 걍 그게 일개미 수량임
// step 6. 몫 끼리 더하기 return

const solution = function (hp) {
	let general = Math.floor(hp / 5);
	let remains = hp % 5;

	let soldier = Math.floor(remains / 3);
	remains = remains % 3;
	let scv = remains;

	return general + soldier + scv;
};
console.log(solution(23));
console.log(solution(24));
console.log(solution(999));

//if 문을 사용해야한다고 생각했는데 어차피 math.floor해서 더 작으면 0을 반환해서 필요가없었다.
