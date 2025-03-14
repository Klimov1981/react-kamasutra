import './Sidebar.css'

export const Sidebar = () => {
 return (
  <>
     <aside className='sidebar'>
        <nav >
          <ul>
            <li>
              <a href="" className='sidebar__link'>
                Profile
              </a>
            </li>
            <li>
              <a href="" className='sidebar__link'>
              Messsages
              </a>
            </li>
            <li>
              <a href="" className='sidebar__link'>News</a>
            </li>
            <li>
              <a href="" className='sidebar__link'>Music</a>
            </li>
            <li>
              <a href="" className='sidebar__link'>Settings</a>
            </li>
          </ul>
        </nav>
      </aside>
  </>
 )
}