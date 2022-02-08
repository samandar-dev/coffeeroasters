let elMenuBtn = document.getElementById('menuBtn');
let elMenuBox = document.getElementById('menuBox');
let elMenuRemov = document.getElementById('menuRemov')

elMenuBtn.addEventListener('click', function () {
  elMenuBtn.classList.add('m-none');
})

elMenuRemov.addEventListener('click', function () {
  elMenuBtn.classList.add('m-block');
})

elMenuBtn.addEventListener('click', function () {
  elMenuBox.classList.add('open-menu');
})

elMenuRemov.addEventListener('click', function () {
  elMenuBox.classList.add('menu-remov');
})