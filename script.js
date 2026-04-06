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
