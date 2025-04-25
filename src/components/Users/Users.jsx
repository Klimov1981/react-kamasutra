import axios from 'axios';
import './Users.css';
import userPhoto from "../../assets/images/user.png";
import React from 'react';

export class Users extends React.Component {
  // props здесь является частью объекта, они не передаются, поэтому this.props
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        const uniqueUsers = response.data.items.filter(
          (user, index, self) => index === self.findIndex(u => u.id === user.id)
        );
        this.props.setUsers(uniqueUsers);
        this.props.setTotalUsersCount(response.data.totalCount)
      });
  }

  onPageChange = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
    .then(response => {
      this.props.setUsers(response.data.items)
    })
    
  }

  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
    }
    console.log(this.props);
    return <>
      <div>
        {pages.map(page => {
          return <span
            key={page}
            className={this.props.currentPage === page ? "selected-page" : ""}
            onClick={() => {this.onPageChange(page)}}>{page}
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