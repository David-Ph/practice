function getSum(a, b) {
    if (a === b) return a;

    let total = 0;
    if (a > b) {
        for (let i = a; i >= b; i--) {
        total += i;
        }
    } else {
        for (let i = a; i <= b; i++) {
        total += i;
        }
    }

    return total;
}

console.log(getSum(0, 1));
