import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
delayNode : document.querySelector('input[name=delay]'),
stepNode : document.querySelector('input[name=step]'),
amountNode: document.querySelector('input[name=amount]'),
submitBtn : document.querySelector('button'),
form : document.querySelector('.form'),
};
refs.form.addEventListener('submit', handlerOnClick)

function createPromise(position, delay) {
  const promise = new Promise ((resolve, reject) =>{
 setTimeout (()=> {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    resolve({position, delay})
  } else {
    reject({position, delay})
  }},delay )})
  return promise;
}
function handlerOnClick (event) {
  event.preventDefault();
  // console.log(+refs.amount.value);
  const amount = +refs.amountNode.value;
  const startDelay = +refs.delayNode.value;
  const step = +refs.stepNode.value;


  let delay = startDelay;
  // console.log(delay);
  for (let i = 1; i <= amount; i++) {
  // console.log(delay);
    delay += step;


createPromise(i, delay)
  .then(({ position, delay }) => {
    Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
}
}


