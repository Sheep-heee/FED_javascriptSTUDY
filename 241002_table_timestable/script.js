document.write("<table>");

for (let a = 2; a <= 9; a++) {
  document.write("<tr>");
  document.write(`<td>${a}단</td>`);
  for (let b = 1; b <= 9; b++) {
    document.write(`<td>${a} * ${b} = ${a * b}</td>`);
    document.write(b === 9 ? "</tr>" : "");
  }
}

document.write("</table>");
