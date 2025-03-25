import { NavLink } from 'react-router-dom'
import './Chat.css'

export const Chat = (props) => {
 return (
     <>
         <div className='chat active'>
             <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
         </div>
     </>
 )
}