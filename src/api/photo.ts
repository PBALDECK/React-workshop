import { API_Picture } from './types'

const base_url = 'https://picsum.photos/v2/list'

async function getAllPicture(): Promise<Array<API_Picture>> {
    // Get all picture
    // [TODO] remove this return to use a fetch API
    const response = await fetch(base_url);
    return await response.json();
}

function getPicture(id: API_Picture['id']): API_Picture {
    // Get a picture
    // [TODO] remove this return to use a fetch API
    return {
        id,
        author: 'Alejandro Escamilla',
        width: 5616,
        height: 3744,
        url: 'https://unsplash.com/photos/yC-Yzbqy7PY',
        download_url: 'https://picsum.photos/id/0/5616/3744',
    }
}

export { getAllPicture, getPicture }
