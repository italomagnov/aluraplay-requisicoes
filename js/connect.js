const endpoint = 'http://localhost:3000/videos';

async function getData() {
    const apiResponse = await fetch(endpoint);
    const data = await apiResponse.json();

    return data;
}

async function createVideo(titulo, descricao, url, imagem) {
    const apiResponse = await fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem,
        }),
    });
    if (!apiResponse.ok) {
        throw new Error('Erro ao tentar inserir um novo vídeo');
    }
    const data = await apiResponse.json();

    return data;
}

async function searchVideo(inputSearch) {
    const apiResponse = await fetch(`${endpoint}?q=${inputSearch}`);
    const data = await apiResponse.json();

    return data;
}

export const connectApi = {
    getData,
    createVideo,
    searchVideo,
};
