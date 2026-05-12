const envelope = document.getElementById("envelope");
const music = document.getElementById("music");

envelope.addEventListener("click", () => {
  envelope.classList.add("open");

  // music error bo‘lmasligi uchun
  if (music) {
    music.play().catch(()=>{});
  }
});

/* hearts */
function createHeart(){
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (Math.random() * 20 + 15) + "px";
  heart.style.animationDuration = (Math.random() * 3 + 4) + "s";

  document.querySelector(".hearts").appendChild(heart);

  setTimeout(() => heart.remove(), 7000);
}

setInterval(createHeart, 250);