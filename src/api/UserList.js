import React, { useState } from 'react'
import { Link, Route } from 'react-router-dom';
import { UserDetails } from '../api/UserDetails';
import { MDBContainer, MDBAlert } from 'mdbreact';
import { AddUser } from './AddUser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const UserList = () => {
    const [users, setusers] = useState([])
    const [isLoading, setisLoading] = useState(false)
    const [isError, setisError] = useState(null)

    async function addUser(emp) {



        console.log("stringfy...", JSON.stringify(emp))
        const res = await fetch('https://reqres.in/api/users', {
            method: 'POST',
            body: JSON.stringify(emp),
    
            headers: {
                'Content-Type': "application/json",
            }
        })
        const data = await res.json();
        toast.success('User Added !!', {
            position: toast.POSITION.TOP_RIGHT
        })
        console.log("res =>", data)
    }

    async function fetchUsers() {

        setisLoading(true)
        try {
            const res = await fetch('https://reqres.in/api/users?page=2')
            const data = await res.json();
            setusers(data.data);
            setisLoading(false)

            if (!res.ok) {

                throw new Error('Somethint went wrong !!')
            }

        } catch (error) {

            setisError(error.message)
        }
    }

    return (
        <div>
            <br></br>
            <Link to="/userlist/usersdata"><button className="btn btn-info" onClick={fetchUsers}>FETCH USERS</button></Link>
            &nbsp;&nbsp;&nbsp;
            <Link to="/userlist/addusers"><button className="btn btn-info">Add User</button></Link>

            {/* addusers */}
            
            <Route path="/userlist/addusers" exact>
            <ToastContainer/>
                <AddUser addUser={addUser} />
            </Route>

            {/* fetchUsers */}
            <Route path="/userlist/usersdata" exact>
                <br></br>
                {isLoading &&
                    <button class="btn btn-primary" type="button" disabled>
                        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>&nbsp;&nbsp;
                        Loading ...
                    </button>}
                <br></br>
                {
                    !isLoading &&
                    <button class="btn btn-primary" type="button" disabled>

                        Data Loaded ...
                    </button>
                }<br></br>
                {!isLoading && isError && <p>{isError}</p>}
                <br></br>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user) => {
                                return (
                                    <tr>
                                        <th scope="row"><Link to={`/userlist/users/${user.id}`}> {user.id}</Link></th>

                                        <td>{user.first_name}</td>
                                        <td>{user.last_name}</td>
                                        <td>{user.email}</td>
                                    </tr>
                                )
                            })}

                    </tbody>
                </table>
            </Route>

            <Route path="/userlist/users/:id" exact>
                <UserDetails />
            </Route>
        </div>
    )
}
