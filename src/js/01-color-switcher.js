function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
console.log(getRandomHexColor());

const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');
let timerId = null;
buttonStart.addEventListener('click', function () {
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  buttonStop.removeAttribute('disabled');
  buttonStart.setAttribute('disabled', true);
});

buttonStop.addEventListener('click', () => {
  clearInterval(timerId);
  buttonStart.removeAttribute('disabled');
  buttonStop.setAttribute('disabled', true);
});