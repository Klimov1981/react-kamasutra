import axios from 'axios'
import './Users.css'
import userPhoto from "../../assets/images/user.png"
import React from 'react'

export class Users extends React.Component{
  // props здесь является частью объекта, они не передаются, поэтому this.props

  getUsers = () => {
      if (this.props.users.length === 0) {
  
  
        axios.get("https://cors-anywhere.herokuapp.com/https://social-network.samuraijs.com/api/1.0/users").then(response => {
  
          this.props.setUsers(response.data.items)
        })
      }
    }
  render() {
    return  <>
          <button onClick={this.getUsers}>Get users</button>
          {
            this.props.users.map(u => <div className='user' key={u.id}>
              <span className='ava-box'>
                <div>
                  <img className='user-img' src={u.photos.small != null ? u.photos.small : userPhoto} alt={u.name} />
                </div>
                <div>
                  {u.followed
                    ? <button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button>
                    : <button onClick={() => { this.props.follow(u.id) }}>Follow</button>}
                </div>
              </span>
              <span className='user-info'>
                <span>
                  <div>{u.name}</div>
                  <div>{u.status}</div>
                </span>
                <span>
                  <div>{"u.location.city"}</div>
                  <div>{"u.location.citizenship"}</div>
                </span>
              </span>
    
            </div>)
          }
    
        </>
  }
}