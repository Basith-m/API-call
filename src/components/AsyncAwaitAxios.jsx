import React, { useEffect, useState } from 'react'
import axios from 'axios'

function AsyncAwaitAxios() {
    const [users, setUsers] = useState([])

    const getUsers = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            // console.log(response.data);
            setUsers(response.data)
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getUsers()
    }, [])
    return (
        <div className='container d-flex justify-content-center py-5'>
            <div className='w-100'>
                <h1 className='text-center mb-4'>Users List</h1>
                {
                    users?.length > 0 ?
                        <table className='shadow table'>
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Address</th>
                                    <th>Phone</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((user, index) => (
                                        <tr key={index}>
                                            <td>{user.id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>
                                                {user.address.city}<br />
                                                {user.address.zipcode}
                                            </td>
                                            <td>{user.phone}</td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                        :
                        (
                            <p className='text-danger fw-bold text-center'>No users found !!!</p>
                        )
                }
            </div>
        </div>
    )
}

export default AsyncAwaitAxios