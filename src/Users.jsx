export default function Users({user}){
    const {name, email} = user;

    const usersdStyle ={
        border: '2px solid purple',
        padding: '20px',
        margin: '20px',
        borderRadius: '20px'
    }

    return(
        <div style={usersdStyle}>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
        </div>
    )
}