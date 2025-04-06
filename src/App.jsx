import './App.css';
import { Header } from './components/Header/Header';
import { Profile } from './components/Profile/Profile';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Dialogs } from './components/Dialogs/Dialogs';
import { Routes, Route, Navigate } from 'react-router-dom';
import { News } from './components/News/News';
import { Music } from './components/Music/Music';
import { Settings } from './components/Settings/Settings';

function App(props) {

  return (

    <div className="app-wrapper">
      <Header />
      <Sidebar />
      <main className="main">
        <Routes>
          <Route path='/' element={<Navigate to="/profile" />} />
          <Route
            path='/profile' element={<Profile
              state={props.state.profilePage}
              dispatch={props.dispatch}
            />}
          />
          <Route
            path='/dialogs' element={<Dialogs state={props.state.dialogsPage} />}
          />
          <Route path='/news' element={<News />} />
          <Route path='/music' element={<Music />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </main>
    </div>

  );
}

export default App;