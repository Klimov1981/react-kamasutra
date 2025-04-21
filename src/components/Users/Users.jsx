import './Users.css'

export const Users = (props) => {

if (props.users.length === 0) {
  props.setUsers([
    { id: 7, photoUrl: 'https://i.pinimg.com/736x/19/d8/d6/19d8d6120cc94f5d7484e537a134084d.jpg', followed: false, fullName: "Sophie Martin", status: "teacher", location: { city: "Paris", citizenship: "France" } },
    { id: 8, photoUrl: 'https://i.pinimg.com/736x/19/d8/d6/19d8d6120cc94f5d7484e537a134084d.jpg', followed: true, fullName: "Иван Козлов", status: "engineer", location: { city: "Yekaterinburg", citizenship: "RF" } },
    { id: 9, photoUrl: 'https://i.pinimg.com/736x/19/d8/d6/19d8d6120cc94f5d7484e537a134084d.jpg', followed: false, fullName: "Anna Müller", status: "artist", location: { city: "Berlin", citizenship: "Germany" } },
    { id: 10, photoUrl: 'https://i.pinimg.com/736x/19/d8/d6/19d8d6120cc94f5d7484e537a134084d.jpg', followed: true, fullName: "Дмитрий Волков", status: "musician", location: { city: "Sochi", citizenship: "RF" } }
  ])
}

  return (
    <>

      {
        props.users.map(u => <div className='user' key={u.id}>
          <span className='ava-box'>
            <div>
              <img className='user-img' src={u.photoUrl} alt={u.fullName} />
            </div>
            <div>
              {u.followed
                ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
            </div>
          </span>
          <span className='user-info'>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.city}</div>
              <div>{u.location.citizenship}</div>
            </span>
          </span>

        </div>)
      }

    </>
  )
}