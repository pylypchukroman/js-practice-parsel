console.log("OK - 3");


const counter = document.querySelector('.counter');
const button = document.querySelector('.btn');

button.addEventListener('click', onButtonClick);

const promice = fetch('https://jsonplaceholder.typicode.com/todos/3/todos')
    .then(response => response.json());

promice.then(data => console.log(data));

function onButtonClick() {
    promice.then(data => data.map((user) => console.log(user.title)))


    promice.then(data => counter.textContent = data.title);
}
