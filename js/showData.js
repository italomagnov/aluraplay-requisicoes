import { connectApi } from './connect.js';

const videos__container = document.querySelector('[data-list]');

function createCardVideo(titulo, descricao, url, imagem) {
    const cardVideo = document.createElement('li');
    cardVideo.className = 'videos__item';
    cardVideo.innerHTML = `<iframe  width="100%" 
        height="72%" 
        src=${url} 
        title=${titulo} 
        frameborder="0"
        allow="accelerometer; 
        autoplay; 
        clipboard-write; 
        encrypted-media; 
        gyroscope; 
        picture-in-picture"
        allowfullscreen>
    </iframe>
    <div class="descricao-video">
        <img src=${imagem} alt="logo canal alura">
        <h3>${titulo}</h3>
            <p>${descricao}</p>
    </div>`;

    return cardVideo;
}

async function consumeApi() {
    const apiList = await connectApi.getData();
    apiList.forEach((item) =>
        videos__container.appendChild(
            createCardVideo(item.titulo, item.descricao, item.url, item.imagem)
        )
    );
}

consumeApi();
