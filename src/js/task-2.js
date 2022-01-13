// console.log("OK - 2");
const refs = {
    menuList: document.querySelector('.menu__list'),
    mainEl: document.querySelector('main'),
}
const baseUrl = 'https://rickandmortyapi.com/api';

 function getDataServer(url) {
     return fetch(url)
         .then(response => response.json());
 }

getDataServer(baseUrl).then(data => {
    const markup = Object.entries(data).map(([key, value]) =>
        `<li><a href="${value}">${key}</a></li>`).join('');


    refs.menuList.innerHTML = markup;
});

document.addEventListener("click", event => {
    if (event.target.nodeName !== 'A') return;
    event.preventDefault();
    getDataServer(event.target.href).then(data => {
        const markupImage = data.results.map(character =>
            `<li><img src="${character.image}></img></li>`).join('');
        refs.mainEl.innerHTML = markupImage;
    });
});

