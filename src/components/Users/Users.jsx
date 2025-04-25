import axios from 'axios';
import './Users.css';
import userPhoto from "../../assets/images/user.png";
import React from 'react';

export class Users extends React.Component {
  // props здесь является частью объекта, они не передаются, поэтому this.props
  componentDidMount() {
    axios.get("https://social-network.samuraijs.com/api/1.0/users")
      .then(response => {
        const uniqueUsers = response.data.items.filter(
          (user, index, self) => index === self.findIndex(u => u.id === user.id)
        );
        this.props.setUsers(uniqueUsers);
      });
  }

  render() {
    let pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
    }
    return <>
      <div>
        {pages.map(page => {
          return <span
            key={page}
            className={this.props.currentPage === page ? "selected-page" : ""}>{page}
          </span>
        })}
      </div>
      {
        this.props.users.map(u => <div className='user' key={u.id}>
          <span className='ava-box'>
            <div>
              <img className='user-img' src={u.photos.small != null ? u.photos.small : userPhoto} alt={u.name} />
            </div>
            <div>
              {u.followed
                ? <button onClick={() => { this.props.unfollow(u.id); }}>Unfollow</button>
                : <button onClick={() => { this.props.follow(u.id); }}>Follow</button>}
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
    </>;
  }
}