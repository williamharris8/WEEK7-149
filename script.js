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

floor.addEventListener("click", function () {
  floor.style.backgroundColor = randomColor();
});

dancer.addEventListener("click", function (event) {
  event.stopPropagation();
  dancer.textContent = "💃";
});

window.addEventListener("keydown", function (event) {
  if (event.key === "ArrowUp") dancer.textContent = "🥳";
  if (event.key === "ArrowDown") dancer.textContent = "🪩";
  if (event.key === "ArrowLeft") dancer.textContent = "🎉";
  if (event.key === "ArrowRight") dancer.textContent = "🎶";

  if (event.key === "r") {
    floor.style.backgroundColor = "black";
    clearInterval(timerId);
  }
});
