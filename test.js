let number = [-1, 1, -1, 1];
let count = 0;
for (let i = 0; i < number.length - 2; i++) {
	for (let j = i + 1; j < number.length - 1; j++) {
		for (let k = j + 1; k < number.length; k++) {
			console.log(`i: ${i}, j: ${j}, k: ${k}`);
			count++;
		}
	}
}
console.log(`${count}`);
