const htmlString = `<div><div><p>Hello</p><div><div>`;

const htmlString_2 = `
  <div>
  <div>
    <p>Hello</p>
  <div>
  <div>
`;

const htmlString_3 = `<div><div><div><p>Hello</p><div><div><div><div><p>Hello</p><div><div><div>`;

function fixHtml_2(input: string): string {
  let divNeedsToBeClosed = false;
  let fixedHtml = "";
  let divCountdown = 0;

  for (let i = 0; i < input.length - 1; i++) {
    if (input.slice(i, i + "<div>".length) === "<div>") {
      if (divNeedsToBeClosed) {
        divNeedsToBeClosed = false;
        divCountdown = 6;
        fixedHtml += "</div>";
      } else {
        divNeedsToBeClosed = true;
        divCountdown = 5;
        fixedHtml += "<div>";
      }
    }

    if (divCountdown > 0) {
      divCountdown--;
      continue;
    }

    fixedHtml += input[i];
  }

  return fixedHtml;
}

function fixHtml(input: string): string {
  let htmlArray = input.split(/(<div>)/g);

  let divNeedsToBeClosed = false;
  htmlArray = htmlArray.map((el) => {
    if (el === "<div>") {
      if (divNeedsToBeClosed) {
        divNeedsToBeClosed = false;
        return "</div>";
      } else {
        divNeedsToBeClosed = true;
        return el;
      }
    }
    return el;
  });

  return htmlArray.join("");
}

// console.log(fixHtml(htmlString_3));
console.log(fixHtml_2(htmlString));
