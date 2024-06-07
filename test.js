let solution = function (n) {
    let measure = [];
    for (i = 1; i < n; i++) {
        if (n % i === 0) {
            measure.push(i);
        }
    }
    return measure.length;
}
console.log(solution(10));

