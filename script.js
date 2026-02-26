
const targetDate = new Date("April 20, 2026 08:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    document.getElementById("days").innerText = "00";
    document.getElementById("hours").innerText = "00";
    document.getElementById("minutes").innerText = "00";
    document.getElementById("seconds").innerText = "00";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = String(days).padStart(2, "0");
  document.getElementById("hours").innerText = String(hours).padStart(2, "0");
  document.getElementById("minutes").innerText = String(minutes).padStart(2, "0");
  document.getElementById("seconds").innerText = String(seconds).padStart(2, "0");
}

setInterval(updateCountdown, 1000);
updateCountdown();

const musik = document.getElementById("musik");
const musicBtn = document.getElementById("musicBtn");
let isPlaying = false;

// Fungsi toggle tombol
function toggleMusic() {
  if (!isPlaying) {
    musik.play();
    musicBtn.innerText = "🔈";
    isPlaying = true;
  } else {
    musik.pause();
    musicBtn.innerText = "🔊";
    isPlaying = false;
  }
}

// Tombol play / pause
musicBtn.addEventListener("click", function(e){
  e.stopPropagation(); // supaya tidak bentrok dgn auto play
  toggleMusic();
});

// AUTO PLAY saat user klik DIMANA SAJA di halaman
document.addEventListener("click", function autoPlay() {
  if (!isPlaying) {
    musik.play();
    musicBtn.innerText = "🔈";
    isPlaying = true;
  }
  document.removeEventListener("click", autoPlay);
});

