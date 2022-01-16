// console.log("OK - 3");


// const counter = document.querySelector('.counter');
const button = document.querySelector('.btn');

// button.addEventListener('click', onButtonClick);

// const promice = fetch('https://jsonplaceholder.typicode.com/todos/1')
// const promice = fetch('https://jsonplaceholder.typicode.com/todos/1/posts')
// const promice = fetch('https://jsonplaceholder.typicode.com/todos/1/comments')
// const promice = fetch('https://jsonplaceholder.typicode.com/todos/1/albums')
// const promice = fetch('https://jsonplaceholder.typicode.com/todos/1/photos')
// const promice = fetch('https://jsonplaceholder.typicode.com/todos/1/todos')
const promice = fetch('https://jsonplaceholder.typicode.com/todos/1/users')
.then(response => response.json());

promice.then(data => console.log(data));

// function onButtonClick() {
//     promice.then(data => data.map((user) => console.log(user)))

// }


// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//     .then((json) => console.log(json));


// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//   method: 'PUT',
//   body: JSON.stringify({
//     id: 1,
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));


// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//   method: 'PATCH',
//   body: JSON.stringify({
//     title: 'foo',
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));


// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//   method: 'DELETE',
// });

