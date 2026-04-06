// ✅ PAGE LOAD FADE
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("show");

  // PLAYER COUNT (only works if element exists)
  let countEl = document.getElementById("playerCount");
  if(countEl){
    let count = document.querySelectorAll(".player").length;
    countEl.innerText = "Total Players: " + count;
  }

  // ACTIVE TAB (bottom nav highlight)
  let links = document.querySelectorAll(".bottom-nav a");
  links.forEach(link => {
    if(link.href === window.location.href){
      link.style.color = "#ffdd00";
    }
  });

  // COUNTDOWN TIMER (only if exists)
  let countdownEl = document.getElementById("countdown");
  if(countdownEl){
    const matchDate = new Date("2026-04-09T19:15:00");

    setInterval(() => {
      let now = new Date();
      let diff = matchDate - now;

      if(diff <= 0){
        countdownEl.innerText = "LIVE 🔴";
        return;
      }

      let h = Math.floor(diff / (1000*60*60));
      let m = Math.floor((diff % (1000*60*60)) / (1000*60));
      let s = Math.floor((diff % (1000*60)) / 1000);

      countdownEl.innerText = `${h}h ${m}m ${s}s`;
    }, 1000);
  }
});


// ⚽ ANIMATED SOCCER BALLS
for(let i = 0; i < 10; i++){
  let ball = document.createElement("div");
  ball.className = "soccer-ball";

  ball.style.left = Math.random() * 100 + "vw";
  ball.style.animationDuration = (8 + Math.random() * 10) + "s";
  ball.style.opacity = Math.random() * 0.2;

  document.body.appendChild(ball);
}


// ✨ PARTICLES
for(let i = 0; i < 25; i++){
  let p = document.createElement("div");
  p.className = "particle";

  p.style.left = Math.random() * 100 + "vw";
  p.style.animationDuration = (5 + Math.random() * 10) + "s";

  document.body.appendChild(p);
}


// 🔊 CLICK SOUND EFFECT (optional but cool)
document.addEventListener("click", (e) => {
  if(e.target.matches("a, .btn, .player")){
    let audio = new Audio("https://www.myinstants.com/media/sounds/mouse-click.mp3");
    audio.volume = 0.2;
    audio.play();
  }
});
// PAGE TRANSITIONS
document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", function(e){
    let href = this.getAttribute("href");

    if(href && !href.startsWith("#")){
      e.preventDefault();

      document.body.classList.remove("show");

      setTimeout(() => {
        window.location = href;
      }, 300);
    }
  });
});
function updateClock(){
  let now = new Date();

  // Time (EST)
  let time = now.toLocaleTimeString("en-US", {
    timeZone: "America/New_York",
    hour: "2-digit",
    minute: "2-digit"
  });

  // Date
  let date = now.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric"
  });

  let timeEl = document.getElementById("clock-time");
  let dateEl = document.getElementById("clock-date");

  if(timeEl && dateEl){
    timeEl.innerText = time + " EST";
    dateEl.innerText = date;
  }
}

setInterval(updateClock, 1000);
updateClock();
