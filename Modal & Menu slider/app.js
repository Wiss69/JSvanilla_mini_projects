const btnMenu = document.querySelector('.btn-menu');
console.log(btnMenu);

btnMenu.addEventListener('click', (e) => {
  document.getElementsByTagName('body')[0].classList.toggle('show');
});
