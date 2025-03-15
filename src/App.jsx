import './App.css'
import { Header } from './components/Header/Header'
// import { Profile } from './components/Profile/Profile'
import { Sidebar } from './components/Sidebar/Sidebar'
import {Dialogs} from "./components/Dialogs/Dialogs.jsx";


function App() {

  return (
    <div className='app-wrapper'>
        <Header />
        <Sidebar />
        <main className='main'>
            <Dialogs />
        </main>
     {/* <Profile />*/}
    </div>
  )
}

export default App
