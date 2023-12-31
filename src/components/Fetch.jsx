import React, { useEffect, useState } from 'react'

function Fetch() {

    const [users, setUsers] = useState([])

    const getUsersList = () => {
        fetch('https://jsonplaceholder.typicode.com/users').then(response => {
            response.json().then(data => {
                // console.log(data)
                setUsers(data)
            })
        })
    }

    useEffect(() => {
        getUsersList()
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
                                    users.map((user,index) => (
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

export default Fetch