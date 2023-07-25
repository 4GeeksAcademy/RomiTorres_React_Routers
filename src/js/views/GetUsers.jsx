import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const GetUsers = () => {
    const [users, setUsers] = useState([]);
    const host = 'https://jsonplaceholder.typicode.com/';

    const fetchUser = async () => {
        if (localStorage.getItem('usersLocal') !== null) {
            setUsers(JSON.parse(localStorage.getItem('usersLocal')))
        } else {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            if (response.ok) {
                const data = await response.json();
                setUsers(data);
                // Hacer data en el localStorage
                localStorage.setItem('usersLocal', JSON.stringify(data))
            } else {
                console.log('error:', response.status, response.statusText)
            }
        }
    }
    useEffect(() => {
        fetchUser();
    }, []);



    return (
        <>
            <h3>Get Users</h3>
            <div className="card">
                <div className="card-header">
                    List Users
                </div>
                <ul className="list-group list-group-flush ">
                    {!users ? <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div> :

                        users.map((user, index) => {
                            return <li className="list-group-item d-flex justify-content-between " key={index}>
                                <div>
                                    {user.id} - <strong> Name:</strong> {user.name} -<strong> Username:</strong> {user.username} - <strong> Email: </strong>{user.email} - <strong>Ciudad:</strong> {user.address.city}
                                </div>
                                <div>
                                    <span className="px-6">
                                        <Link to={`/getusers/${user.id}`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                                                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                            </svg>
                                        </Link>
                                    </span>
                                </div>
                            </li>
                        })
                    }
                </ul>
            </div>
            <div className="position-absolute top-100 start-50 translate-middle">
                <Link to={`/`}>
                    <button type="button" className="btn btn-primary p">Return</button>
                </Link>
            </div>
        </>
    )
}