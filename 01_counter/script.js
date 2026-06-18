let h1 = document.querySelector('h1');
let button1 = document.querySelector('#increment');
let button2 = document.querySelector('#decrement');

button1.addEventListener('click', () => {
  console.log(h1.innerText);
  h1.innerText++;
  // console.log('clicked');
});

button2.addEventListener('click', () => {
  console.log(h1.innerText);
  h1.innerText--;
});
