import { API_Picture } from './types'

const base_url = 'https://picsum.photos/v2/list'

function getAllPicture(): Array<API_Picture> {
    // Get all picture
    // [TODO] remove this return to use a fetch API
    return [
        {
            id: '0',
            author: 'Alejandro Escamilla',
            width: 5616,
            height: 3744,
            url: 'https://unsplash.com/photos/yC-Yzbqy7PY',
            download_url: 'https://picsum.photos/id/0/5616/3744',
        },
        {
            id: '1',
            author: 'Alejandro Escamilla',
            width: 5616,
            height: 3744,
            url: 'https://unsplash.com/photos/LNRyGwIJr5c',
            download_url: 'https://picsum.photos/id/1/5616/3744',
        },
        {
            id: '10',
            author: 'Paul Jarvis',
            width: 2500,
            height: 1667,
            url: 'https://unsplash.com/photos/6J--NXulQCs',
            download_url: 'https://picsum.photos/id/10/2500/1667',
        },
    ]
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
