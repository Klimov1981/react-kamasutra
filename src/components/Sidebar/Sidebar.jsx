import { NavLink } from 'react-router-dom'
import './Sidebar.css'

export const Sidebar = () => {
  return (
    <>
      <aside className='sidebar'>
        <nav >
          <ul>
            <li>
              <NavLink to="/profile" className='sidebar__link'>
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink to="/dialogs" className='sidebar__link'>
                Messsages
              </NavLink>
            </li>
            <NavLink to="/users" className='sidebar__link'> Users</NavLink>
            <li>
              <NavLink to="/news" className='sidebar__link'>News</NavLink>
            </li>
            <li>
              <NavLink to="/music" className='sidebar__link'>Music</NavLink>
            </li>
            <li>
              <NavLink to="/settings" className='sidebar__link'>Settings</NavLink>
            </li>
          </ul>
        </nav>

      </aside>
    </>
  )
}