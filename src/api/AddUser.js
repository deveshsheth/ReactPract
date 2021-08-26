import React from 'react'
import { useState } from 'react'


export const AddUser = (props) => {
    const [name, setname] = useState('')
    const [job, setjob] = useState('')

    const submit = (e) => {

        e.preventDefault();
        var emp = {

            name: name,
            job: job
        }
        props.addUser(emp)

    }
    return (
        <div className="container">
            <br></br>
            <form onSubmit={submit}>
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" placeholder="Enter name" onChange={(e) => { setname(e.target.value) }} />
                </div><br></br>
                <div class="form-group">
                    <label for="job">Job Type</label>
                    <input type="text" class="form-control" placeholder="Enter job" onChange={(e) => { setjob(e.target.value) }} />
                </div>

            <br></br>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
