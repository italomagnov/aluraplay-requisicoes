import { connectApi } from './connect.js';
import createCardVideo from './showData.js';

async function searchVideo(evento) {
    evento.preventDefault();
    const searchList = document.querySelector('[data-list]');
    searchList.innerHTML = '';

    const inputSearch = document.querySelector('[data-search]').value;
    const search = await connectApi.searchVideo(inputSearch);

    search.forEach((item) =>
        searchList.appendChild(
            createCardVideo(item.titulo, item.descricao, item.url, item.imagem)
        )
    );

    if (search.length === 0) {
        searchList.innerHTML = `<h2 class='mensagem__titulo'>Não existe vídeos com esse termo</h2>`;
    }
}

const btnSearch = document.querySelector('[data-btnSearch]');

btnSearch.addEventListener('click', (evento) => searchVideo(evento));
