import React, { useEffect, useState } from 'react'
import { User } from '../api/types'
import {getAllUser} from '../api/user'
import UserProfile from './UserProfile'


const AllUsers = () => {
    const [users, setUsers] = useState<Array<User>>([])
    const [author, setAuthor] = useState<User | null>(null)

    async function _getAllUsers() {
        console.log("useEffect");
        const data = await getAllUser();
        setUsers(data);
    }

    useEffect(() => {
        _getAllUsers();
    }, [])
    function renderItem(values: User) {
        return (
            <div key={values.id}>
                <UserProfile {...values} />
            </div>
        )
    }
    return <ul className="User-list">{users.map(renderItem)}</ul>
}

export default AllUsers
