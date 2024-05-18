import { useEffect, useState } from "react"
import Users from "./Users";

export default function User() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    const userStyle ={
        border: '2px solid red',
        padding: '20px',
        margin: '20px',
        borderRadius: '20px'
    }
 
    return (
        <div style={userStyle}>
            <h2>User: {users.length} </h2>
            {
                users.map(user => <Users user={user}></Users>)
            }
        </div>
    )
}