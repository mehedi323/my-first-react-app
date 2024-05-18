import { useEffect, useState } from "react"
import Friend from "./Friend";

export default function Friends() {
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=> res.json())
        .then(data=> setFriends(data))
    }, []);
    const friendStyle = {
        margin: '20px',
        padding: '20px',
        border: '2px solid green',
        borderRadius: '20px'
    }
    return (
        <div style={friendStyle}>
            <h2>Friends: {friends.length} </h2>
            {
                friends.map(friend => <Friend friend={friend}></Friend>)
            }
        </div>
    )
}