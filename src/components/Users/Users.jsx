import './Users.css'
import userPhoto from "../../assets/images/user.png";

export const Users = (props) => {

 let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

 let pages = []
 for (let i = 1; i <= pagesCount; i++) {
  pages.push(i)
 }
 return <>

  <div>
   {pages.map(page => {
    return <span
     key={page}
     className={props.currentPage === page ? "selected-page" : ""}
     onClick={() => { props.onPageChange(page) }}>{page}
    </span>
   })}
  </div>
  {
   props.users.map(u => <div className='user' key={u.id}>
    <span className='ava-box'>
     <div>
      <img className='user-img' src={u.photos.small != null ? u.photos.small : userPhoto} alt={u.name} />
     </div>
     <div>
      {u.followed
       ? <button onClick={() => { props.unfollow(u.id); }}>Unfollow</button>
       : <button onClick={() => { props.follow(u.id); }}>Follow</button>}
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