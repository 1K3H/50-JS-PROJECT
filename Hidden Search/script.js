const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

btn.addEventListener('click', () => {
  search.classList.add('active');
  input.focus();
});

input.addEventListener('blur', () => search.classList.remove('active'));