import { NavLink } from 'react-router-dom'
import './Header.css'

export const Header = (props) => {
 return (
  <>
   <header className='header'>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Circle-ye-3.svg/1024px-Circle-ye-3.svg.png" alt="logo" />
    <div className='login-block'>
     {props.isAuth ? props.login : <NavLink className={'login-block__link'} to={'/login'}>Login</NavLink>}
      
     </div>
   </header>
  </>
 )
}