import { connectApi } from './connect.js';

const formulario = document.querySelector('[data-formulario]');

async function criarVideo(evento) {
    evento.preventDefault();

    const titulo = document.querySelector('[data-titulo]').value;
    const descricao = Math.floor(Math.random() * 10).toString();
    const url = document.querySelector('[data-url]').value;
    const imagem = document.querySelector('[data-imagem]').value;
    try {
        await connectApi.createVideo(titulo, descricao, url, imagem);

        window.location.href = '../pages/envio-concluido.html';
    } catch (e) {
        alert(e);
    }
}

formulario.addEventListener('submit', (evento) => criarVideo(evento));
