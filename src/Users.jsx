import { useEffect, useState } from "react"

export default function Users(){
    const [user, setUsers] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))

    } ,[])
    return (
        <div>
            <h3>Users: {user.length}               
            </h3>

        </div>
    )
}

/*
*1. declare a state to hold the data
*2.useEffect with callback and dependency array.
*3. use fetch to load data
*/