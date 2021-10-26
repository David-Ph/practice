const vouchers = [
  { price: "10rb", point: 100 },
  { price: "25rb", point: 200 },
  { price: "50rb", point: 400 },
  { price: "100rb", point: 800 },
];

function redeemPoint(point) {
  let getVouchers = {};

  for (let i = vouchers.length - 1; i >= 0; i--) {
    while (point >= vouchers[i].point) {
      point -= vouchers[i].point;

      if (!getVouchers[vouchers[i].price]) {
        getVouchers[vouchers[i].price] = 0;
      }
      getVouchers[vouchers[i].price]++;
    }
  }

  let string = "Voucher ";
  for (const key in getVouchers) {
    string += `${key}, `;
  }
  return (string += `dengan sisa point adalah ${point}p`);
}

console.log(redeemPoint(1150)); // Voucher 100rb, 25rb, 10rb, dengan sisa point adalah 50p
