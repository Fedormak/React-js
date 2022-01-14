import './App.css'
import React from '@testing-library/react'
import Header from './componets/Header/Haeder'
import NavbarContainer from './componets/Navbar/NavbarContainer'
import Profile from './componets/Profile/Profile'
import { Route } from 'react-router-dom'
import News from './componets/News/news'
import Music from './componets/Music/music'
import Settings from './componets/Settings/settings'
import DialogsContainer from './componets/Dialogs/DialogsContainer'
import FindUsers from "./componets/Users(Find)/findUsers"

const App = () => {

  return (
    <div className='app-wrapper'>
      <Header />
      <NavbarContainer />
      <div className='app-wrapper-content'>
        <Route path='/pofile'
          render={() => <Profile />} />

        <Route path='/dialogs'
          render={() => <DialogsContainer />} />

        <Route path='/news'
          render={() => <News />} />

        <Route path='/music'
          render={() => <Music />} />

        <Route path='/settings'
          render={() => <Settings />} />
        <Route path='/find-users'
          render={() => <FindUsers />} />
      </div>
    </div>
  );
}

export default App;
