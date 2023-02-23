const input = document.getElementById("input");
const btn = document.querySelector(".btn");
const body = document.querySelector("#body");
const randomNum = Math.round(Math.random() * 100);
const img = document.getElementsByTagName("img");
const win = document.querySelector(".win");
const span = document.querySelector(".span");
const refresh = document.getElementById("refresh");
const h3 = document.getElementById("h3");

let counter = 0;
let y = 1;
let e = 100;

input.addEventListener("keydown", (z) => {
  if (z.key === "Enter") {
    btn.click();
  }
});

btn.addEventListener("click", () => {
  let x = input.value;

  if (0 < x && x <= 100) {
    counter++;
    if (x < 1 || x > 100) {
      alert("please enter a number between 1-100");
    } else if (randomNum > x) {
      y = x;
      alert("up");

      span.textContent = counter;
      win.textContent = `${y} - ${e}`;
    } else if (randomNum < x) {
      e = x;
      alert("Down");
      span.textContent = counter;
      win.textContent = `${y} - ${e}`;
    } else if (x === randomNum) {
      alert("Marvelous");
      body.style.backgroundImage =
        "https://media.istockphoto.com/id/1361394182/photo/funny-british-shorthair-cat-portrait-looking-shocked-or-surprised.jpg?b=1&s=170667a&w=0&k=20&c=nOa1R7PGaqOaQscx10FpA5ZNenMeDfs-k6VgmmuY4cc=";
    }
  } else {
    alert("please enter a number between 1-100");
  }
  input.focus();
});

refresh.addEventListener("click", () => window.location.reload());
