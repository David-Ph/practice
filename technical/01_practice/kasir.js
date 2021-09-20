function roundToHundred(number) {
  // if number == 5123
  // return 5100
  return Math.floor(number / 100) * 100;
}

function getChanges(payment, cost) {
  if (typeof payment !== "number" || typeof cost !== "number") {
    return console.log("Please input number only!");
  }
  if (payment < cost) {
    return console.log("Not enough payment!");
  }

  return roundToHundred(payment - cost);
}

function returnCash(payment, cost) {
  let seratusRibu = 0,
    limaPuluhRibu = 0,
    duaPuluhRibu = 0,
    sepuluhRibu = 0,
    limaRibu = 0,
    duaRibu = 0,
    seribu = 0,
    duaRatus = 0,
    seratus = 0;

  let changes = getChanges(payment, cost);
  let total = changes;

  while (changes > 100000) {
    changes -= 100000;
    seratusRibu++;
  }

  while (changes > 50000) {
    changes -= 50000;
    limaPuluhRibu++;
  }

  while (changes > 20000) {
    changes -= 20000;
    duaPuluhRibu++;
  }

  while (changes > 10000) {
    changes -= 10000;
    sepuluhRibu++;
  }

  while (changes > 5000) {
    changes -= 5000;
    limaRibu++;
  }

  while (changes > 2000) {
    changes -= 2000;
    duaRibu++;
  }

  while (changes > 1000) {
    changes -= 1000;
    seribu++;
  }

  while (changes > 200) {
    changes -= 200;
    duaRatus++;
  }

  while (changes >= 100) {
    changes -= 100;
    seratus++;
  }

  console.log(`
    Kembalimu ${total} dan dipecah menjadi
    100.000 ${seratusRibu} lembar, 
    50.000 ${limaPuluhRibu} lembar,
    20.000 ${duaPuluhRibu} lembar,
    10.000 ${sepuluhRibu} lembar,
    5.000 ${limaRibu} lembar,
    2.000 ${duaRibu} lembar,
    1.000 ${seribu} lembar,
    200 ${duaRatus} keping,
    100 ${seratus} keping
  `);
}

returnCash(350000, 78500);
