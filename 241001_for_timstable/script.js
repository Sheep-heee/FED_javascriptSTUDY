for (let a = 2; a <= 9; a++) {
  for (let b = 1; b <= 9; b++) {
    document.write(`${a} * ${b} = ${a * b}`);
    document.write(b === 9 ? "<br/>" : " / ");
  }
}
