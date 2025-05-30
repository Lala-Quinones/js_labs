function sumAll (numberArr) {
    const n = numberArr[0];
    const m = numberArr[1];
    const min = Math.min(n, m);
    const max = Math.max(n, m);
    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
}