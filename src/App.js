import './App.css'
import React from '@testing-library/react'
import NavbarContainer from './componets/Navbar/NavbarContainer'
import { Route } from 'react-router-dom'
import News from './componets/News/news'
import Music from './componets/Music/music'
import Settings from './componets/Settings/settings'
import DialogsContainer from './componets/Dialogs/DialogsContainer'
import FindUsersContainer from './componets/Users/container/findUsersContainer'
import ProfileContainer from './componets/Profile/ProfileContainer'
import HeaderContainer from './componets/Header/HaederContainer'
import LoginContainer from './componets/Login/loginContainer'


const App = () => {

  return (
    <div className='app-wrapper'>
      <HeaderContainer />
      <NavbarContainer />
      <div className='app-wrapper-content'>
        <Route path='/profile/:userId?'
          render={() => <ProfileContainer />} />

        <Route path='/dialogs'
          render={() => <DialogsContainer />} />

        <Route path='/news'
          render={() => <News />} />

        <Route path='/music'
          render={() => <Music />} />

        <Route path='/settings'
          render={() => <Settings />} />

        <Route path='/login'
          render={() => <LoginContainer />} />

        <Route path='/find-users'
          render={() => <FindUsersContainer/>} />
      </div>
    </div>
  );
}

export default App;
