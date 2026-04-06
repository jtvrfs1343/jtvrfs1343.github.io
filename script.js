document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("show");
});
// Soccer balls generator
for(let i = 0; i < 12; i++){
  let ball = document.createElement("div");
  ball.className = "soccer-ball";

  ball.style.left = Math.random() * 100 + "vw";
  ball.style.animationDuration = (8 + Math.random() * 10) + "s";
  ball.style.opacity = Math.random() * 0.2;

  document.body.appendChild(ball);
}
// Particles
for(let i = 0; i < 30; i++){
  let p = document.createElement("div");
  p.className = "particle";

  p.style.left = Math.random() * 100 + "vw";
  p.style.animationDuration = (5 + Math.random() * 10) + "s";

  document.body.appendChild(p);
}
document.querySelectorAll("a, .btn, .player").forEach(el => {
  el.addEventListener("click", () => {
    let audio = new Audio("https://www.myinstants.com/media/sounds/mouse-click.mp3");
    audio.volume = 0.2;
    audio.play();
  });
});
setInterval(() => {
  let now = new Date();
  document.getElementById("clock").innerText =
    now.toLocaleTimeString();
}, 1000);
const quotes = [
  "Play fast. Think faster.",
  "DMA never loses ⚽",
  "Train hard. Win easy.",
  "Legends are built here."
];

document.getElementById("quote").innerText =
  quotes[Math.floor(Math.random() * quotes.length)];
let count = document.querySelectorAll(".player").length;
let el = document.getElementById("playerCount");
if(el){
  el.innerText = "Total Players: " + count;
}
