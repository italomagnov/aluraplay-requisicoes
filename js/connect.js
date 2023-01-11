const endpoint = 'http://localhost:3000/videos';

async function getData() {
    const apiResponse = await fetch(endpoint);
    const data = await apiResponse.json();

    return data;
}

export const connect = {
    getData,
};
