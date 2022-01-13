console.log("OK - 1");
let secund = 0;
let intervalId;

const refs = {
  hours: document.querySelector('#hours'),
  minutes: document.querySelector('#minutes'),
  secunds: document.querySelector('#secunds'),
  targetTimer: document.querySelector('#target-timer'),
  save: document.querySelector('#save'),
  timestamp: document.querySelector('#timestamp'),
};

refs.save.addEventListener('click', e => {
  imitatedServer('times')
    .then(res => {
      const times = res === null ? [] : res;
      times.push(secund);
      return times;
    })
    .then(times => imitatedServer('times', 'SET', times))

    .catch(console.log);
});

refs.targetTimer.addEventListener('click', onTimerClick);

function onTimerClick(e) {
  if (e.target.textContent === 'Stop') {
    clearInterval(intervalId);
    e.target.textContent = 'Start';
  } else {
    intervalId = setInterval(() => {
      secund += 1;
      convertS(secund);
    }, 1000);
    e.target.textContent = 'Stop';
  }
}

function convertS(s) {
  const hours = Math.floor(s / 60 / 60);
  s = s - 60 * 60 * hours;
  const minutes = Math.floor(s / 60);
  s = s - 60 * minutes;
  const secunds = s;
  refs.hours.innerHTML = hours.toString().padStart(2, 0);
  refs.minutes.innerHTML = minutes.toString().padStart(2, 0);
  refs.secunds.innerHTML = secunds.toString().padStart(2, 0);
}

function printTimestamp(s) {
  const hours = Math.floor(s / 60 / 60);
  s = s - 60 * 60 * hours;
  const minutes = Math.floor(s / 60);
  s = s - 60 * minutes;
  const secunds = s;
  refs.timestamp.insertAdjacentHTML(
    'beforeend',
    `<li>${hours.toString().padStart(2, 0)}:${minutes.toString().padStart(2, 0)}:${secunds
      .toString()
      .padStart(2, 0)}</li>`,
  );
}

const imitatedServer = (key, type = 'GET', data = {}) => {
  const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);

  return new Promise((res, rej) => {
    setTimeout(() => {
      if (Math.random() > 0.1) {
        if (type === 'GET') {
          res(JSON.parse(localStorage.getItem(key)));
        } else if (type === 'SET') {
          localStorage.setItem(key, JSON.stringify(data));
          res(true);
        } else {
          rej('invalid type');
        }
      } else rej('oops!!!');
    }, getRandomInt(1000, 5000));
  });
};

imitatedServer('times')
  .then(times => {
    if (times === null) return;
    console.log(times);
    times.forEach(printTimestamp);
  })
  .catch(console.log);