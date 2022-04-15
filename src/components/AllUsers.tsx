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
                <h1> Nom :  {values.name} </h1>
                <ul>
                    <li>Pseudo : {values.username}</li>
                    <li>Email : {values.email}</li>
                    <li>Entreprise : {values.company.name}</li>
                    <li>Téléphone : {values.phone}</li>
                    <li>Adresse : {values.address.street}{values.address.city} {values.address.zipcode}</li>
                </ul>
            </div>
            
        )
    }
    return <ul className="user-list">{users.map(renderUsers)}</ul>
}

export default AllUsers
