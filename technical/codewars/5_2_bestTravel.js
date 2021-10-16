// function chooseBestSum(t, k, ls) {
//   if (ls.length < k || ls.length < 1) {
//     return null;
//   }

//   const array = [];

//   for (let a = 0; a < Math.ceil(ls.length / k) + 1; a++) {
//     for (let b = a + 1; b < Math.ceil(ls.length / k) + 4; b++) {
//       const arrElement = [];
//       arrElement.push(ls[a]);

//       let c = b;
//       while (arrElement.length < k) {
//         arrElement.push(ls[c]);
//         c++;
//       }

//       array.push(arrElement);
//     }
//   }

//   let distance = 0;
//   for (let i = 0; i < array.length; i++) {
//     let total = array[i].reduce((total, number) => total + number, 0);
//     if (total >= distance && total <= t) {
//       distance = total;
//     }
//   }

//   return distance;
// }

function chooseBestSum(t, k, ls) {
  if (ls.length < k || ls.length < 1) {
    return null;
  }

  const array = combine(ls, k).filter((element) => {
    return element.length === k;
  });

  let distance = 0;

  for (let i = 0; i < array.length; i++) {
    let total = array[i].reduce((total, num) => total + num, 0);

    if (total >= distance && total <= t) {
      distance = total;
    }
  }

  return distance || null;
}

var combine = function (a, min) {
  var fn = function (n, src, got, all) {
    if (n == 0) {
      if (got.length > 0) {
        all[all.length] = got;
      }
      return;
    }
    for (var j = 0; j < src.length; j++) {
      fn(n - 1, src.slice(j + 1), got.concat([src[j]]), all);
    }
    return;
  };
  var all = [];
  for (var i = min; i < a.length; i++) {
    fn(i, a, [], all);
  }
  all.push(a);
  return all;
};

console.log(chooseBestSum(163, 3, [50, 55, 56, 57, 58])); // 163
console.log(chooseBestSum(163, 3, [50])); // null
console.log(chooseBestSum(331, 4, [91, 74, 73, 85, 73, 81, 87])); // 331
console.log(chooseBestSum(230, 3, [91, 74, 73, 85, 73, 81, 87])); // 228
console.log(chooseBestSum(331, 2, [91, 74, 73, 85, 73, 81, 87])); // 178
console.log(chooseBestSum(1843, 4, [189, 239, 332, 15, 37, 406, 306, 499])); // 1543
