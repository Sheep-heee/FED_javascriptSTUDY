const table = document.querySelector("#gugugu");

for (let a = 0; a <= 9; a++) {
  const tr = document.createElement("tr");
  for (let b = 2; b <= 9; b++) {
    const td = document.createElement("td");
    td.innerText = `${a === 0 ? `${b}단` : `${b} * ${a} = ${a * b}`}`;
    tr.appendChild(td);
  }
  table.appendChild(tr);
}
