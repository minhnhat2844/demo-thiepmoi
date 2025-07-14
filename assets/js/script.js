function openEnvelope() {
  localStorage.setItem("shouldPlayMusic", "true");
  document.querySelector('.envelope-image-wrapper').style.opacity = 0;
  setTimeout(() => {
    window.location.href = "invitation.html";
  }, 700);
}

const audio = document.getElementById('bgm');
const toggleBtn = document.getElementById('toggleAudio');
const audioIcon = document.getElementById('audioIcon');
let playing = false;

document.addEventListener('DOMContentLoaded', () => {
  const shouldPlay = localStorage.getItem("shouldPlayMusic") === "true";

  if (shouldPlay && audio) {
    localStorage.removeItem("shouldPlayMusic");
    setTimeout(() => {
      audio.volume = 0.5;
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          playing = true;
          audioIcon.className = 'fa-solid fa-volume-high';
        }).catch(() => {
          playing = false;
          audioIcon.className = 'fa-solid fa-volume-xmark';
        });
      }
    }, 200);
  }

  if (typeof Swiper !== 'undefined') {
    new Swiper('.swiper', {
      loop: true,
      autoplay: { delay: 3000 },
      pagination: { el: '.swiper-pagination', clickable: true },
    });
  }
});

toggleBtn?.addEventListener('click', () => {
  if (!audio) return;
  if (playing) {
    audio.pause();
    audioIcon.className = 'fa-solid fa-volume-xmark';
  } else {
    audio.play();
    audioIcon.className = 'fa-solid fa-volume-high';
  }
  playing = !playing;
});