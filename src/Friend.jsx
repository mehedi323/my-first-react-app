 

export default function Friend({friend}){
    console.log(friend)
    const {id, title, body}= friend;
    const friendStyle ={
        border: "2px solid gold",
        padding: "20px",
        margin: "20px",
        borderRadius: "30px"
    }
    return(
        <div style={friendStyle}>
            <h1>ID: {id}</h1>
            <h2>Friends: {title}</h2>
            <p>Body: {body}</p>
        </div>
    )
}