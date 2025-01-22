// Lấy các phần tử cần thiết
const avatar = document.getElementById("avatar");
const music = document.getElementById("music");

// Bắt sự kiện khi trang web tải xong
window.onload = function() {
  // Cố gắng phát nhạc khi trang được tải
  music.play().catch(function(error) {
    console.log("Autoplay failed, click to start music:", error);
  });

  // Thêm sự kiện click vào ảnh đại diện để tạm dừng/tiếp tục xoay và nhạc
  avatar.addEventListener("click", function() {
    // Kiểm tra nếu nhạc đang phát hay không
    if (music.paused) {
      // Nếu nhạc bị dừng, phát nhạc và bắt đầu xoay
      music.play();
      avatar.classList.add("rotating");
    } else {
      // Nếu nhạc đang phát, dừng nhạc và dừng xoay avatar
      music.pause();
      avatar.classList.remove("rotating");
    }
  });
};


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
  

  