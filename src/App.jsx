import './App.css';
import { Sidebar } from './components/Sidebar/Sidebar';
import { DialogsContainer } from './components/Dialogs/DialogsContainer';
import { Routes, Route, Navigate } from 'react-router-dom';
import { News } from './components/News/News';
import { Music } from './components/Music/Music';
import { Settings } from './components/Settings/Settings';
import  UsersContainer  from './components/Users/UsersContainer';
import  ProfileContainer  from './components/Profile/ProfileContainer';
import  HeaderContainer  from './components/Header/HeaderContainer';
import { Login } from './components/Login/Login';

function App() {
  return (
    
    <div className="app-wrapper">
      <HeaderContainer />
      <Sidebar />
      <main className="main">
        <Routes>
          <Route path='/' element={<Navigate to="/profile" />} />
          <Route
            path='/profile/:userId?' element={<ProfileContainer  />}
          />
          <Route
            path='/dialogs' 
            element={<DialogsContainer  />}
          />
          <Route path='/users' element={<UsersContainer />}/>
          <Route path='/news' element={<News />} />
          <Route path='/music' element={<Music />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </main>
    </div>

  );
}

export default App;