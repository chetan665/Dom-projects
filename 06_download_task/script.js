// DOM JS Project

let button = document.querySelector('button');
let inner = document.querySelector('.inner');
let h1 = document.querySelector('h1');

button.addEventListener('click', () => {
  button.innerText = 'Downloading...';
  let digit = 50 + Math.floor(Math.random() * 10);
  let n = 0;
  let num = setInterval(() => {
    h1.innerText = `${n}%`;
    inner.style.width = `${n}%`;
    console.log(h1.innerText);
    n++;
    if (n > 100) {
      clearInterval(num);
      button.innerText = 'Downloaded';
      button.style.opacity = 0.6;
      button.style.pointerEvents = 'none';
    }
  }, digit);
});
