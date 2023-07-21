function bouncingBall(h: number, bounce: number, window: number): number {
  if (h <= 0 || bounce >= 1 || bounce <= 0 || window >= h) {
    return -1;
  }

  let count = 0;

  while (h > window) {
    count += 1;
    h *= bounce;
    if (h > window) {
      count += 1;
    }
  }

  return count;
}

console.log(bouncingBall(3, 0.66, 1.5)); // 3
console.log(bouncingBall(40, 0.4, 10)); // 3
console.log(bouncingBall(10, 0.6, 10)); // -1
console.log(bouncingBall(40, 1, 10)); // -1
console.log(bouncingBall(5, -1, 1.5)); // -1
