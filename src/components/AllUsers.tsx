import React, { useEffect, useState } from 'react'
import { User } from '../api/types'
import {getAllUser} from '../api/user'


const AllUsers = () => {
    const [users, setUsers] = useState<Array<User>>([])

    async function _getAllUsers() {
        console.log("useEffect");
        const data = await getAllUser();
        setUsers(data);
    }

    useEffect(() => {
        _getAllUsers();
    }, [])

    function renderUsers(values: User) {
        return (
            <div key={values.id}>
                <h1> {values.name} </h1>
                <ul>
                    <li>Pseudo : {values.username}</li>
                    <li>Email : {values.email}</li>
                </ul>
            </div>
            
        )
    }
    return <ul className="user-list">{users.map(renderUsers)}</ul>
}

export default AllUsers
