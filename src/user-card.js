const cardStyle ={
    backgroundColor: 'tomato',
    borderRadius: '10px',
    margin: '10px',
    padding: '8px',
    width: '500px'
}

export default function UserCard({userName})
{
    return(
        <div className="user-card" style={cardStyle}> 
            <h1>{userName}</h1>
        </div>
    )
}

const userCardBioStyle = {
    backgroundColor: 'bisque',
    borderRadius: '10px',
    margin: '10px',
    padding: '10px',
    width: '200px',
    borderRadius : '1px solid black'
}

export function UserCardBio({userName , bio}){
    return(
        <div className="user-card-bio" style={userCardBioStyle}>
            <h1>{userName}</h1>
            <p>{bio}</p>
        </div>
    )
}