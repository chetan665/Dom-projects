let box = document.querySelector('#box');
let button = document.querySelector('button');

button.addEventListener('click', () => {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);

  let b = Math.floor(Math.random() * 255);
  console.log(r);
  console.log(g);

  console.log(b);

  box.style.backgroundColor = `rgb(${r},${g},${b})`;
});
