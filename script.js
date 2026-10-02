function randomColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return "rgb(" + r + "," + g + "," + b + ")";
}

const timerId = setInterval(function () {
  panel1.style.backgroundColor = randomColor();
  panel2.style.backgroundColor = randomColor();
}, 1500);