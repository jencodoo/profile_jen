const music = new Audio('music.mp3'); // Replace 'music.mp3' with your audio file path
const musicControl = document.getElementById('music-control');

let isPlaying = false;

// Play/Pause Music
musicControl.addEventListener('click', () => {
  if (isPlaying) {
    music.pause();
    musicControl.textContent = '▶ Play Music';
  } else {
    music.play();
    musicControl.textContent = '⏸ Pause Music';
  }
  isPlaying = !isPlaying;
});

// Automatically play music on page load (optional)
window.addEventListener('load', () => {
  music.play();
  isPlaying = true;
  musicControl.textContent = '⏸ Pause Music';
});


// Mảng chứa các màu gradient
const gradients = [
    "linear-gradient(to right, #FFB6A6, #A8E6CF)",  // Cam đào pastel và Xanh bạc hà
    "linear-gradient(to right, #128b94, #4B9CD3)",  // Xanh lam
    "linear-gradient(to right, #9B4DCA, #A8E6CF)",  // Tím và Xanh bạc hà
    "linear-gradient(to right, #FF9A9E, #FFB6A6)"   // Đỏ pastel và Cam đào pastel
  ];
  
  let currentGradientIndex = 0;
  
  // Lấy phần tử profile-header
  const profileHeader = document.querySelector('.profile-header');
  
  // Thiết lập thời gian thay đổi màu nền mỗi 2 giây
  setInterval(() => {
    // Thay đổi màu nền cho profile-header
    profileHeader.style.background = gradients[currentGradientIndex];
  
    // Cập nhật index để vòng lại màu sắc
    currentGradientIndex = (currentGradientIndex + 1) % gradients.length;
  }, 2000);  // 2000ms = 2 giây
  

  document.getElementById('see-more-btn').addEventListener('click', function() {
    const listItems = document.querySelectorAll('#skill-list li:nth-child(n+6)');
    listItems.forEach(item => item.style.display = 'list-item');
    this.style.display = 'none'; // Hide the button after clicking
  });
  

  