function solution(input: string, markers: string[]): string {
  const split = input.split("\n");
  const remove = split.map((el) => {
    if (el.length === 1) return el;

    let indexOf = el.length;

    markers.forEach((mark) => {
      const findIndex = el.indexOf(mark);
      if (findIndex >= 0 && findIndex < indexOf) {
        indexOf = findIndex;
      }
    });
    return el.slice(0, indexOf);
  });
  const trim = remove.map((el) => el.trim());

  return trim.join("\n");
}

console.log(
  solution("apples, plums % and bananas\npears\noranges !applesauce", [
    "%",
    "!",
  ])
); // apples, plums\npears\noranges"

// console.log(solution("Q @b\nu\ne -e f g", ["@", "-"])); // Q\nu\ne
