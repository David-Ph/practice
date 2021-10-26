let vouchers = [
  { price: "10rb, ", point: 100 },
  { price: "25rb, ", point: 200 },
  { price: "50rb, ", point: 400 },
  { price: "100rb, ", point: 800 },
];

function redeemPoint(point) {
  let getVouchers = {};

  vouchers = vouchers.sort((a, b) => b.point - a.point);

  for (const element of vouchers) {
    while (point >= element.point) {
      point -= element.point;

      if (!getVouchers[element.price]) {
        getVouchers[element.price] = 0;
      }

      getVouchers[element.price]++;
    }
  }

  let string = "Voucher ";
  for (let [key, value] of Object.entries(getVouchers)) {
    string += `${key.repeat(value)}`;
  }
  return (string += `dengan sisa point adalah ${point}p`);
}

console.log(redeemPoint(1150)); // Voucher 100rb, 25rb, 10rb, dengan sisa point adalah 50p
console.log(redeemPoint(2000)); // Voucher 100rb, 100rb, 50rb, dengan sisa point adalah 0p
