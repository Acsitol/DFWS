let currentUser = null;
let images = [];
let currentIndex = 0;
let sliderInterval;
let longPressTimer;

function login() {
  const username = document.getElementById('username').value.trim();
  if (username === "") return alert("ユーザー名を入力してください。");

  currentUser = username;
  document.getElementById('loginContainer').classList.add('hidden');
  document.getElementById('appContainer').classList.remove('hidden');
  startSlider();
}

function logout() {
  location.reload();
}

function uploadImage() {
  const input = document.getElementById('imageUpload');
  if (input.files.length === 0) return alert("画像を選択してください。");

  const file = input.files[0];
  const reader = new FileReader();

  reader.onload = function(e) {
    const img = new Image();
    img.src = e.target.result;
    img.dataset.uploader = currentUser;

    img.addEventListener('touchstart', startLongPress);
    img.addEventListener('touchend', clearLongPress);
    img.addEventListener('mousedown', startLongPress);
    img.addEventListener('mouseup', clearLongPress);

    images.push(img);
    updateSlider();
  };

  reader.readAsDataURL(file);
}

function updateSlider() {
  const slider = document.getElementById('slider');
  slider.innerHTML = "";
  images.forEach((img, index) => {
    if (index === currentIndex) img.classList.add('active');
    else img.classList.remove('active');
    slider.appendChild(img);
  });
}

function startSlider() {
  sliderInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
  }, 3000);
}

function pauseSlider() {
  clearInterval(sliderInterval);
}

function startLongPress(e) {
  e.preventDefault();
  longPressTimer = setTimeout(() => {
    document.getElementById('interactionPopup').classList.remove('hidden');
  }, 600);
}

function clearLongPress() {
  clearTimeout(longPressTimer);
}

function sendComment() {
  alert("コメントを送信しました（匿名）");
  document.getElementById('interactionPopup').classList.add('hidden');
}

function sendLike() {
  alert("いいねを送りました（匿名）");
  document.getElementById('interactionPopup').classList.add('hidden');
}
