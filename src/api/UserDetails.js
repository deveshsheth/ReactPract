import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export const UserDetails = () => {
    const params = useParams();
    const [user, setuser] = useState('')


    useEffect(() => {

        fetchUsers();
    })



    const style = {

        width: "18rem"
    }

    function fetchUsers() {


        fetch(`https://reqres.in/api/users/${params.id}`).then(res => {

            return res.json();
        }).then(data => {

            console.log("data --- >", data.data)
            setuser(data.data)
        })

    }


    return (
        <div className="container"><br></br>
            <div class="card" style={style}>
                <img src={user.avatar} class="card-img-top" />
                <div class="card-body">
                    <h5 class="card-title">{user.first_name}</h5>
                    <p class="card-text">{user.last_name}</p>
                    <p class="card-text">{user.email}</p>
                    <button onClick={fetchUsers} className="btn btn-success">GET USER</button>
                </div>

            </div>
        </div>


    )
}
