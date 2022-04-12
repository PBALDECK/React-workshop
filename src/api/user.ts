import { User } from './types'


const base_url = 'http://localhost:3004/users'

async function getAllUser(): Promise<Array<User>> {
    // Get all users
    // [TODO] remove this return to use a fetch API
    const response = await fetch(base_url);
    return await response.json();
}

async function getUser(id: User['id']): Promise<User> {
    // Get a user
    // [TODO] remove this return to use a fetch API
    const response = await fetch(`${base_url}/${id}`);
    return await response.json();
}

export { getAllUser, getUser }
