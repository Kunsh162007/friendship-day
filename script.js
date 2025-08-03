function revealSurprise() {
  const name = document.getElementById("nameInput").value.trim();
  if (!name) return alert("Please enter your name!");
  
  document.getElementById("friendName").textContent = name;
  document.getElementById("surprise").classList.remove("hidden");

  const audio = document.getElementById("bg-music");
  audio.volume = 0.4;
  audio.play();
}

// For the download button
function downloadCard() {
  const name = document.getElementById("friendName").textContent;
  const link = document.createElement("a");
  const blob = new Blob([`Happy Friendship Day, ${name}!\nYou're awesome! 🎉`], { type: 'text/plain' });
  link.href = URL.createObjectURL(blob);
  link.download = `Friendship-Day-${name}.txt`;
  link.click();
}

// Animated star background
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");
let w = canvas.width = window.innerWidth;
let h = canvas.height = window.innerHeight;
let stars = [];

for (let i = 0; i < 150; i++) {
  stars.push({
    x: Math.random() * w,
    y: Math.random() * h,
    r: Math.random() * 1.5,
    d: Math.random() * 1
  });
}

function drawStars() {
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = "#00ffff";
  ctx.shadowBlur = 5;
  ctx.shadowColor = "#00ffff";
  for (let i = 0; i < stars.length; i++) {
    let s = stars[i];
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2, true);
    ctx.fill();
    s.y += s.d;
    if (s.y > h) {
      s.y = 0;
      s.x = Math.random() * w;
    }
  }
}

function animateStars() {
  drawStars();
  requestAnimationFrame(animateStars);
}

animateStars();
window.addEventListener("resize", () => {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
});
