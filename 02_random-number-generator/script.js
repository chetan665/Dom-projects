let box = document.querySelector('#box');
let button = document.querySelector('button');

button.addEventListener('click', () => {
  box.innerText = Math.floor(Math.random() * 1000);
});
